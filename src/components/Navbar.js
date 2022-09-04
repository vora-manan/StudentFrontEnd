import { Avatar } from '@material-ui/core';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }} style={{ backgroundColor: 'whitesmoke' }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Avatar src="https://www.designevo.com/res/templates/thumb_small/black-wheat-and-mortarboard.webp"></Avatar>
          </Typography>
          <Button color="inherit">Lorum Ipsum School For Boys</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
