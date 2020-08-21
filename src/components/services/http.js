import axios from "axios"

const http = axios.create({
    baseURL: "http://localhost:1349/api",
    headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json"
    }
});


export default http
