<script>
import { store } from '../../store';
import axios from 'axios';

export default {
    name: 'ContactForm',

    data() {
        return {
            firstname: '',
            surname: '',
            email: '',
            content: '',

            errors: {},
            success: false,

        }
    },

    methods: {
        async sendEmail(){
            this.success = false;
            const data = {
                firstname: this.firstname,
                surname: this.surname,
                email: this.email,
                content: this.content,
            }

            await axios.post(`${store.laravelServer}/api/contacts`, data).then((res) => {
                this.success = res.data.success;
                if(!this.success){
                    this.errors = res.data.errors;
                }else{
                    //variables reset
                    this.firstname = '';
                    this.surname = '';
                    this.email = '';
                    this.content = '';
                    this.errors = {};

                    this.$router.push('contact-us-success');
                }
            });

        }
    },
}


</script>

<template>

<div class="container">
    <h1 class="text-center py-5">Contact Us!</h1>
    <form action="" method="" @submit.prevent="sendEmail()">
        <div class="row">
            <div class="col-6">
                <div class="mb-3">
                    <label for="firstname" class="form-label">Name</label>
                    <input
                        type="text"
                        class="form-control"
                        :class="{'is-invalid' : errors.firstname}"
                        name="firstname"
                        id="firstname"
                        placeholder="Insert your name here..."
                        v-model="firstname"
                    />
                    <div v-if="errors?.firstname">
                        <p class="text-danger" v-for="(error, index) in errors.firstname" :key="`error_firstname${index}`">
                            {{ error }}
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-6">
                <div class="mb-3">
                    <label for="surname" class="form-label">Surname</label>
                    <input
                        type="text"
                        class="form-control"
                        :class="{'is-invalid' : errors.surname}"
                        name="surname"
                        id="surname"
                        placeholder="Insert your surname here..."
                        v-model="surname"
                    />
                    <div v-if="errors?.surname">
                        <p class="text-danger" v-for="(error, index) in errors.surname" :key="`error_surname${index}`">
                            {{ error }}
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-12">
                <div class="mb-3">
                    <label for="email" class="form-label">Email</label>
                    <input
                        type="text"
                        class="form-control"
                        :class="{'is-invalid' : errors.email}"
                        name="email"
                        id="email"
                        placeholder="example@mail.com"
                        v-model="email"
                    />
                    <div v-if="errors?.email">
                        <p class="text-danger" v-for="(error, index) in errors.email" :key="`error_email${index}`">
                            {{ error }}
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-12">
                <div class="mb-3">
                    <label for="content" class="form-label">Email Content</label>
                    <textarea class="form-control" :class="{'is-invalid' : errors.content}" name="content" id="content" rows="3" v-model="content"></textarea>
                </div>
                <div v-if="errors?.content">
                    <p class="text-danger" v-for="(error, index) in errors.content" :key="`error_content${index}`">
                        {{ error }}
                    </p>
                </div>
            </div>
            <div class="mb-3">
                <button type="submit" class="btn btn-primary">Send</button>
            </div>
        </div>
    </form>
</div>

</template>

<style lang="scss" scoped>
    
</style>