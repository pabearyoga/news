import React from 'react';
import { AppBar, Toolbar, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';

const Header = () => {
  return (
    <AppBar position="fixed" sx={{ backgroundColor: 'var(--blue)', zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '22px 0' }}>
        <Link to="/">
          <Toolbar>
            <Logo />
          </Toolbar>
        </Link>
      </Container>
    </AppBar>
  );
};

export default Header;