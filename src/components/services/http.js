import axios from "axios"

const http = axios.create({
    baseURL: "http://192.168.0.12:1349/api",
    headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json"
    }
});


export default http
