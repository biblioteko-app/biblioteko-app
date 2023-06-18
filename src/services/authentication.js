import axios from "axios";
import Cookies from 'js-cookie'

const baseUrl = 'http://localhost:8080'

let api = axios.create({ baseURL: baseUrl });

export async function login(email, password) {
  let signin = await api.post(
    '/api/auth/signin',
    { email: email, password: password },
    {
      withCredentials: true,
    }
  );

  localStorage.setItem('loggedUser', signin.data.id)

  let jwt = signin.data.jwtCookie.split(';').map(s => { return s.trim().split('=')[1] })[0]

  localStorage.setItem('userJwt', jwt)

  console.log(parseAuthToken(jwt));
}


export async function signUp(name, email, password, role, onSignUp) {
  const response = await api.post(
    '/api/users/signup',
    { name: name, email: email, password: password, role: role },
    { withCredentials: true }
  )

  if (response.status === 201) {
    onSignUp(false);
    return 'Usuário cadastrado com sucesso'
  } else {
    throw new Error('Usuário não cadastrado');
  }
}


export function logOut() {
  document.cookie = ''
  localStorage.removeItem('loggedUser')
  localStorage.removeItem('userJwt')
}


export function isTokenValid(token) {
  const currentTime = new Date().getTime() / 1000;
  const { exp } = parseAuthToken(token);
  return currentTime <= exp
}


function parseAuthToken(token) {
  const [, payload, ] = token.split(".");
  const parsedPayload = JSON.parse(window.atob(payload));
  return parsedPayload;
}


const authentication = { login, signUp, logOut, isTokenValid }
export default authentication;