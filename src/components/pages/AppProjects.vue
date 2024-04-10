<script>
import axios from 'axios';
import { store } from '../../store';

import ProjectCard from '../main/ProjectCard.vue';

export default {
    name: 'AppProjects',

    components:{
        ProjectCard,
    },

    data() {
        return {
            store,
        }
    },

    methods:{
    getProjects(pagination){
      axios.get(`${store.laravelServer}/api/projects`, { params:{ page: pagination} }).then((res) => {
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
        <div class="container">
            <h1 class="text-center py-3">Projects</h1>
            <div class="row row-gap-4">
                <div class="col-3" v-for="(project, index) in store.projects" :key="project.id">
                    <!-- Single project card -->
                    <ProjectCard :project = "project"/>
                </div>
            </div>
            <div class="d-flex justify-content-center mt-5">
                <nav>
                    <ul class="pagination">
                        <!-- prev button -->
                        <li class="page-item">
                            <button class="page-link" 
                            @click="getProjects(store.currentPage - 1)"
                            :class="{'disabled': store.currentPage <= 1}"
                            >
                            Previous
                        </button>
                        </li>
                        <!-- pages -->
                        <li class="page-item" v-for="(page, index) in store.lastPage">
                            <button class="page-link"
                            @click="getProjects(page)"
                            >{{ page }}</button>
                        </li>
                        <!-- next btn -->
                        <li class="page-item">
                            <button class="page-link" 
                                @click="getProjects(store.currentPage + 1)"
                                :class="{'disabled': store.currentPage >= store.lastPage}">
                                Next
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>

        </div>
</template>

<style lang="scss" scoped>
    
</style>