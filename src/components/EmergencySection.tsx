import ComparisonBlock from "@/components/ComparisonBlock";
import problemAmbulance from "@/assets/problem-ambulance.jpg";
import solutionMedical from "@/assets/solution-medical.jpg";

const EmergencySection = () => (
  <ComparisonBlock
    heading="Emergency Response Delays Cost Lives"
    description="In critical medical emergencies, every minute matters. Traffic congestion and long ground travel times often delay access to hospitals and emergency care."
    problemImage={problemAmbulance}
    problemAlt="Ambulance stuck in heavy city traffic with flashing emergency lights"
    problemCaption="Minutes Lost in Traffic"
    solutionImage={solutionMedical}
    solutionAlt="AIRAVATH eVTOL air ambulance landing on hospital rooftop"
    solutionCaption="Emergency Care Without Delays"
    index={1}
  />
);

export default EmergencySection;
