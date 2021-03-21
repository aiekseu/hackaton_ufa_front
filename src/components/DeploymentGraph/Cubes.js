import React, {useState} from 'react';
import {Grid, Paper, Typography} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';
import lightGreen from '@material-ui/core/colors/lightGreen';
import ArrowUpwardRoundedIcon from '@material-ui/icons/ArrowUpwardRounded';
import StockChart from './StockChart';

const color = lightGreen["A400"];


const useStyles = makeStyles((theme) => ({
    root:{
        display: "flex",
        justifyContent: "center",
    },
    cube: {
        margin: 2,
        width: 20,
        height: 20,
        backgroundColor: "green"
    }
}));


const Cubes = () => {
    const classes = useStyles();
    const array = ["#FFCF5C", "#FFCF5C", "#86C86F", "#FFCF5C", "#86C86F",
                   "#E38C8C", "#FFCF5C", "#FFCF5C", "#E38C8C", "#FFCF5C", 
                   "#FFCF5C", "#FFCF5C", "#FFCF5C", "#FFCF5C", "#FFCF5C",
                   "#86C86F", "#E38C8C", "#FFCF5C", "#FFCF5C", "#E38C8C", ]

    const getCubes = (color) => { 
        
        return(<div className={classes.cube} style={{backgroundColor: color}}/>)
    }

    return (
        <div>
            <div className={classes.root}>
                {array.slice(0, 10).map(color => getCubes(color))}
            </div>        
            <div className={classes.root}>
                {array.slice(10, 20).map(color => getCubes(color))}
            </div>        
        </div>      
    )
}

export default Cubes