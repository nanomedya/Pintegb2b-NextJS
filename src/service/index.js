import axios from "axios";
import { toast } from "react-toastify";
import api from "@/api";
import store from "@/redux/store";

export function login(email, password) {
    return axios.get(api.csrf)
        .then(res => {
            return axios.get(`${api.auth}?email=${email}&password=${password}`, {
                headers: {
                    'X-CSRF-TOKEN': res.data.csrf_token
                }
            }).then(res => res.data)
                .catch(er => toast.error(er));
        }).catch(er => toast.error(er));
}

axios.interceptors.request.use((config) => {
    const token = store.getState().login.token;
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});
