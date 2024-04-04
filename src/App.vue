<script>
import axios from 'axios';
export default{
  
  methods:{
    getProjects(){
      axios.get('http://127.0.0.1:8000/api/projects').then((res) => {
        console.log(res.data.projects);
      })

    }
  },
  mounted() {
    this.getProjects();
  },


}

</script>

<template>
  
<h1 class="text-center">Ciao mondo</h1>

</template>

<style lang="scss" scoped>

</style>
