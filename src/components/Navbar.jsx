import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, Box, List, ListItem, Typography, styled, ListItemButton, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';
import BImage from '../assets/Logo.svg';
import DrawerItem from './DrawerItem';

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});

const ListMenu = styled(List)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.up('sm')]: {
    display: 'flex',
  },
}));

const theme = {
  palette: {
    primary: {
      main: '#483E80',
      alternative: '#FFFFFF'
    },
    secondary: {
      main: '#00C6BA',
    },
  },
};

// const itemList = [
//   { text: 'Home', to: '/' },
//   { text: 'Livros', to: '/books' },
//   { text: 'About', to: '/about' },
//   { text: 'Turmas', to: '/AddClass' },
//   // { text: 'Login/Sign-up', to: '/LoginSignUp' },
// ];

const Navbar = ({ user }) => {

  const itemList = [
    { text: 'Home', to: '/' },
  ];

  if (user.user !== undefined) { 
    itemList.push({ text: 'Livros', to: '/books' }) 
    itemList.push({ text: 'Turmas', to: '/turmas' }) 
  }

  itemList.push({ text: 'Sobre', to: '/about' })

  useEffect(() => {
    // console.log(user)
  }, [ user ])

  // console.log(user)

  return (
    <AppBar component="nav" position="sticky" sx={{ backgroundColor: theme.palette.primary.alternative }} elevation={0}>
      <StyledToolbar>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <img src={BImage} alt="B" style={{ width: '200px', marginRight: '-7px', marginBottom: '0px' }} />
          {/* <Typography variant="h6" component="h2" sx={{ fontStyle: 'oblique' }}>
            iblioteko
          </Typography> */}
        </Box>

        <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
          <DrawerItem />
        </Box>

        <ListMenu>
          {itemList.map((item) => (
            <ListItem key={item.text}>
              <ListItemButton
                component={Link}
                to={item.to}
                sx={{
                  color: theme.palette.primary.main,
                  backgroundColor: 'transparent',
                  borderRadius: '2px',
                  position: 'relative',
                  '&:hover': {
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      left: '0',
                      bottom: '-4px',
                      width: '100%',
                      height: '2px',
                      backgroundColor: theme.palette.secondary.main,
                      borderRadius: '2px',
                    },
                  },
                }}
              >
                <ListItemText primaryTypographyProps={{ sx: { whiteSpace: 'nowrap' } }} primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}

          <ListItem key={ user.userDetails !== undefined ? user.userDetails.name : "Entrar/Cadastrar"}>
            <ListItemButton
                component={Link}
                to={"/profile"}
                sx={{
                  color: theme.palette.primary.main,
                  backgroundColor: 'transparent',
                  borderRadius: '2px',
                  position: 'relative',
                  '&:hover': {
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      left: '0',
                      bottom: '-4px',
                      width: '100%',
                      height: '2px',
                      backgroundColor: theme.palette.secondary.main,
                      borderRadius: '2px',
                    },
                  },
                }}
              >
                <ListItemText primaryTypographyProps={{ sx: { whiteSpace: 'nowrap' } }} primary={ user.userDetails !== undefined ? user.userDetails.name : "Sign in/ Sign up" } />
              </ListItemButton>
          </ListItem>
        </ListMenu>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;