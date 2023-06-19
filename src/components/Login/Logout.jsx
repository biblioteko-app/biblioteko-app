import React, { useEffect, useState } from 'react'
import './Logout.css'
import authentication from '../../services/authentication'
import { Button } from '@mui/material'

const Profile = ({ onLogout, user }) => {

    const [userDetails, setUserDetails] = useState({ void: true })
    
    const handleLogout = () => {
        onLogout({ void: true })
        authentication.logOut()
    }

    useEffect(() => {
        authentication.getUser(user.user.id, setUserDetails);
        // console.log(userDetails)
    }, [ user ])

    return (
        <div className='box'>
            <div>Nome: </div>
            <div className='profile'> {userDetails.name } </div>
            <div>Email: </div>
            <div className='profile'> {userDetails.email } </div>
            <div>Tipo de usuário: </div>
            <div className='profile'> {userDetails.role } </div>

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
        </div>
    )
}

export default Profile