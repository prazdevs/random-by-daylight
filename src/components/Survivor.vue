<template>
  <pre> survivors: {{ survivors }}</pre>
  <pre> excluded survivors: {{ excludedSurvivors }}</pre>
</template>

<script>
import { useSurvivors } from "../composables/useSurvivors";

export default {
  setup() {
    const { survivors, excludedSurvivors } = useSurvivors();

    return { survivors };
  },
};
</script>

<style></style>
