<template>
  <v-app>
    <Toolbar />

  <router-view/>
  </v-app>
</template>

<script>
import Toolbar from "./components/Toolbar";

export default {
  name: "App",

  components: {
    Toolbar,
  },

  data: () => ({
    //
  }),
};
</script>
