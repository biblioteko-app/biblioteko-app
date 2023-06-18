import axios from 'axios'

const api = axios.create({ baseURL: "http://localhost:8080" })

export async function getBooks(userId) {
    const res = await api.get(`/api/book/books/${userId}`, { withCredentials: true })

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


export async function addBookToReadingList(userId, bookId) {
    const response = await api.post(`/api/read/${userId}/${bookId}`, { readPages: 0 },  {withCredentials: true});
    if (response.status === 201) {
        return true
    } else {
        return false
    }
}


export async function starBook(userId, bookId) {
    const response = await api.put(`/api/book/${userId}/${bookId}/favorite`, {}, {withCredentials: true})

    if (response.status === 200) {
        return true
    }
    return false
}


export async function unstarBook(userId, bookId) {
    const response = await api.put(`/api/book/${userId}/${bookId}/unfavorite`, {}, {withCredentials: true})

    if (response.status === 200) {
        return true
    }
    return false
}


export async function getAllMyBooks(userId) {
    const response = await api.get(`/api/book/my-books/${userId}`, {withCredentials: true })

    return response.status === 200 ? response.data : []
}


export async function editBook(userId, book, bookId) {
    const response = await api.put(`/api/book/${userId}/${bookId}`, book, {withCredentials: true })

    if (response.status === 201) {
        return true
    } 
    return false
}