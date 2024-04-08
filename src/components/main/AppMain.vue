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
        <div class="container">
            <h1 class="text-center py-3">Progetti</h1>
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
                            @click="$emit('changePage', store.currentPage - 1)"
                            :class="{'disabled': store.currentPage <= 1}"
                            >
                            Previous
                        </button>
                        </li>
                        <!-- pages -->
                        <li class="page-item" v-for="(page, index) in store.lastPage">
                            <button class="page-link"
                            @click="$emit('changePage', index + 1)"
                            >{{ index + 1 }}</button>
                        </li>
                        <!-- next btn -->
                        <li class="page-item">
                            <button class="page-link" 
                                @click="$emit('changePage', store.currentPage + 1)"
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