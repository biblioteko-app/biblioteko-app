import React, { useState } from 'react'
import { TextField, Button, useMediaQuery } from '@mui/material'
import axios from 'axios'

const AddBookForm = () => {
  const [buttonHovered, setButtonHovered] = useState(false)
  const [name, setName] = useState('')
  const [codigo, setCodigo] = useState('')

  const handleButtonHover = event => {
    setButtonHovered(event.type === 'mouseenter')
  }

  const handleSubmit = async event => {
    event.preventDefault()

    try {
      const response = await axios.post('/api/books', {
        name,
        codigo
      })

      console.log(response.data)

      // Limpar os campos do formulário
      setName('')
      setCodigo('')

      // Exibir mensagem de sucesso ou redirecionar o usuário
    } catch (error) {
      console.error(error)
      // Lidar com erros, exibir mensagens de erro ou tomar outras ações adequadas
    }
  }

  const isMobile = useMediaQuery('(max-width: 600px)')

  return (
    <div style={styles.container}>
      <div style={isMobile ? styles.formContainerMobile : styles.formContainer}>
        <h2 style={styles.heading}>Adicionar turma</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={isMobile ? styles.formColumnMobile : styles.formColumn}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Nome"
              name="name"
              autoComplete="off"
              value={name}
              onChange={event => setName(event.target.value)}
              InputProps={{
                style: styles.input,
                classes: {
                  focused: buttonHovered ? 'inputFocused' : ''
                }
              }}
              InputLabelProps={{
                style: styles.label
              }}
            />

          </div>
          <div style={isMobile ? styles.formColumnMobile : styles.formColumn}>
          <TextField
              margin="normal"
              required
              fullWidth
              id="codigo"
              label="Código da turma"
              name="codigo"
              autoComplete="off"
              value={codigo}
              onChange={event => setCodigo(event.target.value)}
              InputProps={{
                style: styles.input,
                classes: {
                  focused: buttonHovered ? 'inputFocused' : ''
                }
              }}
              InputLabelProps={{
                style: styles.label
              }}
            />
          </div>
          <Button
            type="submit"
            variant="contained"
            size="medium"
            required
            fullWidth
            sx={{
              background: '#14192d ',
              color: '#fff',
              borderRadius: '4px',
              padding: '12px',
              transition: 'background 0.3s',
              marginTop: '20px',
              '&:hover': {
                backgroundColor: '#1e2a5a'
              }
            }}
            onMouseEnter={handleButtonHover}
            onMouseLeave={handleButtonHover}
          >
            Adicionar
          </Button>
        </form>
      </div>
    </div>
)
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f5f5f5'
  },
  formContainer: {
    width: '800px',
    padding: '20px',
    boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
    borderRadius: '4px'
  },
  formContainerMobile: {
    width: '100%',
    padding: '20px',
    boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
    borderRadius: '4px'
  },
  heading: {
    marginBottom: '20px',
    fontSize: '24px',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  form: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  formColumn: {
    flex: '0 0 50%',
    padding: '0 10px',
    boxSizing: 'border-box'
  },
  formColumnMobile: {
    flex: '0 0 100%',
    padding: '0 10px',
    boxSizing: 'border-box'
  },
  input: {
    background: '#f7f7f7',
    borderRadius: '4px',
    border: '1px solid #ddd',
    padding: '8px 12px',
    transition: 'border-color 0.3s'
  },
  label: {
    color: '#888',
    fontSize: '14px'
  },
  addButton: {
    background: '#14192d',
    color: '#fff',
    borderRadius: '4px',
    padding: '12px',
    transition: 'background 0.3s',
    marginTop: '20px'
  }
}

export default AddBookForm
