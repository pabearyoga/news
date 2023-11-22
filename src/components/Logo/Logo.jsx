import React from 'react';
import { Typography, Box } from '@mui/material';

const Logo = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto',
        width: '200px',
      }}
    >
      <img
        width="67"
        height="67"
        src="https://img.icons8.com/external-others-inmotus-design/67/ED4749/external-N-qwerty-keypad-others-inmotus-design.png"
        alt="external-N-qwerty-keypad-others-inmotus-design"
      />
      <Typography
        variant="h3"
        component="p"
        sx={{
          fontSize: '48px',
          fontStyle: 'normal',
          fontWeight: 400,
          lineHeight: 'normal',
          borderRadius: '10px',
          color: 'var(--blue)',
          height: '67px',
          paddingLeft: '10px',
          paddingRight: '10px',
          border: 'none',
          backgroundColor: 'var(--white)',
        }}
      >
        ews
      </Typography>
    </Box>
  );
};

export default Logo;
