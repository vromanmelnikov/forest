import axios from "axios";
import { API_URL } from "./api.confige";

const GALLERY_API = `${API_URL}/gallery/`
const CATEGORY_API = `${API_URL}/category`
const GOODS_API = `${API_URL}/item/`
const CLIENTS_API = `${API_URL}/gallery/client`

export default class ApiService {
    static getGallery() {
        return axios.get(`${GALLERY_API}`)
    }
    static getCatalog() {
        return axios.get(`${CATEGORY_API}`)
    }
    static getGoods() {
        return axios.get(`${GOODS_API}`)
    }
    static getClients() {
        return axios.get(`${CLIENTS_API}`)
    }
    static deleteCategory(id) {
        let data = {
            id
        }
        return axios.delete(`${CATEGORY_API}`, data, {
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJhZG1pbkB2dmFkZXYucnUiLCJyb2xlIjoiQURNSU4iLCJpYXQiOjE2NjMwOTE4NzIsImV4cCI6MTY2MzE3ODI3Mn0.RgIzh2obD4Ubx9Qa9cdOSeF31Ywh74VObq0SG8CQVHk'
            }
        })
    }
}