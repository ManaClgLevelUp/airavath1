import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { TrendingUp, Handshake, Mic } from "lucide-react";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";

const inquirySchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  type: z.enum(["investor", "partnership", "media"], { required_error: "Select inquiry type" }),
  message: z.string().trim().min(1, "Message is required").max(2000),
});

const channels = [
  {
    icon: TrendingUp,
    title: "Investor Relations",
    description: "Connect with AIRAVATH to explore investment opportunities in next-generation urban air mobility.",
    button: "Investor Inquiry",
  },
  {
    icon: Handshake,
    title: "Strategic Partnerships",
    description: "Collaborate with AIRAVATH to develop vertiport infrastructure and aerial mobility ecosystems.",
    button: "Partner With Us",
  },
  {
    icon: Mic,
    title: "Media & Press",
    description: "For interviews, press coverage, and media inquiries regarding AIRAVATH developments.",
    button: "Media Contact",
  },
];

const ContactSection = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();

  const [form, setForm] = useState({ name: "", email: "", type: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = inquirySchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    toast({ title: "Inquiry Submitted", description: "We'll get back to you shortly." });
    setForm({ name: "", email: "", type: "", message: "" });
  };

  const inputClass =
    "w-full h-[52px] rounded-[6px] border border-border bg-[#050505] px-4 text-foreground placeholder:text-[#777] font-body text-[16px] focus:outline-none focus:border-primary transition-colors";

  return (
    <section
      ref={ref}
      id="contact"
      className="relative overflow-hidden section-padding"
      style={{ background: "linear-gradient(180deg, #000000, #020202)" }}
    >
      {/* Background grid */}
      <div className="absolute inset-0 grid-overlay opacity-[0.06] pointer-events-none" />

      <div className="container-airavath relative z-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="font-heading text-[36px] md:text-[48px] font-semibold text-foreground tracking-futuristic text-center mb-[24px]"
        >
          Join the Future of Urban Air Mobility
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-body text-[18px] leading-[1.6] text-titanium text-center max-w-[700px] mx-auto mb-[120px]"
        >
          AIRAVATH welcomes collaboration with investors, partners, and media
          organizations interested in shaping the future of urban air mobility.
        </motion.p>

        {/* Inquiry channel cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[40px] mb-[120px]">
          {channels.map((ch, i) => (
            <motion.div
              key={ch.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * i + 0.3 }}
              className="group flex flex-col rounded-[12px] border border-border bg-card p-[32px] min-h-[200px] hover:-translate-y-2 hover:shadow-[0_0_24px_hsl(189_100%_50%/0.15)] hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <ch.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-sub text-[22px] font-medium text-foreground mb-2">
                {ch.title}
              </h3>
              <p className="font-body text-[14px] text-titanium leading-relaxed flex-1">
                {ch.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Contact form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-[720px] mx-auto space-y-5"
        >
          <div>
            <input
              type="text"
              placeholder="Full Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className={inputClass}
              maxLength={100}
            />
            {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
          </div>

          <div>
            <input
              type="email"
              placeholder="Email Address"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className={inputClass}
              maxLength={255}
            />
            {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
          </div>

          <div>
            <select
              value={form.type}
              onChange={(e) => setForm({ ...form, type: e.target.value })}
              className={`${inputClass} appearance-none`}
            >
              <option value="" disabled>
                Select Inquiry Type
              </option>
              <option value="investor">Investor Inquiry</option>
              <option value="partnership">Partnership Inquiry</option>
              <option value="media">Media Inquiry</option>
            </select>
            {errors.type && <p className="text-destructive text-xs mt-1">{errors.type}</p>}
          </div>

          <div>
            <textarea
              placeholder="Your Message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className={`${inputClass} h-[140px] py-4 resize-none`}
              maxLength={2000}
            />
            {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full h-[56px] rounded-[8px] bg-primary text-primary-foreground font-sub text-[14px] font-medium hover:scale-[1.02] hover:shadow-[0_0_24px_hsl(189_100%_50%/0.4)] transition-all duration-300"
          >
            Submit Inquiry
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
