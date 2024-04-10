<script>
export default {
    name: 'ContactUsSuccess',
    
}
</script>

<template>
    <div class="container">
        <div class="py-3 text-center">
            <h1>Thanks!</h1>
            <h4 class="alert alert-success" role="success">Your email has been sent successfully!</h4>
        </div>
        <div class="py-3 text-center">
            <router-link :to="{name: 'home'}" class="btn btn-primary">Return to the main page</router-link>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>