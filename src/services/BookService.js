import axios from 'axios'

const api = axios.create({ baseURL: "http://localhost:8080" })

export async function getBooks() {
    const res = await api.get('/book')
    return res.data;
}


async function getReadingList() {
    const loggedUser = localStorage.getItem('loggedUser');
    const response = await api.get(`/api/read/${loggedUser}`, { withCredentials: true })

    return response.data
}


async function getStarredBooks() {
    const loggedUser = localStorage.getItem('loggedUser');
    const response = await api.get(`/api/users/${loggedUser}/favorite-books`, { withCredentials: true })

    return response.data
}


async function getFinishedBooks() {
    const loggedUser = localStorage.getItem('loggedUser');
    const response = await api.get(`/api/users/${loggedUser}/finished-books`, { withCredentials: true })

    return response.data
}