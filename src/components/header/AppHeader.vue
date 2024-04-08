<script>
    export default {
        name: 'AppHeader',
    }
</script>


<template>
    <nav class="navbar navbar-expand-sm">
        <div class="container">
            <div class="d-flex align-items-center">
                <router-link :to="{name: 'home'}" class="nav-link fs-4 text-white">Boolfolio</router-link>
                <img width="50" src="/boolean-logo.jpg" alt="">
            </div>
            <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="collapsibleNavId">
                <ul class="navbar-nav ms-auto mt-2 mt-lg-0">
                    <li class="nav-item">
                        <router-link :to="{name: 'home'}" class="nav-link text-white">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{name: 'projects'}" class="nav-link text-white">Progetti</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

</template>


<style lang="scss" scoped>

</style>
