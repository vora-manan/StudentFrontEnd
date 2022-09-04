import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';


export default function NavBarForLogin() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ backgroundColor: '#DCDCDC' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <img src="https://www.designevo.com/res/templates/thumb_small/black-wheat-and-mortarboard.webp" style={{ borderRadius: '50%', height: '15vh' }}></img>
          </Typography>
          <Typography variant="h3" style={{ fontFamily: "Audiowide", color: 'black', fontSize: '200%' }}>Lorum Ipsum School For Boys</Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
