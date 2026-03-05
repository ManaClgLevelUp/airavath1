import ComparisonBlock from "@/components/ComparisonBlock";
import problemCargo from "@/assets/problem-cargo.jpg";
import solutionCargo from "@/assets/solution-cargo.jpg";

const CargoSection = () => (
  <ComparisonBlock
    heading="Urban Logistics Is Slowing Down Cities"
    description="Growing demand for rapid delivery is increasing congestion across cities, making traditional ground logistics slower and less efficient."
    problemImage={problemCargo}
    problemAlt="Delivery trucks stuck in city congestion with packages"
    problemCaption="Delays in Ground Logistics"
    solutionImage={solutionCargo}
    solutionAlt="Cargo eVTOL aircraft transporting packages across city skyline"
    solutionCaption="Fast Aerial Cargo Delivery"
  />
);

export default CargoSection;
