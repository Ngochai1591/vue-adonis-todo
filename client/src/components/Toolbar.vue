<template>
  <div>
    <v-toolbar flat color="green" dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-items class="mr-4">
        <v-btn depressed color="green" to="/">
          <v-icon x-large class="mr-2">home</v-icon>
          VUE TODO
        </v-btn>
      </v-toolbar-items>
      <v-toolbar-items>
        <v-btn color="green" dark depressed>
          <v-icon>playlist_add_check</v-icon>
          Projects
        </v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn color="green" dark depressed to="/register">
          <v-icon class="mr-2">account_box</v-icon>
          Register
        </v-btn>
        <v-btn color="green" dark depressed>
          <v-icon class="mr-2">fingerprint</v-icon>
          Login
        </v-btn>
        <v-btn color="green" dark depressed>
          <v-icon class="mr-2">exit_to_app</v-icon>
          Logout
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
export default {};
</script>
