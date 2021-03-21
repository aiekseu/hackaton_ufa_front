import React, {useState} from 'react';
import {Grid, Paper, Typography} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { changeRoomFilter, change } from './redux/FilterSlice';
import RoomDeploymentGraph from './RoomDeploymentGraph';
import BookingComponent from './BookingComponent';

const useStyles = makeStyles((theme) => ({
    roomTitle:{
        display: "flex",
        marginBottom: 24,
        alignItems: "center",
        justifyContent: "flex-start",
        transform: "translateX(-24px)",
        textAlign: "center",
        verticalAlign: "center",
        width: 240,
        height: 50,
        backgroundColor: "#FFFFFF",
        borderTopRightRadius: "30px",
        borderBottomRightRadius: "30px",
        background: "#fc0", /* Цвет фона */
        boxShadow: "0 0 10px rgba(0,0,0,0.5)" /* Параметры тени */
    },
    roomTilteTypography:{
        marginLeft: 48
    }
}));


const RoomDeployment = () => {
    const classes = useStyles();
    const roomFilter = useSelector((state) => (state.roomFilter.room));
    const redEvents = useSelector((state) => (state.eventReducer.events));
    const dispatch = useDispatch();

    const handleChangeRoomFilter = (number) => {
        dispatch(changeRoomFilter({roomNumber: number}))
    }

    const handleChange = () => {
        dispatch(change());
    }

    return (
        <div>
            <div className={classes.roomTitle} onClick={handleChange}>
                <Typography variant="h5" className={classes.roomTilteTypography}>
                    Комната {roomFilter > 0 && roomFilter }
                </Typography>
            </div>

            <Grid container spacing={3}>
                <Grid item xs={12}>
                    {roomFilter > 0 &&
                    <RoomDeploymentGraph fetchedData={redEvents.filter(event => event.room === roomFilter)[0]}/>}
                </Grid>

                <Grid item xs={12}>
                    {roomFilter > 0 &&
                    <BookingComponent/>}
                </Grid>
            </Grid>
        </div>
        
    )
}

export default RoomDeployment