import React, { useState } from "react";
import './app.css'

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


function App() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div className="App">
      <h1> Hello mihee </h1>
      <h2> Date range  </h2>  
      <div >

      </div>
      <DatePicker className="datePicker"
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat='dd/MM/YYYY'
        minDate = {new Date()}
        filterDate = {date => date.getDay() !== 6 && date.getDay() !==0}
        isClearable
        showYearDropdown
        scrollableMonthYearDropdown
      />
    </div>
  );
}

export default App;
