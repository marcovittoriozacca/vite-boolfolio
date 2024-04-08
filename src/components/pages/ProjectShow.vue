<script>
import axios from 'axios';

export default {
    name: 'ProjectShow',

    data() {
        return {
            project: [],
        }
    },

    methods: {
        getSingleProject(){
            axios.get(`http://127.0.0.1:8000/api/projects/${this.$route.params.slug}`)
            .then((r) => {
                    this.project = r.data.project;
            })
        },

        setImg(path){
            switch (true) {
                case path == null:
                    return 'https://media.istockphoto.com/id/1147544807/it/vettoriale/la-commissione-per-la-immagine-di-anteprima-grafica-vettoriale.jpg?s=612x612&w=0&k=20&c=gsxHNYV71DzPuhyg-btvo-QhhTwWY0z4SGCSe44rvg4=';
                    
                case path.includes('proj_images/'):
                    return `http://127.0.0.1:8000/storage/${path}`
    
                default:
                    return path
            }
        },
    },


    mounted() {
        this.getSingleProject();
    },
    
}
</script>

<template>

<div class="container">
    <h1>{{ project.name }}</h1>
    <h4>{{ project.description }}</h4>
    <img :src=setImg(project.proj_thumb) :alt="project.name">
    <br>
    <a :href="project.link" target="_blank">{{ project.link }}</a>
    <br>

    <div v-if="project.type" class="mt-3">
        <p class="mb-0">Tipologia progetto:</p>
        <span >{{ project.type.name }}</span>
    </div>

    <div v-if="project.technology && project.technology.length > 0" class="py-3">
        <p class="mb-0">Tecnologie utilizzate:</p>
        <span v-for="(technology, index) in project.technology" :key="technology.id">
            {{ technology.name }} <br>
        </span>
    </div>

</div>

</template>

<style lang="scss" scoped>

img{
    max-width: 300px;
}

</style>