import { NavLink, Outlet, Navigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { LayoutDashboard, Settings, Users, Mail, LogOut, Newspaper, Briefcase, FileText } from "lucide-react";
import { useEffect, useState } from "react";
import { doc, onSnapshot, setDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

const links = [
  { to: "/admin", icon: LayoutDashboard, label: "Dashboard", end: true },
  { to: "/admin/settings", icon: Settings, label: "Website Settings", end: false },
  { to: "/admin/team", icon: Users, label: "Team Members", end: false, toggleKey: "show_team_section" as const },
  { to: "/admin/inquiries", icon: Mail, label: "Inquiries", end: false },
  { to: "/admin/newsroom", icon: Newspaper, label: "Newsroom", end: false },
  { to: "/admin/careers", icon: Briefcase, label: "Careers", end: false },
  { to: "/admin/applications", icon: FileText, label: "Applications", end: false },
];

const AdminLayout = () => {
  const { user, isAdmin, loading, logout } = useAuth();
  const [showTeam, setShowTeam] = useState(true);

  useEffect(() => {
    const unsub = onSnapshot(doc(db, "website_settings", "main"), (snap) => {
      if (snap.exists()) {
        setShowTeam(snap.data().show_team_section !== false);
      }
    });
    return unsub;
  }, []);

  const toggleTeamSection = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const newVal = !showTeam;
    setShowTeam(newVal);
    try {
      await setDoc(doc(db, "website_settings", "main"), { show_team_section: newVal }, { merge: true });
    } catch {
      setShowTeam(!newVal);
    }
  };

  if (loading) return <div className="min-h-screen bg-black" />;
  if (!user || !isAdmin) return <Navigate to="/admin/login" replace />;

  return (
    <div className="min-h-screen bg-black flex">
      {/* Sidebar */}
      <aside className="w-[240px] bg-[#0B0B0B] border-r border-[#1a1a1a] flex flex-col fixed inset-y-0 left-0 z-40">
        <div className="h-16 flex items-center px-6 border-b border-[#1a1a1a]">
          <span className="font-heading text-lg text-white tracking-wider">AIRAVATH</span>
        </div>
        <nav className="flex-1 py-4 space-y-1 px-3">
          {links.map((l) => (
            <div key={l.to} className="relative">
              <NavLink
                to={l.to}
                end={l.end}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-[#00D9FF]/10 text-[#00D9FF]"
                      : "text-[#888] hover:text-white hover:bg-white/5"
                  }`
                }
              >
                <l.icon size={18} />
                <span className="flex-1">{l.label}</span>
                {l.toggleKey && (
                  <button
                    onClick={toggleTeamSection}
                    className={`flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider transition-colors ${
                      showTeam
                        ? "bg-emerald-500/15 text-emerald-400"
                        : "bg-red-500/15 text-red-400"
                    }`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${showTeam ? "bg-emerald-400" : "bg-red-400"}`} />
                    {showTeam ? "On" : "Off"}
                  </button>
                )}
              </NavLink>
            </div>
          ))}
        </nav>
        <div className="p-3 border-t border-[#1a1a1a]">
          <button
            onClick={logout}
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-[#888] hover:text-red-400 hover:bg-red-400/5 transition-colors w-full"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 ml-[240px]">
        <header className="h-16 border-b border-[#1a1a1a] bg-[#0B0B0B] flex items-center px-8 sticky top-0 z-30">
          <span className="text-white text-sm font-medium">Admin Dashboard</span>
        </header>
        <div className="p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;
