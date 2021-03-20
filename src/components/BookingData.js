import React, {useState}from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

import ChipInput from 'material-ui-chip-input'
import ChipArray from "./ChipArray"

import { useDispatch, useSelector } from 'react-redux';
import {handleAdd, handleDelete} from './redux/ChipSlice';

const employees = [
  {
    name: "Якубицкий В.Р.",
    email: "Simraki@mail.ru"
},
{
  name: "Чимитов Б.Б.",
  email: "bbc7@tpu.ru"
},
{
  name: "Бесштанникова Л",
  email: "Simraki@mail.ru"
},
{
  name: "Кудашкин А.",
  email: "Simraki@mail.ru"
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

  }
}));

export default function BookingData() {  
  const chipStore = useSelector((state) => (state.chipReducer.chips));
  const count = useSelector((state) => (state.chipReducer.count));
  const dispatch = useDispatch();

  const classes = useStyles();
  const [currency, setCurrency] = React.useState('EUR');
  const [found, setFound] = React.useState(true);
  const [employee, setEmployee] = React.useState(null);


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

  const onKeyPressAction = (e) =>{
    if(e.key === "Enter"){
      console.log("enter");
      
      if (found){
        const chipToAdd = {key: count, email: employee.email }
        console.log(chipStore);
        var arr = chipStore.filter((chip) => chip.email === chipToAdd.email)
        console.log(arr);
        if (arr.length ==0){
          dispatch(handleAdd( { chipToAdd }))
        }
        

      }
        setFound(false);
        e.preventDefault();
        e.target.value = ""
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

        
        
      </div>
    </form>
  );
}



