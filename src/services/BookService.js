import axios from "axios";

export async function getBooks() {
    const res = await axios.create({ baseURL: 'http://localhost:7000' }).get('/book')
    return res;
}