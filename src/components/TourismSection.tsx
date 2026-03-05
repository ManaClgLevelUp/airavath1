import ComparisonBlock from "@/components/ComparisonBlock";
import problemTourism from "@/assets/problem-tourism.jpg";
import solutionTourism from "@/assets/solution-tourism.jpg";

const TourismSection = () => (
  <ComparisonBlock
    heading="Cities Deserve A Better Travel Experience"
    description="Exploring cities often involves long travel times through crowded streets. Premium aerial mobility opens a new perspective of urban travel."
    problemImage={problemTourism}
    problemAlt="Tourists stuck in crowded traffic bus"
    problemCaption="Hours Lost on the Road"
    solutionImage={solutionTourism}
    solutionAlt="Luxury eVTOL aircraft flying above scenic city landmarks with passengers"
    solutionCaption="Luxury Aerial City Tours"
  />
);

export default TourismSection;
