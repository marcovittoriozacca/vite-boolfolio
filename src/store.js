
import { reactive } from 'vue'

export const store = reactive({
    projects: [],
    currentPage: '',
    lastPage: '',

    laravelServer: 'http://127.0.0.1:8000',
})