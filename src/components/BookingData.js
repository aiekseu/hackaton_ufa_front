import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

import ChipArray from "./ChipArray"

import { useDispatch, useSelector } from 'react-redux';
import {handleAdd } from './redux/ChipSlice';
import CheckBoxOutlineBlankOutlinedIcon from '@material-ui/icons/CheckBoxOutlineBlankOutlined';
import CheckBoxOutlinedIcon from '@material-ui/icons/CheckBoxOutlined';
import { Typography, Button } from '@material-ui/core';

const employees = [
  {
    name: "Якубицкий В.Р.",
    email: "Simraki@mail.ru"
},
{
  name: "Чимитов Б.Б.",
  email: ""
},
{
  name: "Бесштанникова Л",
  email: "ebb@tpu.ru"
},
{
  name: "Кудашкин А.",
  email: "kudashkin@mail.ru"
},
{
  name: "Сенчин Д.",
  email: "Malaxolka@yandex.ru"
},

]

const currencies = [
  {
    value: 'USD',
    label: '30 мин',
  },
  {
    value: 'EUR',
    label: '1 час',
  },
  {
    value: 'BTC',
    label: '1.5 часа',
  },
  {
    value: 'JPY',
    label: '2 часа',
  },
];

const BookingButton = withStyles({
  root: {
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 18,
    padding: '6px 12px',
    border: '0px solid',
    lineHeight: 1.5,
    height: 36,
    width: 224,
    backgroundColor: '#F6AE3F',
    borderRadius: "18px 18px 18px 18px",
    borderColor: '#0063cc',
  },
})(Button);

const useStyles = makeStyles((theme) => ({
  roomTitle:{
    display: "flex",
    marginBottom: 24,
    alignItems: "center",
    justifyContent: "flex-start",
    transform: "translateX(-24px)",
    textAlign: "center",
    verticalAlign: "center",
    width: 40,
    height: 25,
    backgroundColor: "#FFFFFF",
    borderTopRightRadius: "30px",
    borderBottomRightRadius: "30px",
    background: "#fc0", /* Цвет фона */
    boxShadow: "0 0 10px rgba(0,0,0,0.5)" /* Параметры тени */
},
  root: {
    width: '100%',
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  textField: {
    width: "100%",
    backgroundColor: "#F1F6FF",
    color: "#7D86A9",
        
  },
  suggestion: {
    position: "relative" ,
    display: "flex",
    justifyContent: "center",
    width: "100%",
    height: 0,
  },
  suggestionDiv: {
    position: "absolute",
    top: -40,
    borderRadius: "10px 10px 10px 10px",
    border: "1px solid #CACACA",
    color: "#7D86A9",

  },
  suggestionDiv2: {
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    top: 0,
    width: 144,
    height: 40,
    borderRadius: "20px 20px 20px 20px",
    backgroundColor: "#FFFFFF",
    border: "2px solid #CACACA",
    color: "#7D86A9",

  },
  notification: {
    display: "flex",
    width: "100%",
    height: "24px",
    color: "#7D86A9",
    paddingLeft: "4px",
    marginBottom: theme.spacing(2)
  },
  buttonDiv: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
  },
  bookingButton: {
    backgroundColor: "#F6AE3F"
  },
  typographyWarning: {
    color: "#EA4E4E"
  },
  typographyWarningDiv:{
    display: "flex",
    width: "100%",
    justifyContent: "center",
    marginBottom: "24px"
  }
}));

export default function BookingData() {  
  const chipStore = useSelector((state) => (state.chipReducer.chips));
  const count = useSelector((state) => (state.chipReducer.count));
  const dispatch = useDispatch();

  const [missingEmails, setMissingEmails] = React.useState([]);
  const classes = useStyles();
  const [currency, setCurrency] = React.useState('EUR');
  const [found, setFound] = React.useState(false);
  const [employee, setEmployee] = React.useState(null);

  const [notification, setNotification] = React.useState(true);


  const getParticipantName = (part) => {
    if (part !== null){
      return(<div className={classes.suggestionDiv} >
        {part.name}
      </div>)
    }else {
      return null
    }
  }

  
  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  const handleParticipantChange = (e) => {
    const input = e.target.value.toLowerCase();
    employees.forEach((emp) => {
      if(emp.name.toLowerCase().includes(input)){
        setFound(true)
        setEmployee(emp)
      } 
  })

  if(input.length <=1 ){
    setFound(false);
    setEmployee(null)
  }
}

  const hasEmailMissing = () => {
    const arr = chipStore.filter((chip) => chip.email === "")
    console.log("arr");
    console.log(arr);
    //setMissingEmails(arr)
    if (arr.length > 0){
      return true
    }
    return false
  }

  const onKeyPressAction = (e) =>{
    if(e.key === "Enter"){
      console.log("enter");
      
      if (found){
        const chipToAdd = {key: count, name: employee.name, email: employee.email }
        console.log(chipStore);
        var arr = chipStore.filter((chip) => chip.email === chipToAdd.email)
        console.log(arr);
        if (arr.length === 0){
          dispatch(handleAdd( { chipToAdd }))
        }
        

      }
        setFound(false);
        e.preventDefault();
        e.target.value = ""
    }

  }

 

  const handleBooking = () => {
    const event = {
      id: count,
      start: new Date()
    }
  }

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          id="outlined-select-currency"
          select
          label="Продолжительность"
          value={currency}
          onChange={handleChange}
          variant="outlined"
          className={classes.textField}
          margin ="dense"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          label="ФИО"
          id="outlined-size-small"
          defaultValue=""
          variant="outlined"
          size="small"
          className={classes.textField}
        />

        <TextField
          label="Участники"
          id="outlined-size-small"
          defaultValue=""
          variant="outlined"
          size="small"
          className={classes.textField}
          onChange={handleParticipantChange}
          onKeyPress={onKeyPressAction}
        />
        <div className={classes.suggestion} >
          {found && getParticipantName(employee)}
        </div>

        <ChipArray />


        <div className={classes.notification} onClick={() => {setNotification(!notification)}}>
          {notification ? <CheckBoxOutlinedIcon />
                        :<CheckBoxOutlineBlankOutlinedIcon />}
          <Typography variant="subtitle1">
            Оповестить участников
          </Typography>

        </div>


        <div className={classes.typographyWarningDiv}>
        {notification && hasEmailMissing() &&
          <Typography className={classes.typographyWarning} variant="subtitle1 gutterBottom">
          Невозможно оповестить {chipStore.filter((chip) => chip.email === "")[0].name} (отсутствует почта)
        </Typography>}
          

        </div>
        

        
        <div className={classes.buttonDiv}>
          <BookingButton variant="contained" color="secondary" onClick={handleBooking}>
            Забронировать
          </BookingButton>

        </div>



        
        
      </div>
    </form>
  );
}



