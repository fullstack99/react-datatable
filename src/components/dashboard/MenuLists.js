import React from 'react';
import PeopleIcon from '@mui/icons-material/People';
import List from '@mui/material/List';

import ListItemLink from './ListItemLink';

const MenuLists = () => {
  return (
    <List component="nav" aria-labelledby="nested-list-subheader">
      <ListItemLink icon={<PeopleIcon />} primary="Users" to="/users" />
    </List>
  );
};

export default MenuLists;
