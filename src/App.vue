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
    getProjects(pagination){
      axios.get('http://127.0.0.1:8000/api/projects', { params:{ page: pagination} }).then((res) => {
        store.currentPage = res.data.projects.current_page;
        store.lastPage = res.data.projects.last_page;
        store.projects = res.data.projects.data;

      })

    }
  },
  mounted() {
    this.getProjects(1);
  },
}

</script>

<template>
  <AppMain
    @change-page="getProjects" 
  />
</template>

<style lang="scss" scoped>

</style>
