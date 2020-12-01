import { useStorage } from "vue-composable";
import { includes } from "ramda";

export function useKillers() {
  const excludedKillers = useStorage("excludedKillers", [], true);
  const excludedKillerPerks = useStorage("excludedKillerPerks", [], true);

  function excludeKiller(killerName) {
    excludedKillers = includes(killerName)(excludedKillers)
      ? excludedKillers
      : [...excludedKillers, killerName];
  }

  return { excludedKillers, excludeKiller };
}
