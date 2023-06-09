import React, { useState } from 'react'
import { TextField, Button, useMediaQuery } from '@mui/material'
import axios from 'axios'
import { createBook } from '../services/BookService'

const AddBookForm = ({ user }) => {
  const [buttonHovered, setButtonHovered] = useState(false)
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [genre, setGenre] = useState('')
  const [edition, setEdition] = useState('')
  const [synopsis, setSynopsis] = useState('')
  const [pageCount, setPageCount] = useState('')
  const [accessLink, setAccessLink] = useState('')

  const handleButtonHover = event => {
    setButtonHovered(event.type === 'mouseenter')
  }

  const handleSubmit = event => {
    event.preventDefault()

    try {
      createBook(user.user.id, {
        title: title,
        author: author,
        genre: genre,
        edition: edition,
        synopsis: synopsis,
        photo: '',
        pages: pageCount,
        accessLink: accessLink
      })

      // console.log(response.data)
    } catch (error) {
      console.error(error)
      // Lidar com erros, exibir mensagens de erro ou tomar outras ações adequadas
    }
  }

  const isMobile = useMediaQuery('(max-width: 600px)')

  return (
    <div style={styles.container}>
      <div style={isMobile ? styles.formContainerMobile : styles.formContainer}>
        <h2 style={styles.heading}>Adicionar livro</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={isMobile ? styles.formColumnMobile : styles.formColumn}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="title"
              label="Título"
              name="title"
              autoComplete="off"
              value={title}
              onChange={event => setTitle(event.target.value)}
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
            <TextField
              margin="normal"
              required
              fullWidth
              id="author"
              label="Autor"
              name="author"
              autoComplete="off"
              value={author}
              onChange={event => setAuthor(event.target.value)}
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
            <TextField
              margin="normal"
              required
              fullWidth
              id="genre"
              label="Gênero"
              name="genre"
              autoComplete="off"
              value={genre}
              onChange={event => setGenre(event.target.value)}
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
            <TextField
              margin="normal"
              required
              fullWidth
              id="edition"
              label="Edição"
              name="edition"
              autoComplete="off"
              value={edition}
              onChange={event => setEdition(event.target.value)}
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
              id="synopsis"
              label="Sinopse"
              name="synopsis"
              autoComplete="off"
              multiline
              rows={6.7}
              value={synopsis}
              onChange={event => setSynopsis(event.target.value)}
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
            <TextField
              margin="normal"
              required
              fullWidth
              id="pageCount"
              label="Quantidade de Páginas"
              name="pageCount"
              autoComplete="off"
              value={pageCount}
              onChange={event => setPageCount(event.target.value)}
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
            <TextField
              margin="normal"
              required
              fullWidth
              id="accessLink"
              label="Link de Acesso"
              name="accessLink"
              autoComplete="off"
              value={accessLink}
              onChange={event => setAccessLink(event.target.value)}
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
