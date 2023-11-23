import React from 'react';
import { Container, CssBaseline, Box } from '@mui/material';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

const Layout = () => {
  return (
    <>
      <CssBaseline />
      <Header />
      <Container component="main" sx={{ marginTop: '150px' }}>
        <Box component="main" >
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
