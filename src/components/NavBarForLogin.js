import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


export default function NavBarForLogin() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{backgroundColor:'#DCDCDC'}}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <img src="https://www.skooltree.com/wp-content/uploads/2020/01/LA-MARTINIERE-FOR-BOYS-Kolkata.png" style={{borderRadius:'50%', height:'15vh'}}></img>
          </Typography>
          <Typography variant="h3" style={{fontFamily: "Audiowide",color:'black', fontSize:'200%'}}>La Martiniere For Boys</Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
