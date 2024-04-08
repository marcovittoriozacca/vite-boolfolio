<script>
    export default {
        name: 'AppHeader',
    }
</script>


<template>
    <nav class="navbar navbar-expand-sm my-border-b">
        <div class="container">
            <div class="d-flex align-items-center">
                <router-link :to="{name: 'home'}" class="nav-link fs-4 text-white me-2">Boolfolio</router-link>
                <img width="50" src="/boolean-logo.jpg" alt="boolean-logo" class="rounded">
            </div>
            <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="collapsibleNavId">
                <ul class="navbar-nav ms-auto mt-2 mt-lg-0 column-gap-3">
                    <li class="nav-item">
                        <router-link :to="{name: 'home'}" class="btn router-link">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{name: 'projects'}" class="btn router-link">Progetti</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

</template>


<style lang="scss" scoped>

@use '../../assets/scss/partials/variables' as *;
.router-link{
    background-color: $b-gray;
}

.my-border-b{
    border-bottom: 1px solid $b-gray;
    -webkit-box-shadow: 0px 6px 19px 3px rgba(0,0,0,0.38);
    -moz-box-shadow: 0px 6px 19px 3px rgba(0,0,0,0.38);
    box-shadow: 0px 6px 19px 3px rgba(0,0,0,0.38);
}

</style>
