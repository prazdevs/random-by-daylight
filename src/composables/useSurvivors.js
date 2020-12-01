import { useStorage } from "vue-composable";
import survivors from "../data/survivors";

export function useSurvivors() {
  const excludedStore = useStorage("excludedSurvivors", [], true);
  const excludedPerkStore = useStorage("excludedSurvivorPerks", [], true);

  function excludeSurvivor(survivor) {
    excludedSurvivors.push(survivor);
  }

  return { survivors, excludedSurvivors, excludeSurvivor };
}
