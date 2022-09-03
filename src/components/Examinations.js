import React from 'react';
import {Grid} from '@material-ui/core'
import ExaminationCards from './ExaminationCards'

const Examinations=()=>
{
    return(
        <div style={{textAlign:'center'}}>
        <h1>Examinations Held</h1>
        <Grid 
        container   
        alignItems="center"
        justifyContent="space-around"
        style={{marginTop:'30px',backgroundColor:'transparent'}}>
        <Grid item>
        <ExaminationCards title="Class Test 1" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. " image="https://img.lovepik.com/element/40141/2406.png_300.png"></ExaminationCards>    
        </Grid>
        <Grid item>
        <ExaminationCards title="Half Yearly Examinations" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. " image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8n1LHG9peFMOH6Wyv0QA-27utIdQuN9V9aA&usqp=CAU"></ExaminationCards>    
        </Grid>
        <Grid item>
        <ExaminationCards title="Class Test 2" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. " image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeQ4s-PTIfqUzlkye5wrH8R9F7xZWzhnfVlg&usqp=CAU"></ExaminationCards>    
        </Grid>
        <Grid item>
        <ExaminationCards title="Annual Examinations" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. " image="https://as1.ftcdn.net/v2/jpg/01/95/11/56/1000_F_195115692_wh4bwByEhU0JgCP7uCSzR59C7hoLzVqm.jpg"></ExaminationCards>    
        </Grid>
        </Grid>
        </div>
    )
}


export default Examinations