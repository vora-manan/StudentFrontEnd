import { Avatar, Button, Grid, Link, TextField, Typography } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import React from 'react';
import HeadLine from '../components/HeadLine';
import NavBarForLogin from '../components/NavBarForLogin';
import Slider from '../components/Slider';

const items = [
    '1. Tomorrow, Tuesday 09th August 2022, is a holiday on account of Muharram.',
    '2. Circular for Mathematics Standard / Mathematics Basic for Class X',
    '3. Summer Vacation for Classes III to VIII will commence from 21st May, 2022 (Saturday). Holiday Home Work can be viewed in Google classroom and Class WhatsApp group. The school will reopen on 1 st July,2022 (Friday ).',
    '4. Monday is a holiday on account of Buddh Purnima.The school will remain closed.',
    '5. Bringing and usage of mobile phones by students is strictly prohibited in the school premises.',
    '6. The school is not responsible for the loss/theft or its misuse',
    '7. School reopening Circular for classes VI to VIII',
    '8. School reopening Circular for classes IX to XII'
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