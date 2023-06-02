import React from 'react';
import { AppBar, Toolbar, Box, List, ListItem, Typography, styled, ListItemButton, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';
import BImage from '../assets/B.png';
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
      main: '#5D6FC1',
    },
    secondary: {
      main: '#00C6BA',
    },
  },
};

const itemList = [
  { text: 'Home', to: '/' },
  { text: 'Login/Sign-up', to: '/LoginSignUp' },
  { text: 'Livros', to: '/books' },
  { text: 'About', to: '/about' },
  { text: 'AddBook', to: '/AddBook', roles: ['professor'] }, // Item "AddBook" será exibido apenas para usuários com a role "professor"
];

const Navbar = ({ user }) => {
  const filteredItemList = itemList.filter(item => {
    if (item.roles && item.roles.includes('professor')) {
      return user.role === 'professor'; // Exibe o item se o usuário for professor e o item permitir a role "professor"
    }
    return true; // Exibe o item se não há restrição de roles
  });
  

  return (
    <AppBar component="nav" position="sticky" sx={{ backgroundColor: theme.palette.primary.main }} elevation={0}>
      <StyledToolbar>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <img src={BImage} alt="B" style={{ width: '40px', marginRight: '-7px', marginBottom: '15px' }} />
          <Typography variant="h6" component="h2" sx={{ fontStyle: 'oblique' }}>
            iblioteko
          </Typography>
        </Box>

        <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
          <DrawerItem />
        </Box>

        <ListMenu>
          {filteredItemList.map((item) => (
            <ListItem key={item.text}>
              <ListItemButton
                component={Link}
                to={item.to}
                sx={{
                  color: '#fff',
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
        </ListMenu>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
