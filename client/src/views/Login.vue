<template>
  <v-app>
    <v-container>
      <v-layout row wrap>
        <v-flex xs6 offset-xs3>
          <h1>Login Page</h1>
          <v-text-field 
            placeholder="Username" 
            label="Username" 
            :value="loginUsername"
            @input="setLoginUsername"
            required>
          </v-text-field>

          <v-text-field
            placeholder="Password"
            label="Password"
            type="password"
            autocomplete="new-password"
            :value="loginPassword"
            @input="setLoginPassword"
            required
          ></v-text-field>
          <v-alert type="error" :value="loginError">
            {{loginError}}
          </v-alert>

          <v-btn color="green" 
            @click="login"
            dark>
            <v-icon>fingerprint</v-icon>
            Login
          </v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>
<script>
import {mapState, mapMutations, mapActions} from 'vuex';

export default {
    computed: {
        ...mapState('authentication', [
            'loginUsername',
            'loginPassword',
            'loginError',
        ])
    },
    methods:{
        ...mapMutations('authentication', [
            'setLoginUsername',
            'setLoginPassword',
            'setLoginError',
        ]),
        ...mapActions('authentication', [
            'login'
        ])
    }
};
</script>