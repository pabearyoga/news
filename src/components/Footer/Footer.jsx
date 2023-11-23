import React from 'react';
import { Typography, Container, Box, Link } from '@mui/material';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';

const Footer = () => {
  return (
    <footer>
      <Box
        color="var(--text)"
        p={2}
        width="100%"
        textAlign="center"
        borderTop="1px solid var(--accent)"
      >
        <Container>
          <Typography variant="h6" style={{ textAlign: 'left', color: 'var(--blue)' }}>
            News
          </Typography>
        </Container>
        <Container style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="body2">
            &copy; {new Date().getFullYear()} News. All rights reserved.
          </Typography>
          <Link href="mailto:info@news.com" underline="none" color="var(--text)" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <MailOutlineRoundedIcon sx={{ fontSize: 20, marginRight: 1 }} />
            {'info@news.com'}
          </Link>
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;
