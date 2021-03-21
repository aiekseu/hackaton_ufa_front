import React, {useState} from 'react';
import {Grid, Paper, Typography} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';
import lightGreen from '@material-ui/core/colors/lightGreen';
import ArrowUpwardRoundedIcon from '@material-ui/icons/ArrowUpwardRounded';
import StockChart from '../StockChart';
import Cubes from "./Cubes"
import { useDispatch, useSelector } from 'react-redux';

const color = lightGreen["A400"];


const useStyles = makeStyles((theme) => ({
    paper:{
        backgroundColor: "#FFFFFF",
        padding: 24
    },
    popularity: {
        color: lightGreen["A400"]
    },
    icon: {
        transform: "translateY(4px)",
    },
    chart: {
        margin: "0 auto"
    }
}));


const RoomDeploymentGraph = ({fetchedData}) => {
    const classes = useStyles();
    
    const content = <StockChart className={classes.chart} />

    return (
            <Paper elevation={2} className = {classes.paper}>
                <Typography variant="h6" className={classes.typography}>
                    Статистика комнаты
                </Typography>

                <Typography variant="body2" className={classes.popularity}>
                    <ArrowUpwardRoundedIcon fontSize="small" className={classes.icon}/>+35% Популярность
                </Typography>

                {content}
                <Cubes />
                
            </Paper>
        
    )
}

export default RoomDeploymentGraph