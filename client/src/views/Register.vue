<template>
  <v-app>
    <v-container>
      <v-layout row wrap>
        <v-flex xs6 offset-xs3>
          <h1>Register Page</h1>
          <v-text-field 
            placeholder="Username" 
            label="Username" 
            :value="registerUsername"
            @input="setRegisterUsername"
            required>
          </v-text-field>

          <v-text-field 
            placeholder="Email" 
            label="Email" 
            type="email" 
            :value="registerEmail"
            @input="setRegisterEmail"
            required>
          </v-text-field>

          <v-text-field
            placeholder="Password"
            label="Password"
            type="password"
            autocomplete="new-password"
            :value="registerPassword"
            @input="setRegisterPassword"
            required
          ></v-text-field>
          <v-btn color="green" 
            @click="register"
            dark>
            <v-icon>account_circle</v-icon>
            Register
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
            'registerEmail',
            'registerPassword',
            'registerUsername'
        ])
    },
    methods:{
        ...mapMutations('authentication', [
            'setRegisterEmail',
            'setRegisterPassword',
            'setRegisterUsername',
        ]),
        ...mapActions('authentication', [
            'register'
        ])
    }
};
</script>