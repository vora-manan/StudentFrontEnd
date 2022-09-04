import { Typography } from '@material-ui/core';
import React from 'react';
import Marquee from "react-easy-marquee";
import './Slider.css';


const items = [
  'Contact Us:   enquiry.abcd@abcduniversity.in and Call us:   033 0919 3032 (11 AM to 5 PM )'
]

const HeadLine = (props) => {
  return (
    <React.Fragment>
      <div style={{ textAlign: 'center', color: 'red' }}>
        <Marquee duration={10000} height="8vh" axis="X" pauseOnHover={false}>
          {items.map((item) => (
            <div style={{ wordWrap: 'break-word', whiteSpace: 'normal', fontWeight: 'bold' }}>
              {item}
            </div>
          ))}
        </Marquee>
        <Typography style={{ color: 'blue', fontWeight: 'bold' }}>
          {props.urgent}
        </Typography>
        <Typography style={{ color: 'blue', fontWeight: 'bold' }}>
          Current Date: 2022-04-09
        </Typography>
      </div>
    </React.Fragment>

  );
};

export default HeadLine;