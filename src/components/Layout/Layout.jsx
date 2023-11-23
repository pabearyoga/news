import React from 'react';
import { Container, CssBaseline } from '@mui/material';
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
          <Suspense fallback={<div style={{textAlign: 'center'}}>Loading...</div>}>
            <Outlet />
          </Suspense>
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
