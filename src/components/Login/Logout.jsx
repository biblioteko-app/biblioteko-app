import React, { useState } from 'react'
import './Logout.css'

import { Button } from '@mui/material'

const Logout = ({ onLogout }) => {

    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

    const handleLogout = (event) => {
        event.preventDefault();
        if (isLoggedIn) {
            onLogout();
        }
    }

    return (
        <div className='box'>
            {isLoggedIn ? (
                <Button
                variant="contained"
                onClick={handleLogout}
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
                Logout
            </Button>
            ) : (
                <p>
                    Não está logado!
                </p>
            )}
        </div>

    )
}

export default Logout