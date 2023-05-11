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
  { text: 'About', to: '/about' },
];

const Navbar = () => {
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
          {itemList.map((item) => (
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
