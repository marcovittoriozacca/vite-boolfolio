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
        }
    },

    methods: {
        async sendEmail(){
            const data = {
                firstname: this.firstname,
                surname: this.surname,
                email: this.email,
                content: this.content,
            }

            await axios.post(`${store.laravelServer}/api/contacts`, data).then((res) => {
                console.log(res);

                //variables reset
                this.firstname = '';
                this.surname = '';
                this.email = '';
                this.content = '';
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
                        name="firstname"
                        id="firstname"
                        placeholder="Insert your name here..."
                        v-model="firstname"
                    />
                </div>
            </div>
            <div class="col-6">
                <div class="mb-3">
                    <label for="surname" class="form-label">Surname</label>
                    <input
                        type="text"
                        class="form-control"
                        name="surname"
                        id="surname"
                        placeholder="Insert your surname here..."
                        v-model="surname"
                    />
                </div>
            </div>
            <div class="col-12">
                <div class="mb-3">
                    <label for="email" class="form-label">Email</label>
                    <input
                        type="email"
                        class="form-control"
                        name="email"
                        id="email"
                        placeholder="example@mail.com"
                        v-model="email"
                    />
                </div>
            </div>
            <div class="col-12">
                <div class="mb-3">
                    <label for="content" class="form-label">Email Content</label>
                    <textarea class="form-control" name="content" id="content" rows="3" v-model="content"></textarea>
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