/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Paper, Box, IconButton, useTheme } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import Avatar from '@mui/material/Avatar';

import CustomTable from '../../../components/common/Table';
import LoadingBar from '../../../components/common/Loading';
import { userActions } from '../../../actions/users';

const headers = [
  {
    id: 'id',
    label: 'ID',
    isSorted: true,
  },
  {
    id: 'avatar',
    label: 'Avatar',
    isSorted: false,
  },
  {
    id: 'first_name',
    label: 'First Name',
    isSorted: true,
  },
  {
    id: 'last_name',
    label: 'Last name',
    isSorted: true,
  },
  {
    id: 'email',
    label: 'Email',
    isSorted: true,
  },
  { id: 'action', label: 'Action', isSorted: false },
];

function createData(id, avatar, email, first_name, last_name, action) {
  return {
    id,
    avatar,
    first_name,
    last_name,
    email,
    action,
  };
}

export default function Users() {
  const theme = useTheme();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(25);
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('id');
  const [rows, setRows] = useState([]);

  const dispatch = useDispatch();
  const { users, isLoading, total } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(userActions.getUsersRequest({ page: page + 1, rowsPerPage }));
  }, [page, rowsPerPage]);

  useEffect(() => {
    generateRows(users);
  }, [users]);

  const generateRows = (users) => {
    const rowsData = [];

    users.forEach((v) => {
      rowsData.push(
        createData(
          v.id,
          <Avatar alt="Remy Sharp" src={v.avatar} />,
          v.email,
          v.first_name,
          v.last_name,
          <IconButton
            variant="contained"
            color="default"
            onClick={() => {
              console.log(v);
            }}>
            <EditIcon />
          </IconButton>
        )
      );
    });
    setRows(rowsData);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleRequestSort = (event, property) => {
    if (property === 'pending') return;
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2, padding: theme.spacing(2) }}>
        <CustomTable
          headers={headers}
          rows={rows}
          page={page}
          rowsPerPage={rowsPerPage}
          handleChangePage={handleChangePage}
          handleChangeRowsPerPage={handleChangeRowsPerPage}
          handleRequestSort={handleRequestSort}
          order={order}
          orderBy={orderBy}
          total={total}
          onRowClick={() => console.log('row click')}
        />
      </Paper>
      {isLoading && <LoadingBar />}
    </Box>
  );
}
