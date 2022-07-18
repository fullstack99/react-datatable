import React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import Header from '../components/dashboard/Header';
import Sidebar from '../components/dashboard/Sidebar';

export default function AdminLayout({ children }) {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Header handleDrawerToggle={handleDrawerToggle} mobileOpen={mobileOpen} />
      <Sidebar
        handleDrawerToggle={handleDrawerToggle}
        mobileOpen={mobileOpen}
      />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: '100%',
        }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}
