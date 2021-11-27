import React, { useState, useCallback } from "react";
import { DateRangePicker } from "react-date-range";

import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file


function Search() {
  
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection"
  };

  function handleSelect(ranges) {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }

  const onSearch = useCallback( async () => {
    console.log("startDate: ", startDate);
    console.log("endDate: ", endDate);
    const fetchdata= await fetch(`https://www.gov.uk/bank-holidays.json `, {
        startDate,
        endDate
      });
      const response= await fetchdata.json();
      console.log(response.scotland.events);
  }, []);

  return (
    <div className="datepickersearch">
      <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />

      
      
      <input type="button"value="click" onClick={onSearch}/>
    </div>
  );
}

export default Search;
