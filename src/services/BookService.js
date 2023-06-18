import axios from 'axios'

const api = axios.create({ baseURL: "http://localhost:8080" })

export async function getBooks(userId) {
    const res = await api.get(`/api/books/${userId}`, { withCredentials: true })
    
    return res.data;
}


export async function getReadingList(userId) {
    const response = await api.get(`/api/read/${userId}`, { withCredentials: true })

    return response.data
}


export async function getStarredBooks(userId) {
    const response = await api.get(`/api/users/${userId}/favorite-books`, { withCredentials: true })

    return response.data
}


export async function getFinishedBooks(userId) {
    const response = await api.get(`/api/users/${userId}/finished-books`, { withCredentials: true })

    return response.data
}