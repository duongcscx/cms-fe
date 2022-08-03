import React from 'react';

import Button from '@mui/material/Button';

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import PublishIcon from '@mui/icons-material/Publish';

import Icon from '@mui/material/Icon';

import './index.css';
import {
  IconButton,
  List,
  ListItem,
  ListItemText,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

export default function index() {
  const rows = [
    { id: 1, name: 'Company', tax: 1 },
    { id: 2, name: 'Company  1', tax: 1 },
    { id: 3, name: 'Company 2', tax: 1 },
    { id: 4, name: 'Company 3', tax: 1 },
    { id: 5, name: 'Company 1', tax: 1 },
  ];

  return (
    <div className="flex flex-row h-screen w-screen border-8 border-black">
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat"
        rel="stylesheet"
      />
      <div className="flex flex-col basis-1/5">
        <div className="flex basis-1/15 p-4 place-items-center bg-[#5904ce] ">
          <span className="CMS">CMS+</span>
        </div>
        <div className="flex flex-col basis-14/15 p-4 grow bg-[#272727]">
          <div className="CollectionTypes flex flex-col 10">
            <Button style={{ textTransform: 'none', justifyContent: "flex-start" }}>
              <span className="CollectionTypes">Collection Types</span>
            </Button>
            <List>
              <ListItem onClick={() => alert('Some thing')}>
                <ListItemText primary="Company profile" />
              </ListItem>
              <ListItem onClick={() => alert('Some thing')}>
                <ListItemText primary="Test Company" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Test Company 2" />
              </ListItem>
              <ListItem>
                <ListItemText primary="1+" />
              </ListItem>
            </List>
          </div>

          <Button style={{ textTransform: 'none', justifyContent: "flex-start" }}>
            <span className="CollectionTypes">Content Type Builder</span>
          </Button>
        </div>
      </div>

      <div className="flex flex-col basis-4/5">
        <div className="flex basis-1/15 p-4 place-items-center bg-[#fff] ">
          <span className="ContentTypes pl-8 m-[5px]">Content Type</span>
        </div>
        <div className="flex flex-col basis-14/15 grow bg-[#eaeeff]">
          <span className="ContentTypes m-8">5 Entries Found</span>
          <div className="mx-9">
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell align="left">Name</TableCell>
                    <TableCell align="left">Tax</TableCell>
                    <TableCell align="right">Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.id}
                      </TableCell>
                      <TableCell align="left">{row.name}</TableCell>
                      <TableCell align="left">{row.tax}</TableCell>
                      <TableCell align="right">
                        <IconButton onClick={() => alert('Publish')}>
                          <PublishIcon />
                        </IconButton>
                        <IconButton onClick={() => alert('Edit')}>
                          <EditIcon />{' '}
                        </IconButton>
                        <IconButton onClick={() => alert('Delete')}>
                          <DeleteIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
