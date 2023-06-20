import React, { useState } from 'react'
import {
    Box,
    Button,
    Stack,
    TextField
} from '@mui/material'
import Title from '../Title'
import './Details.css'
import Paragraph from '../Paragraph'
import authentication from '../../services/authentication'
import { useNavigate } from 'react-router-dom'

const Details = ({ onLogin }) => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [role, setRole] = useState('ALUNO');
    const [signUp, setSignUp] = useState(false);

    const handleUsernameChange = (event) => {
        setEmail(event.target.value);
      };
    
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const erro = document.getElementById('erro');

        authentication.login(email, password, onLogin)
        navigate('/')

        // // Lógica de autenticação
        // if (email === 'admin' && password === 'admin123') {
        //     onLogin();
        //     erro.style.display = 'none';
        //     //onLogin(); // Chama a função de autenticação fornecida pelo componente pai
        // } else {
        //     erro.style.display = 'flex';
        // }
    };

    const handleSignUp = (event) => {
        event.preventDefault();
        const erro = document.getElementById('erro');
        authentication.signUp(name, email, password, role, setSignUp)
    }

    const login = () => {
        return (
            <>
            <Title className="title-page"
                text={
                    'Login'
                }
            />

            <Box
                id='form'
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{
                    mt: 1,
                    py: 2
                }}>
                <div id="erro">
                    <p>Login e/ou Senha inválidos</p>
                </div>

                <div className="icon-field-box">
                    <svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 -960 960 960" width="40"><path d="M222-255q63-40 124.5-60.5T480-336q72 0 134 20.5T739-255q44-54 62.5-109T820-480q0-145-97.5-242.5T480-820q-145 0-242.5 97.5T140-480q0 61 19 116t63 109Zm257.814-195Q422-450 382.5-489.686q-39.5-39.686-39.5-97.5t39.686-97.314q39.686-39.5 97.5-39.5t97.314 39.686q39.5 39.686 39.5 97.5T577.314-489.5q-39.686 39.5-97.5 39.5Zm-.219 370q-83.146 0-156.275-31.5t-127.225-86Q142-252 111-324.841 80-397.681 80-480.5q0-82.819 31.5-155.659Q143-709 197.5-763t127.341-85.5Q397.681-880 480.5-880q82.819 0 155.659 31.5Q709-817 763-763t85.5 127Q880-563 880-480.266q0 82.734-31.5 155.5T763-197.5q-54 54.5-127.129 86T479.595-80Z" /></svg>
                    <input
                        type="email"
                        required
                        fullWidth
                        id="email"
                        name="email"
                        placeholder="Email"
                        autoComplete="email"
                        autoFocus
                        style={{
                            border: 'none',
                            marginBottom: '10px',
                            padding: '10px',
                        }}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="icon-field-box">
                <svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 -960 960 960" width="40"><path d="M280-351q54 0 91.5-37.5T409-480q0-54-37.5-91.5T280-609q-54 0-91.5 37.5T151-480q0 54 37.5 91.5T280-351Zm0 111q-100 0-170-70T40-480q0-100 70-170t170-70q85 0 142.5 46.5T503-555h344l73 73-127 146-103-84-84 84-71-71h-32q-19 75-80.5 121T280-240Z"/></svg>
                    <input
                        type="password"
                        required
                        fullWidth
                        name="password"
                        placeholder="Senha"
                        autoComplete="current-password"
                        style={{
                            border: 'none',
                            marginBottom: '10px',
                            padding: '10px',
                        }}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="box-botoes">
                    <Button
                        variant="contained"
                        fullWidth
                        type="button"
                        size="medium"
                        sx={{
                            fontSize: '0.9rem',
                            textTransform: 'capitalize',
                            py: 2,
                            mt: 3,
                            mb: 2,
                            borderRadius: 0,
                            backgroundColor: '#63C7B2',
                            "&:hover": {
                                backgroundColor: '#1e2a5a',
                            }
                        }}
                        onClick={() => {setSignUp(!signUp)} }
                    >
                        Cadastrar
                    </Button>
                    <Button
                        variant="contained"
                        fullWidth
                        type="submit"
                        size="medium"
                        sx={{
                            fontSize: '0.9rem',
                            textTransform: 'capitalize',
                            py: 2,
                            mt: 3,
                            mb: 2,
                            borderRadius: 0,
                            backgroundColor: '#63C7B2',
                            "&:hover": {
                                backgroundColor: '#1e2a5a',
                            }
                        }}
                    >
                        Login
                    </Button>
                </div>
            </Box>
            </>
        )
    }

    const signup = () => {
        return (
            <>
            <Title className="title-page"
                text={
                    'Cadastrar'
                }
            />

            <Box
                id='form'
                component="form"
                noValidate
                onSubmit={handleSignUp}
                sx={{
                    mt: 1,
                    py: 2
                }}>
                <div id="erro">
                    <p>Login e/ou Senha inválidos</p>
                </div>

                <div className="icon-field-box">
                    <svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 -960 960 960" width="40"><path d="M222-255q63-40 124.5-60.5T480-336q72 0 134 20.5T739-255q44-54 62.5-109T820-480q0-145-97.5-242.5T480-820q-145 0-242.5 97.5T140-480q0 61 19 116t63 109Zm257.814-195Q422-450 382.5-489.686q-39.5-39.686-39.5-97.5t39.686-97.314q39.686-39.5 97.5-39.5t97.314 39.686q39.5 39.686 39.5 97.5T577.314-489.5q-39.686 39.5-97.5 39.5Zm-.219 370q-83.146 0-156.275-31.5t-127.225-86Q142-252 111-324.841 80-397.681 80-480.5q0-82.819 31.5-155.659Q143-709 197.5-763t127.341-85.5Q397.681-880 480.5-880q82.819 0 155.659 31.5Q709-817 763-763t85.5 127Q880-563 880-480.266q0 82.734-31.5 155.5T763-197.5q-54 54.5-127.129 86T479.595-80Z" /></svg>
                    <input
                        type="name"
                        required
                        fullWidth
                        id="name"
                        name="name"
                        placeholder="Nome"
                        autoComplete="name"
                        autoFocus
                        style={{
                            border: 'none',
                            marginBottom: '10px',
                            padding: '10px',
                        }}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className="icon-field-box">
                    <svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 -960 960 960" width="40"><path d="M222-255q63-40 124.5-60.5T480-336q72 0 134 20.5T739-255q44-54 62.5-109T820-480q0-145-97.5-242.5T480-820q-145 0-242.5 97.5T140-480q0 61 19 116t63 109Zm257.814-195Q422-450 382.5-489.686q-39.5-39.686-39.5-97.5t39.686-97.314q39.686-39.5 97.5-39.5t97.314 39.686q39.5 39.686 39.5 97.5T577.314-489.5q-39.686 39.5-97.5 39.5Zm-.219 370q-83.146 0-156.275-31.5t-127.225-86Q142-252 111-324.841 80-397.681 80-480.5q0-82.819 31.5-155.659Q143-709 197.5-763t127.341-85.5Q397.681-880 480.5-880q82.819 0 155.659 31.5Q709-817 763-763t85.5 127Q880-563 880-480.266q0 82.734-31.5 155.5T763-197.5q-54 54.5-127.129 86T479.595-80Z" /></svg>
                    <input
                        type="email"
                        required
                        fullWidth
                        id="email"
                        name="email"
                        placeholder="Email"
                        autoComplete="email"
                        autoFocus
                        style={{
                            border: 'none',
                            marginBottom: '10px',
                            padding: '10px',
                        }}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="icon-field-box">
                <svg xmlns="http://www
/* .box {
    width: 50%;
} */.w3.org/2000/svg" height="40" viewBox="0 -960 960 960" width="40"><path d="M280-351q54 0 91.5-37.5T409-480q0-54-37.5-91.5T280-609q-54 0-91.5 37.5T151-480q0 54 37.5 91.5T280-351Zm0 111q-100 0-170-70T40-480q0-100 70-170t170-70q85 0 142.5 46.5T503-555h344l73 73-127 146-103-84-84 84-71-71h-32q-19 75-80.5 121T280-240Z"/></svg>
                    <input
                        type="password"
                        required
                        fullWidth
                        name="password"
                        placeholder="Senha"
                        autoComplete="current-password"
                        style={{
                            border: 'none',
                            marginBottom: '10px',
                            padding: '10px',
                        }}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className='icon-field-box'>
                    <select name="" id="" className='role' onChange={(e) => {setRole(e.target.value)}}>
                        <option value="ALUNO">Aluno</option>
                        <option value="PROFESSOR">Professor</option>
                    </select>
                </div>
                <div className="box-botoes">
                    <Button
                        variant="contained"
                        fullWidth
                        type="button"
                        size="medium"
                        sx={{
                            fontSize: '0.9rem',
                            textTransform: 'capitalize',
                            py: 2,
                            mt: 3,
                            mb: 2,
                            borderRadius: 0,
                            backgroundColor: '#63C7B2',
                            "&:hover": {
                                backgroundColor: '#1e2a5a',
                            }
                        }}
                        onClick={() => { setSignUp(!signUp)}}
                    >
                        Voltar
                    </Button>
                    <Button
                        variant="contained"
                        fullWidth
                        type="submit"
                        size="medium"
                        sx={{
                            fontSize: '0.9rem',
                            textTransform: 'capitalize',
                            py: 2,
                            mt: 3,
                            mb: 2,
                            borderRadius: 0,
                            backgroundColor: '#63C7B2',
                            "&:hover": {
                                backgroundColor: '#1e2a5a',
                            }
                        }}
                    >
                        Cadastrar
                    </Button>
                </div>
            </Box>
            </>
        )
    }


    return (
        <Stack
            component='section'
            direction="column"
            justifyContent='center'
            alignItems='center'
            backgroundColor='#F7F7F7'
            sx={{
                py: 10,
                px: 2,
            }}
        >
            { signUp ? signup() : login() }
            
        </Stack>
    )
}

export default Details;