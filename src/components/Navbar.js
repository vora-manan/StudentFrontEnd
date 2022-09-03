import { Avatar } from '@material-ui/core';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }} style={{backgroundColor:'whitesmoke'}}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd-sxp-D_j_v-CUgAMFq_H7ma81XOlvg3REUz4d6o8&s"></Avatar>
          </Typography>
          <Button color="inherit">La Martiniere For Boys</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
