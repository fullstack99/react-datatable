import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Users from './pages/dashboard/Users';
import AdminLayout from './layout/Admin';

function AppRouter() {
  return (
    <AdminLayout>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="users" element={<Users />} />
      </Routes>
    </AdminLayout>
  );
}

export default AppRouter;
