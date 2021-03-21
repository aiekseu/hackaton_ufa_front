import React from "react";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Filters from "../components/Filters";
import MyCalendarConst from "../components/MyCalendarConst";
import PersonFilters from "../components/PersonFilters";
import RoomDeployment from "../components/DeploymentGraph/RoomDeployment"
import {makeStyles} from '@material-ui/core/styles';
import {Grid} from "@material-ui/core";
import Header from "../components/Header";

const useStyles = makeStyles((theme) => ({
    gridItemStat: {
        padding: 24
    },
    gridItemCalendar: {
        padding: 24
    },
}));


const CalendarPage = () => { 
    const classes = useStyles();

 
    return (
        <Grid container direction="column">
            <Grid item >
                <Header/>
            </Grid>
        
            <Grid item container alignContent="center">
                <Grid item container xs={0} sm={4} className={classes.gridItemStat}>
                    <Grid item xs={12}>
                        <RoomDeployment />
                    </Grid>
                </Grid>
                <Grid item container xs={12} sm={8} className={classes.gridItemCalendar}>
                    {/* <Filters />
                    <PersonFilters />*/}
                    <Grid item xs={12}>
                        <MyCalendarConst />
                    </Grid>
                                   
                </Grid>

            </Grid>
        </Grid>
      
    );
}

export default CalendarPage;



