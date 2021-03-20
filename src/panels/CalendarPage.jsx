import React from "react";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Filters from "../components/Filters";
import MyCalendarConst from "../components/MyCalendarConst";
import PersonFilters from "../components/PersonFilters";



const CalendarPage = () => { 
 
    return (
      <div>
        
        <Filters />
        <PersonFilters />
        <MyCalendarConst />
         
      </div>
    );
}

export default CalendarPage;

