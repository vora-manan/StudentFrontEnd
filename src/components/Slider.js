import React from 'react'
import Marquee from "react-easy-marquee";
import './Slider.css'


const Example = (props) => {
  return (
    <React.Fragment>
<h3 style={{color:'red'}}>NOTE:</h3>
    <div className="flash">
      <Marquee duration={10000} height="70vh" axis="Y" pauseOnHover={true}>
        {props.news.map((item) => (
        <div style={{wordWrap:'break-word',whiteSpace:'normal',marginTop:'5vh'}}>
            {item}
          </div>
        ))}
      </Marquee>
    </div>
    </React.Fragment>

  );
};

export default Example;