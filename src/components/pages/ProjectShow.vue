<script>
import { store } from '../../store';
import axios from 'axios';

export default {
    name: 'ProjectShow',

    data() {
        return {
            store,
            project: [],
        }
    },

    methods: {
        getSingleProject(){
            axios.get(`${store.laravelServer}/api/projects/${this.$route.params.slug}`)
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

        setTechnologyColor(technology){
            technology = technology.toLowerCase();
            switch (technology) {
                case 'html':
                    return 'orange';
                case 'css':
                    return '#254bdd';
                case 'javascript':
                    return '#efd81d';
                case 'jquery':
                    return '#186eb1';
                case 'node.js':
                    return '#77b75c';
                case 'express.js':
                    return '#f1c617';
                case 'react.js':
                    return '#0ad9fc';
                case 'vue3':
                    return '#42b883';
                case 'laravel':
                    return '#ff2d20';
                default:
                    return 'white'
            }
        },

        setTypeColor(type){
            type = type.toLowerCase();
            switch (type) {
                case 'applicazione mobile':
                    return 'orange';
                case 'applicazione desktop':
                    return '#8A2BE2';
                case 'sistemi embedded':
                    return '#FFD700 ';
                case 'intelligenza artificiale e machine learning':
                    return '#00FF00';
                case 'sicurezza informatica':
                    return '#FF00FF';
                case 'front-end':
                    return '#FF4500';
                case 'back-end':
                    return '#4169E1';
                case 'full stack':
                    return '#FF1493 ';
                default:
                    return 'white'
            }
        }
    },


    mounted() {
        this.getSingleProject();
    },
    
}
</script>

<template>

<div class="container">
    <div class="py-5">
        <h1 class="bg-secondary rounded py-3 text-center">{{ project.name }}</h1>
        <div class="bg-body-tertiary rounded p-4">
            <p class="text-white fs-4 text-center">{{ project.description }}</p>
            <div class="d-flex justify-content-center">
                <figure>
                    <img :src=setImg(project.proj_thumb) :alt="project.name">
                </figure>
            </div>
            <div class="row justify-content-center text-center">
                <div v-if="project.link != null" class="col-4 align-self-center">
                    <h4>Direct link to the project</h4>
                    <a :href="project.link" target="_blank">{{ project.link }}</a>
                </div>
                <div class="col-4">
                    <div v-if="project.type" class="mt-3">
                        <h4>Project Type</h4>
                        <span :style="{color: setTypeColor(project.type.name)}">{{ project.type.name}}</span>
                    </div>
                </div>
                <div class="col-4">
                    <div v-if="project.technology && project.technology.length > 0" class="py-3">
                        <h4>Technologies used in this project</h4>
                        <span v-for="(technology, index) in project.technology" :key="technology.id" :style="{color: setTechnologyColor(technology.name)}">
                        {{ technology.name }} <br>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<style lang="scss" scoped>

img{
    max-width: 300px;
}
a{
    text-decoration: none;
}

</style>