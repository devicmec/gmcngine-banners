import { useContext } from "react";
import { DataContext } from "../../modules/MissingBanners";

export default function useCases() {
  const caseData = useContext(DataContext);
  return caseData;
}
