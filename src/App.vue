<script>
import AppHeader from './components/header/AppHeader.vue';
import AppProjects from './components/pages/AppProjects.vue';


export default{
  components:{
    AppHeader,
    AppProjects,
  },
}

</script>

<template>

  <header>
    <AppHeader/>
  </header>


  <main>
    <router-view/>
  </main>

</template>

<style lang="scss" scoped></style>
