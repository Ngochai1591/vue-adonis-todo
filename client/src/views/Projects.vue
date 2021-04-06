<template>
<v-container>
  <v-layout>
    <v-flex xs4>
      <Projects></Projects>
    </v-flex>

    <v-flex xs8 class="pl-4">
      <Panel title="Tasks">
        <h1>TESTING</h1>
      </Panel>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
import Panel from '../components/Panel'
import Projects from '../components/Projects'
import {mapGetters} from 'vuex'
import router from '../router'
export default {
  components: {
    Projects,
    Panel
  },
  mounted(){
    if(!this.isLogginedIn){
      return router.push('/login')
    }
  },
  computed: {
    ...mapGetters('authentication', [
      'isLogginedIn'
    ])
  }
};
</script>
