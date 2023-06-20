import axios from 'axios'

const api = axios.create({ baseURL: "http://localhost:8080" })

export async function getBooks(userId, setBooks) {
    const res = await api.get(`/api/book/books/${userId}`, { withCredentials: true })
    setBooks(res.data)
    return res.data;
}


export async function getReadingList(userId, setReadingList) {
    const response = await api.get(`/api/read/${userId}`, { withCredentials: true })
    setReadingList(response.data)
    return response.data
}


export async function getStarredBooks(userId, setStarredBooks) {
    const response = await api.get(`/api/users/${userId}/favorite-books`, { withCredentials: true })
    setStarredBooks(response.data)

    return response.data
}


export async function getFinishedBooks(userId, setFinishedBooks) {
    const response = await api.get(`/api/users/${userId}/finished-books`, { withCredentials: true })
    setFinishedBooks(response.data)
    return response.data
}


export async function addBookToReadingList(userId, bookId) {
    const response = await api.post(`/api/read/${userId}/${bookId}`, { readPages: 1 },  {withCredentials: true});
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


export async function getAllMyBooks(userId, setMyBooks) {
    const response = await api.get(`/api/book/my-books/${userId}`, {withCredentials: true })

    if (response.status === 200) { 

        setMyBooks(response.data)
        return true
    } else {
        setMyBooks([])
        return false
    }    
}


export async function editBook(userId, book, bookId) {
    const response = await api.put(`/api/book/${userId}/${bookId}`, book, {withCredentials: true })

    if (response.status === 201) {
        return true
    } 
    return false
}


export async function isStarred(userId, bookId) {
    let s = []
    getStarredBooks(userId, (v) => {s = v});

    if (s.filter((b) => b.id === bookId).length > 0) { return true }
    return false
}


export async function createBook(userId, book) {
    const response = await api.post(`/api/book/${userId}`, {book}, { withCredentials: true })

    return response.status === 201
}

// Função para deletar um livro
export async function deleteBook(userId, bookId) {
    const response = await api.delete(`/api/book/${userId}/${bookId}`, { withCredentials: true });

    return response.status === 200;
}

// Função para buscar um livro pelo id
export async function getBookById(userId, bookId, setBook) {
    const response = await api.get(`/api/book/${userId}/${bookId}`, { withCredentials: true });

    setBook(response.data)
    return response.data;
}

// Função para avaliar um livro
export async function rateBook(userId, bookId, rating) {
    const response = await api.put(`/api/book/${userId}/${bookId}/rate`, { rating }, { withCredentials: true });

    return response.status === 200;
}

// Função para obter avaliações de um livro
export async function getBookRatings(userId, bookId, setRatings) {
    const response = await api.get(`/api/book/${userId}/${bookId}/ratings`, { withCredentials: true });

    setRatings(response.data)

    return response.data;
}


export async function getAllBooks(userId, setBooks) {
    const response = await api.get(`/api/book/books/${userId}`, { withCredentials: true });

    setBooks(response.data)

    return response.status === 200
}