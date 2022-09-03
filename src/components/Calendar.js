import moment from 'moment';
import React, { useState } from 'react';
import { Calendar } from 'react-calendar';

import './Calendar.css';

export default function Cal(props) {
  const [date, setDate] = useState(new Date());

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Academic Calendar</h1>
      <Calendar
        onChange={setDate}
        value={date}
        tileClassName={({ date, view }) => {
          if (props.holidays.find(x => x === moment(date).format("DD-MM-YYYY"))) {
            return 'highlight'
          }
        }}
        tileDisabled={({ date }) => date.getDay() === 0}
        minDate={
          new Date()
        }
      >
      </Calendar>
    </div>
  )
}
