import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

export default function GuestLayout({ children }) {
  return (
    <Box sx={{ display: 'flex' }}>
      <Grid container>
        <Grid item xs={12}>
          {children}
        </Grid>
      </Grid>
    </Box>
  );
}
