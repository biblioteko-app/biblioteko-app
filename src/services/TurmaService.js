import axios from 'axios'

const api = axios.create({ baseURL: "http://localhost:8080" })


export async function getClasses(userId, setClasses) {
    const response = await api.get(`/api/users/${userId}/classes`, { withCredentials: true})

    setClasses(response.data)
    
    return response.status === 200
}


export async function getClassBooks(classId, setClassBooks) {
    const response = await api.get(`/api/studentclass/${classId}/books`, { withCredentials: true });

    setClassBooks(response.data)

    return response.status === 200
}

// Tentando adicionar 
// Função para criar turma
export async function createClass(teacherId, className) {
    const response = await api.post(`/api/users/${teacherId}/classes`, {
        name: className,
    }, { withCredentials: true });

    return response.status === 201;
}

// Função para adicionar alunos a turma
export async function addStudentsToClass(classId, studentIds) {
    const response = await api.put(`/api/studentclass/${classId}`, {
        studentIds: studentIds,
    }, { withCredentials: true });
    
    return response.status === 200;
}

// Função para adicionar livros a turma
export async function addBooksToClass(classId, bookIds) {
    const response = await api.put(`/api/studentclass/${classId}/${bookIds}`, {}, { withCredentials: true });

    return response.status === 200;
}

// Função para remover alunos da turma
export async function removeStudentsFromClass(classId, studentIds) {
    const response = await api.delete(`/api/studentclass/${classId}/students`, {
        data: { studentIds: studentIds },
    }, { withCredentials: true });

    return response.status === 200;
}


export async function getStudentsOfClass(classId, setStudents) {
    const response = await api.get(`/api/studentclass/${classId}/students`, { withCredentials: true });

    setStudents(response.data)

    return response.status === 200;
}