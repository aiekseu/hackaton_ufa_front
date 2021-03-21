import React, {useState} from 'react';
import {Grid, Card, Paper, Typography, Button, CardMedia} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { changeRoomFilter, change } from '../redux/FilterSlice';
import RoomDeploymentGraph from '../DeploymentGraph/RoomDeploymentGraph';
import img from "../../images/office.png"
import { relativeTimeRounding } from 'moment';
import BookingData from "./BookingData"

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        
      },
    paper:{
        backgroundColor: "#FFFFFF",
        padding: 0
    },
    media: {
        margin: 0,
        height: 0,
        width: "100%",
        height: 200,
        backgroundColor: "#000",
         // 16:9
    },
    gridItem: {
        marginBottom: theme.spacing(1),
    },
    tag: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#86C86F",
        color: "#FFFFFF",
        width: "100%",
        height: 24,
        borderRadius: 12,
    },
    bookingColumn: {
        width: "100%",
        padding: theme.spacing(3),
    },
    buttonGridItem:{
        padding: theme.spacing(2)
    },
    timeButtons: {
        width: "80%",
        margin: "0 auto",
        marginTop: theme.spacing(1)
    },
    bookingForm: {
        paddingTop: theme.spacing(2)
    }

}));


const BookingComponent = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const getTag = (text, color) => {
        return(
            <Grid item xs={3} className={classes.gridItem}>
                <div className={classes.tag} style={{backgroundColor: color}}>
                    <Typography align="center" variant="body2">
                    {text}
                    </Typography>
                </div>

            </Grid>
        )}

    const arrayOfTags = [["ВКС", "#86C86F"], ["Wi-Fi", "#6FB2C8"], ["Микро", "#E38C8C"], ["LED", "#C86FC4"]];
    const times = ["09:00", "10:00", "13:00", "14:00", "15:00", "16:00", "18:00"]

    const getTimes = (time)=> {
        return(<Grid container justify="center"  alignItems="center" item xs={3}>
            <Grid item>
            <Button variant="outlined" size="small" color="primary" className={classes.timeButtons}>
                {time}
        </Button>
            </Grid>
            
        </Grid>)

    }

    return (
        <div>
            <Paper elevation={2} className = {classes.paper}>
                <CardMedia
                    className={classes.media}
                    image={img}
                    title="Paella dish"
                />
                                                   
                <Grid container justify="center"  alignItems="center" className = {classes.bookingColumn}>
                    <Grid item xs={12} container spacing={3}>
                        {arrayOfTags.map(tag => getTag(tag[0], tag[1]))}
                    </Grid>

                    <Grid xs={12} container  item>
                        <Grid xs={3} item>
                            <Typography variant="h6" >
                                Время
                            </Typography>
                        </Grid>
                        <Grid xs={9} item />

                        {times.map(getTimes)}

                        <Grid item xs={12} className={classes.bookingForm}>
                            <BookingData />
                        </Grid>
                        

                    </Grid>
                </Grid>

                
        
            </Paper>
        </div>
        
    )
}

export default BookingComponent