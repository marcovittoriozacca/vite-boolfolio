<script>
export default {
    name: 'ProjectCard',
    props: ['project'],
    
    methods: {
        setImg(path){
            switch (true) {
                case path == null:
                    return 'https://media.istockphoto.com/id/1147544807/it/vettoriale/la-commissione-per-la-immagine-di-anteprima-grafica-vettoriale.jpg?s=612x612&w=0&k=20&c=gsxHNYV71DzPuhyg-btvo-QhhTwWY0z4SGCSe44rvg4=';
                    
                case path.includes('proj_images/'):
                    return `http://127.0.0.1:8000/storage/${path}`

                default:
                    return path
            }
        }
    },

}
</script>

<template>
    <div class="card">
        <figure>
            <img class="card-img-top" :src=setImg(project.proj_thumb) :alt="project.name" />
        </figure>
        <div class="card-body">
            <h4 class="card-title">{{ project.name }}</h4>
            <p class="card-text text-truncate ">{{ project.description }}</p>

            <!-- project type -->
            <p v-if="project.type" class="card-text">{{ project.type.name }}</p>

            <!-- used technologies -->
            <div v-if="project.technology.length > 0">
                <h5>Tecnologie utilizzate:</h5>
                <ul class="list-unstyled d-flex flex-wrap column-gap-2" >
                    <li v-for="(technology, index) in project.technology" :key="technology.id">
                        {{ technology.name }}
                    </li>
                </ul>
            </div>
            
            
        </div>
    </div>
</template>

<style lang="scss" scoped>
    
</style>