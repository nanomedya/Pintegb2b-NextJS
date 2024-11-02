import api from "@/api";
import { generateCsrfToken } from "@/tools/utils";
import axios from "axios";
import { toast } from "react-toastify";

const initialState = {
    csrfToken: typeof window !== "undefined" ? window.localStorage.getItem('csrf_token') : null,
    user: null
};

if (!initialState.csrfToken) {
    if (typeof window !== "undefined") {
        var csrfToken = generateCsrfToken();
        window.localStorage.setItem("csrf_token", csrfToken);
    }
}

export function login(email, password) {
    return axios.post(api.auth, { email, password }, {
        headers: {
            "X-CSRF-Token": initialState.csrfToken
        },
        withCredentials: true
    }).then(res => res.data).catch(er => toast.error(er));
}
