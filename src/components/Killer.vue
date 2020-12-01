<template>
  <div class="killer-view"></div>
</template>

<script>
import { useKillers } from "../composables/useKillers";

export default {
  setup() {
    const { excludedKillers, excludeKiller } = useKillers();

    return { excludedKillers, excludeKiller };
  },
};
</script>

<style></style>
