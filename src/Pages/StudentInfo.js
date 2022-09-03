import { Box, Grid, Paper, Typography } from '@material-ui/core';
import * as React from 'react';
import { Parallax } from 'react-parallax';
import Attendance from '../components/Attendance';
import Calendar from '../components/Calendar';
import Examinations from '../components/Examinations';
import ExtraCurricular from '../components/ExtraCurricular';
import Footer from '../components/Footer';
import NavBar from '../components/Navbar';
import Table from '../components/Subjects';

const parallax1 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTie0Qwchx8SeKK4iJ5C_vVlQYeG9MFOVvIjsXORm2Df_0RDu_oVDl-QqDQ0kjrDbjd1wA&usqp=CAU"
const parallax2 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn1N_ukBU1zeGrEuqLi_5xF5ji9qdLMmL0y7PTSNc3gdPAjw2_geJo1WO_HD_BmfHG_Jg&usqp=CAU"
const parallax3 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTACCoI0f2cMXDA_FrBVb5bcqpeJZdxFa2PluxT2A8b6dWSg3hxicN1Z6DQ8VsITWyDDW0&usqp=CAU"


const StudentInfo = (props) => {
  return (
    <React.Fragment>
      <NavBar />
      <Paper elevation={20} style={{ border: '2px solid black', textAlign: 'center', marginBottom: '2px', backgroundColor: 'white' }}>
        <Typography>Student Portal</Typography>
      </Paper>
      <Paper elevation={10} style={{ height: '20vh', backgroundColor: '#D7D7BE', marginBottom: '5px' }}>
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          style={{ border: '2px solid black', backgroundColor: '#F8F8F8' }}>
          <Grid item xs={8} style={{ textAlign: 'center' }}>
            <Typography>Name : {props.name}</Typography>
            <Typography>Grade and Section :{props.section} </Typography>
            <Typography>Roll Number: {props.roll}</Typography>
          </Grid>
          <Grid item xs={4}>
            <Box
              component="img"
              sx={{
                height: '20vh'
              }}
              alt="profile picture."
              src={props.img}
            />
          </Grid>
        </Grid>
      </Paper>

      <Parallax bgImage={parallax1} strength={500}>
        <Grid container
          alignItems="center"
          justifyContent="center"
          style={{ backgroundColor: 'transparent', marginTop: '20px' }}>
          <Grid item xs={12} sm={6} style={{ textAlign: 'center' }}>
            <h2> Attendance Records </h2>
            <Attendance COLORS={["#8884d8", "#82ca9d", "#FFBB28", "#FF8042", "#AF19FF"]} pieData={[
              {
                name: "January",
                value: 75
              },
              {
                name: "February",
                value: 85
              },
              {
                name: "March",
                value: 95
              },
              {
                name: "May",
                value: 89
              },
              {
                name: "June",
                value: 92
              },
              {
                name: "July",
                value: 99
              },
              {
                name: "August",
                value: 84
              },
              {
                name: "September",
                value: 82
              },
              {
                name: "October",
                value: 91
              },
              {
                name: "November",
                value: 100
              },
              {
                name: "December",
                value: 100
              }
            ]}
            />
          </Grid>
          <Grid item xs={12} sm={6} style={{ textAlign: 'center' }}>
            <h2>Subjects Undertaken</h2>
            <Table rows={[{ subject: 'Mathmatics', grade: 'A', teacher: 'Rehman', remark: 'Good' }, { subject: 'Science', grade: 'A', teacher: 'Rehman', remark: 'Good' }, { subject: 'English', grade: 'A', teacher: 'Rehman', remark: 'Good' }, { subject: 'Hindi', grade: 'A', teacher: 'Rehman', remark: 'Good' }, { subject: 'Social Studies', grade: 'A', teacher: 'Rehman', remark: 'Good' }]} />
          </Grid>
        </Grid>
      </Parallax>
      <br />
      <Parallax bgImage={parallax2} strength={500}>
        <Grid item xs={12}>
          <Examinations></Examinations>
        </Grid>
      </Parallax>
      <Parallax bgImage={parallax3} strength={500}>
        <div>
          <Grid container
            alignItems="center"
            justifyContent="center"
            style={{ backgroundColor: 'transparent', marginTop: '20px' }}>
            <Grid item xs={12} sm={6}>
              <Calendar holidays={[
                '04-09-2022',
                '05-09-2022',
                '06-09-2022'
              ]} />
            </Grid>
            <Grid item xs={12} sm={6} style={{ textAlign: 'center' }}>
              <ExtraCurricular images={[
                {
                  label: 'Cricket',
                  imgPath:
                    'https://4.imimg.com/data4/GS/QT/MY-3092797/cricket-bat-500x500.jpg',
                },
                {
                  label: 'Football',
                  imgPath:
                    'https://a.storyblok.com/f/112937/568x464/82f66c3a21/all_the_english-_football_terms_you_need_to_know_blog-hero-low.jpg/m/620x0/filters:quality(70)/',
                },
                {
                  label: 'Basketball',
                  imgPath:
                    'https://images.unsplash.com/photo-1576438162986-c685b1cfed7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&w=1000&q=80',
                },
                {
                  label: 'Swimming',
                  imgPath:
                    'https://images.everydayhealth.com/images/swimming-overview-guide-1440x810.jpg?sfvrsn=d3b9ee_1',
                },
              ]} />
            </Grid>
          </Grid>
        </div>
      </Parallax>
      <Footer />
    </React.Fragment>
  )
}
export default StudentInfo;