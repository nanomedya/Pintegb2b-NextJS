import axios from "axios";
import { authURL, csrfURL, loginURL, userURL } from "../api";
import { toast } from "react-toastify";

const initialState = {
    token: localStorage.getItem("token"),
    csrf: localStorage.getItem("csrf")
}

export async function csrfF() {
    if (!initialState.csrf) {
        try {
            const res = await axios.get(csrfURL);
            if (typeof window !== "undefined") {
                localStorage.setItem("csrf", res.data.csrf_token);
                initialState.csrf = res.data.csrf_token;
            }
        } catch (error) {
            toast.error(error.response?.data?.message || "CSRF token alımı başarısız.");
        }
    }
}

export async function login() {
    await csrfF();
    return axios.get(`${authURL}?email=b2b@nanomedya.com&password=b2bnano5`, {
        headers: { 'X-CSRF-TOKEN': initialState.csrf }
    }).then(res => res.data).catch(error => toast.error(error.response?.data?.message || "Giriş başarısız."));
}

export async function dealerLogin(email, password) {
    await csrfF();
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);

    return axios.post(loginURL, formData, {
        headers: { 'X-CSRF-TOKEN': initialState.csrf, "Content-Type": 'multipart/form-data' }
    }).then(res => res.data)
        .catch(error => toast.error(error.response?.data?.message || "Bayi girişi başarısız."));
}

export function getUser() {
    const token = localStorage.getItem("auth") === null ? null : JSON.parse(localStorage.getItem("auth")).access_token;
    return axios.get(userURL, { headers: { "Authorization": `Bearer ${token}` } })
        .then(res => res.data)
        .catch(error => toast.error(error.response?.data?.message || "Kullanıcı bilgisi alınamadı."));
}