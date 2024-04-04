<script>
import { store } from '../../store';

import ProjectCard from './ProjectCard.vue';

export default {
    name: 'AppMain',

    components:{
        ProjectCard,
    },

    data() {
        return {
            store,
        }
    },

    
}
</script>

<template>
    <main class="pb-4">
        <div class="container">
            <h1 class="text-center py-3">Progetti</h1>
            <div class="row row-gap-4">
                <div class="col-3" v-for="(project, index) in store.projects" :key="project.id">
                    <!-- Single project card -->
                    <ProjectCard :project = "project"/>
                </div>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
    
</style>