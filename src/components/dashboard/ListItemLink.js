import React from 'react';
import { Link } from 'react-router-dom';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

function ListItemLink(props) {
  const { icon, primary, to, onClick, children, className } = props;

  const CustomLink = React.forwardRef((props, ref) => (
    <Link to={to} {...props} ref={ref} />
  ));

  return (
    <ListItem
      button
      component={CustomLink}
      onClick={onClick}
      className={className}>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={primary} />
      {children}
    </ListItem>
  );
}

export default ListItemLink;
