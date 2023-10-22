import axios from "axios";

const baseURL = `https://maps.googleapis.com/maps/api/`

const axiosSettings = axios.create({
    baseURL: baseURL,
    params: {
        key: import.meta.env.VITE_GOOGLE_API
    }
})

export default axiosSettings