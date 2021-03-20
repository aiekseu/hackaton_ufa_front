import React, {useState} from 'react';
import {Grid, Paper, Typography} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';

import AssessmentIcon from '@material-ui/icons/Assessment';
import RoomAvailability from "./RoomAvailability";

const useStyles = makeStyles((theme) => ({
    date: {
        marginLeft: 24
    },
    statIcon: {
        marginRight: 16
    },
    statNameDiv: {
        marginBottom: 32,
        marginTop: 32
    },
    statDiv: {
        padding: 16
    }
}));

const getDate = () => {
    let date = new Date();
    let Year = date.getFullYear();
    let Month = date.getMonth();
    let Day = date.getDate();
    let time = date.toLocaleTimeString().slice(0, -3);

    let russian_month

    switch (Month) {
        case 0:
            russian_month = "Января";
            break;
        case 1:
            russian_month = "Февраля";
            break;
        case 2:
            russian_month = "Марта";
            break;
        case 3:
            russian_month = "Апреля";
            break;
        case 4:
            russian_month = "Мае";
            break;
        case 5:
            russian_month = "Июня";
            break;
        case 6:
            russian_month = "Июля";
            break;
        case 7:
            russian_month = "Августа";
            break;
        case 8:
            russian_month = "Сентября";
            break;
        case 9:
            russian_month = "Октября";
            break;
        case 10:
            russian_month = "Ноября";
            break;
        case 11:
            russian_month = "Декабря";
            break;
    }

    let currentDate = `${Day} ${russian_month} ${Year} - ${time}`

    return (currentDate);
}


const Statistic = () => {
    const classes = useStyles();

    return (
        <div>
            <Grid container direction='column'>
                <Grid item container direction='row' alignItems="center" className={classes.statNameDiv}>
                    <Grid item>
                        <AssessmentIcon fontSize='large' className={classes.statIcon}/>
                    </Grid>

                    <Grid item>
                        <Typography variant='h4'>
                            Статистика
                        </Typography>

                        <Typography variant='subtitle1' color='textSecondary' className={classes.date}>
                            {getDate()}
                        </Typography>
                    </Grid>
                </Grid>

                <Grid item>
                    <Paper className={classes.statDiv} elevation={4}>
                        <Typography variant='h6'>
                            Что тут написать????
                        </Typography>
                        <RoomAvailability roomType='Свободных комнат' available={7} total={16} />
                        <RoomAvailability roomType='Свободных комнат с ВКС' available={3} total={7} />
                        <RoomAvailability roomType='Свободных комнат с проектором' available={4} total={5} />
                        <RoomAvailability roomType='Свободных конференц залов' available={1} total={2} />
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}

export default Statistic