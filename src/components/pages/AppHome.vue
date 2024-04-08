<script>
export default {
    name: 'AppHome'
}
</script>

<template>
        <div class="container">
            <h1 class="text-center py-4">Boolfolio</h1>

            <div class="d-flex justify-content-center">
                <div class="w-75 border p-5 rounded bg-body-tertiary">
                    <h2 class="mb-3">Per accedere alla pagina dei progetti clicca qui:</h2>
                    <router-link :to="{name: 'projects'}" class="btn btn-primary ">Lista Progetti</router-link>
                </div>
            </div>

        </div>
    
</template>

<style lang="scss" scoped>
    
</style>