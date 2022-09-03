import React from 'react';
import Table from '../components/Marks'
import GradeChart from '../components/GradeChart'
import NavBar from '../components/NavBarForLogin';
import GradeTable from '../components/GradeTable'
import Attendance from '../components/Attendance'
import { Paper, Grid, Box, Typography } from '@material-ui/core';
import './ReportCard.css'
import Footer from '../components/Footer';


export default function ReportCard(props) {
    return (

        <React.Fragment>
            <NavBar />
            <Paper elevation={10} style={{backgroundColor: '#D7D7BE', marginBottom: '5px' }}>
                <Grid
                    container
                    alignItems="center"
                    justifyContent="center"
                    style={{ border: '2px solid black', backgroundColor: '#F8F8F8' }}>
                    <Grid item xs={12} sm={1}>
                        <Box
                            component="img"
                            width={'100%'}
                            alt="profile picture."
                            src={props.img}
                        />
                    </Grid>
                    <Grid item xs={12} sm={11} style={{ textAlign: 'center' }}>
                        <Grid container
                            alignItems="center"
                            justifyContent="center"
                        >
                            <Grid item xs={6}>
                                <div className="intro">
                                    Student Name:{props.name}
                                </div>
                            </Grid>
                            <Grid item xs={6} >
                                <div className="intro">
                                    Roll Number :{props.roll}
                                </div>
                            </Grid>
                            <Grid item xs={6}>
                                <div className="intro">
                                    Class Teacher: {props.teacher}
                                </div>
                            </Grid>
                            <Grid item xs={6} >
                                <div className="intro">
                                    Grade and Section : {props.section}
                                </div>
                            </Grid>
                        </Grid>
                        <div></div>
                    </Grid>
                </Grid>
            </Paper>
            <Grid container
                alignItems="center"
                justifyContent="center"
                style={{ marginBottom: '10px' }}>
                <Grid item xs={12} sm={6} style={{ textAlign: 'center' }}>
                    <h2 style={{ fontWeight: 'bold', fontFamily: 'Audiowide' }}>Report Card</h2>
                    <Table rows={[{ subject: 'English Literature', marks: 85, highest: 95, grade: 'B', remark: 'Good' },
                    { subject: 'Mathematics', marks: 98, highest: 100, grade: 'A', remark: 'Good' },
                    { subject: 'Physics', marks: 94, highest: 96, grade: 'A', remark: 'Good' },
                    { subject: 'Chemistry', marks: 93, highest: 97, grade: 'A', remark: 'Good' },
                    { subject: 'Computer Science', marks: 100, highest: 100, grade: 'A', remark: 'Good' },
                    { subject: 'Hindi', marks: 100, highest: 100, grade: 'A', remark: 'Good' },
                    { subject: 'English Language', marks: 85, highest: 95, grade: 'B', remark: 'Good' },
                    { subject: 'Physical Education', marks: 100, highest: 100, grade: 'A', remark: 'Good' },
                    { subject: 'Social Studies', marks: 78, highest: 95, grade: 'C', remark: 'Good' }]}></Table>
                </Grid>
                <Grid item xs={12} sm={6} style={{ textAlign: 'center' }}>
                    <h2 style={{ fontWeight: 'bold', fontFamily: 'Audiowide' }}>Number of Students VS Average</h2>
                    <GradeChart data={[
                        { name: 'Above 90', students: 10 },
                        { name: 'Above 80', students: 20 },
                        { name: 'Above 70', students: 10 },
                        { name: 'Above 60', students: 5 },
                        { name: 'Above 50', students: 2 },
                        { name: 'Above 40', students: 1 },
                        { name: 'Failed', students: 1 }
                    ]} />
                </Grid>
                <Grid item xs={12} sm={6} style={{ textAlign: 'center' }}>
                <h2 style={{ fontWeight: 'bold', fontFamily: 'Audiowide' }}>Marks Distribution</h2>
                    <Attendance COLORS={["#404040", "#606060", "#989898", "#D3D3D3", "#E8E8E8"]}
                        pieData={[
                            {
                                name: "English Literature",
                                value: 85
                            },
                            {
                                name: "Mathematics",
                                value: 98
                            },
                            {
                                name: "Physics",
                                value: 94
                            },
                            {
                                name: "Chemistry",
                                value: 93
                            },
                            {
                                name: "Computer Science",
                                value: 100
                            },
                            {
                                name: "Hindi",
                                value: 100
                            },
                            {
                                name: "English Language",
                                value: 85
                            },
                            {
                                name: "Physical Education",
                                value: 100
                            },
                            {
                                name: "Social Studies",
                                value: 78
                            }]} />
                </Grid>
                <Grid item xs={12} sm={6} style={{ textAlign: 'center' }}>
                    <h2 style={{ fontWeight: 'bold', fontFamily: 'Audiowide' }}>Grading System</h2>
                    <GradeTable />
                </Grid>
            </Grid>
            <Footer />
        </React.Fragment>
    )


}