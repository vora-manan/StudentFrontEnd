import { Avatar, Button, Grid, Link, TextField, Typography } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import React from 'react';
import HeadLine from '../components/HeadLine';
import NavBarForLogin from '../components/NavBarForLogin';
import Slider from '../components/Slider';

const items = [
    '1. Download online grade card of M.Phil. MPOC 11, MPIN 11, MPPH 11, MPWO 11 ODD_2022. Notice Date: Wed 24 Aug 2022 05:31:39 PM',
    '2. Download online grade card of M.Phil. MPOC 12, MPWO 12 EVEN_2021. Notice Date: Wed 24 Aug 2022 05:33:35 PM',
    '3. Special Supple Form Fill up is live for BA and MA. Eligible Students can submit the Form. BA and MA FORM FILL UP for (ODD & EVEN SEM. SUPPLE) IS EXTENDED UP TO 04/09/2022.. Notice Date: Thu 01 Sep 2022 09:10:04 PM',
    '4. Special Supple Form Fill up is live for BSC. Eligible Students can submit the Form.. Notice Date: Wed 31 Aug 2022 10:15:30 PM',
    '5. Download online grade card M.LISc. Digital Library (Evening) M.A MLID 11 1st Year 1sem 2022. Notice Date: Fri 26 Aug 2022 06:48:46 PM',
    '6. Download online grade card M.A English 2.2 Final Year 2nd Year 2nd Sem. Notice Date: Fri 26 Aug 2022 06:46:05 PM',
    '7. Download online grade card LIBRARY AND INFORMATION SCIENCE M.A MLIB 11 1st Year 1sem 2022. Notice Date: Fri 26 Aug 2022 04:00:28 PM',
    '8. Download online grade card of M.Phil. MPLB 11 ODD_2022. Notice Date: Thu 25 Aug 2022 03:55:08 PM'
]
const Login = () => {

    const avatarStyle = { backgroundColor: 'red', margin: 'auto' }
    const btnstyle = { margin: '8px 0', backgroundColor: 'black', color: 'white' }
    return (
        <React.Fragment>
            <Grid container
                alignItems="center"
                justifyContent="center"
                style={{ backgroundColor: '#E5E4E2' }}
            >
                <Grid item xs={12} sm={12}>
                    <NavBarForLogin></NavBarForLogin>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <HeadLine urgent='Fee Submission Due Date is 10-09-2022'></HeadLine>
                </Grid>
            </Grid>
            <Grid container
                alignItems="center"
                justifyContent="center"
                style={{ backgroundColor: '#E5E4E2' }}>
                <Grid item xs={12} sm={8}>
                    <Slider news={items}></Slider>
                </Grid>
                <Grid item xs={12} sm={4} style={{ textAlign: 'center', backgroundColor: '#DCDCDC', borderRadius: '10%', borderWidth: '10px', borderStyle: 'inset' }}>
                    <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
                    <h2>Login Here</h2>
                    <TextField placeholder='Username' required />
                    <br></br>
                    <br></br>
                    <TextField placeholder='Password' type='password' required />
                    <br></br>
                    <FormControlLabel
                        control={
                            <Checkbox
                                name="checkedB"
                                color="black"
                            />
                        }
                        label="Remember me"
                    />
                    <br></br>
                    <a href='/studentInfo'><Button type='submit' variant="contained " style={btnstyle}>Login</Button></a>
                    <Typography >
                        <Link href="#" style={{ color: 'red' }}>
                            Forgot password?
                        </Link>
                    </Typography>

                    <Typography style={{ color: 'black' }}> Do you have an account?
                        <Link to="#" style={{ color: 'red' }}>
                            Sign Up
                        </Link>
                    </Typography>
                </Grid>

            </Grid>
            <footer style={{ backgroundColor: '#404040', borderRadius: '10px' }}>
                <p style={{ color: 'white', textAlign: 'center', padding: '10px' }}> 	&#169; Department of Comupter Science, La Martiniere For Boys</p>
            </footer>
        </React.Fragment>

    )
}

export default Login