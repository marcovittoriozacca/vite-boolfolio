<script>
import axios from 'axios';
import { store } from './store';

import AppMain from './components/main/AppMain.vue';

export default{
  components:{
    AppMain,
  },

  data() {
    return {
      store,
    }
  },

  methods:{
    getProjects(){
      axios.get('http://127.0.0.1:8000/api/projects').then((res) => {
        store.projects = res.data.projects;
      })

    }
  },
  mounted() {
    this.getProjects();
  },
}

</script>

<template>
  <AppMain/>
</template>

<style lang="scss" scoped>

</style>
