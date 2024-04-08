<script>
import axios from 'axios';
import { store } from './store';

import AppHeader from './components/header/AppHeader.vue';
import AppProjects from './components/pages/AppProjects.vue';


export default{
  components:{
    AppHeader,
    AppProjects,
  },

  data() {
    return {
      store,
    }
  },

}

</script>

<template>

  <header>
    <AppHeader/>
  </header>


  <main>
    <router-view></router-view>
  </main>

</template>

<style lang="scss" scoped>

</style>
