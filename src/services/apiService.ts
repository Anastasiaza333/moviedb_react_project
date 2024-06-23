import axios from "axios";
import {baseURL} from '../consts/urls';

const apiService = axios.create({baseURL});
apiService.interceptors.request.use(request=> {
    request.headers["Authorization"] = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxODZkYzFjMzVmOTcwZDc4MjY1NGM4YjEzMGM5M2JkNCIsIm5iZiI6MTcxOTE2NzcxOC43Nzk1NjUsInN1YiI6IjY1ZGE1MWNjZWRlYjQzMDE2N2UzZTEzYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.POZ2aUoM88LWjMHUgNl-rOVSzYmKBmi-WV8BXGD_9qM';
    return request
})
export { apiService}