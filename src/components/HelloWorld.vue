<template>
  <h1>{{ msg }}</h1>
  <button @click="myStoredVariable++">count is: {{ myStoredVariable }}</button>
  <button @click="() => (myStoredVariable = 0)">reset count</button>
  <p>
    Edit <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<script>
import { ref } from "vue";
import { useLocalStorage } from "../composables/useLocalStorage";

export default {
  props: ["msg"],
  setup(props) {
    const myStoredVariable = useLocalStorage("bop", 0);

    const count = ref(0);

    return { count, myStoredVariable };
  },
};
</script>
