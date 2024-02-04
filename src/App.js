import React, { useState } from "react";
import "./app.css";

// import { DateRangePicker } from "react-date-range";
// import 'react-date-range/dist/styles.css'; // main css file
// import 'react-date-range/dist/theme/default.css'; // theme css file

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import {format} from "date-fns"

function App() {
  const [selectedDate, setSelectedDate] = useState( new Date())

  return (
    <div className="App">
      <h1> Hello mihee </h1>
      
      <h2> DatePicker</h2>
      <div>
        <DatePicker
          className="datePicker"
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          dateFormat="dd/MM/YYYY"
          minDate={new Date()}
          filterDate={(date) => date.getDay() !== 6 && date.getDay() !== 0}
          isClearable
          showYearDropdown
          scrollableMonthYearDropdown
        />
      </div>
    </div>
  );
}

export default App;
