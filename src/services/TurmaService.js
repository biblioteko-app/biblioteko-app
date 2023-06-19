import axios from 'axios'

const api = axios.create({ baseURL: "http://localhost:8080" })


export async function getClasses(userId, setClasses) {
    const response = await api.get(`/api/users/${userId}/classes`, { withCredentials: true})

    setClasses(response.data)
    
    return response.status === 200
}