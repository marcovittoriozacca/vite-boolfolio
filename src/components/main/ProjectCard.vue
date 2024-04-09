<script>
import { store } from '../../store';
export default {
    name: 'ProjectCard',
    props: ['project'],

    data() {
        return {
            store,
        }
    },
    
    methods: {
        setImg(path){
            switch (true) {
                case path == null:
                    return 'https://media.istockphoto.com/id/1147544807/it/vettoriale/la-commissione-per-la-immagine-di-anteprima-grafica-vettoriale.jpg?s=612x612&w=0&k=20&c=gsxHNYV71DzPuhyg-btvo-QhhTwWY0z4SGCSe44rvg4=';
                    
                case path.includes('proj_images/'):
                    return `${store.laravelServer}/storage/${path}`

                default:
                    return path
            }
        }
    },

}
</script>

<template>
    <div class="card">
        <router-link :to="{name: 'single-project', params: { slug: project.slug }}">
            <figure class="overflow-hidden">
                <img class="card-img-top" :src=setImg(project.proj_thumb) :alt="project.name" />
            </figure>
        </router-link>
        <div class="card-body">
            <router-link :to="{name: 'single-project', params: { slug: project.slug }}" class="text-decoration-none">{{ project.name }}</router-link>
            <p class="card-text text-truncate ">{{ project.description }}</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    figure{
        img{
            transition: .2s all ease-out;
            &:hover{
                transform: scale(120%);
            }
        }
    }
</style>