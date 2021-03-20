import {
    Button,
    MenuItem,
    Grid,
    Menu,
    Paper,
    Typography,
    FormControl,
    InputLabel,
    Select,
    Slider, FormLabel, FormGroup, FormControlLabel, Checkbox
} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {useState} from "react";

import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';


const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 300,
        margin: 16,
        padding: 24,
    },
    title: {
        textAlign: 'center'
    },
    inputFilter: {
        width: '100%',
        backgroundColor: '#F4F6FF',
    },
    search: {
        backgroundColor: '#F6AE3F',
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto'
    }
}));


const FiltersCard = ({setRows}) => {
    const classes = useStyles();

    const [roomType, setRoomType] = useState("")
    const [floor, setFloor] = useState("")
    const [peopleRange, setPeopleRange] = useState([0, 50])
    const [facilities, setFacilities] = useState({video: false, microphone: false, wifi: false, led: false})

    const rangeMarks = [
        {
            value: 4,
            label: '4',
        },
        {
            value: 10,
            label: '10',
        },
        {
            value: 30,
            label: '30',
        },
        {
            value: 50,
            label: '50',
        },
    ];

    const handleCheckboxChange = (event) => {
        setFacilities({...facilities, [event.target.name]: event.target.checked});
    };

    return (
        <Paper elevation={3} className={classes.root}>
            <Grid container direction='column' spacing={1}>
                <Grid item>
                    <Typography variant='h5' className={classes.title}>
                        Фильтр
                    </Typography>
                </Grid>

                <Grid item>
                    <FormControl variant="filled" className={classes.inputFilter}>
                        <InputLabel id="roomType">Тип комнаты</InputLabel>
                        <Select
                            labelId="roomType"
                            id="roomType"
                            value={roomType}
                            onChange={(event) => {
                                setRoomType(event.target.value)
                            }}
                        >
                            <MenuItem value="">
                                <em>Любой</em>
                            </MenuItem>
                            <MenuItem value={'Переговорная'}>Переговорная</MenuItem>
                            <MenuItem value={'Конференц зал'}>Конференц зал</MenuItem>
                            <MenuItem value={'Комната групповых занятий'}>Комната групповых занятий</MenuItem>
                            <MenuItem value={'Комната индивидуальной работы'}>Комната индивидуальной работы</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>

                <Grid item>
                    <FormControl variant="filled" className={classes.inputFilter}>
                        <InputLabel id="floor">Этаж</InputLabel>
                        <Select
                            labelId="floor"
                            id="floor"
                            value={floor}
                            onChange={(event) => {
                                setFloor(event.target.value)
                            }}
                        >
                            <MenuItem value="">
                                <em>Любой</em>
                            </MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={6}>6</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>

                <Grid item>
                    <Typography gutterBottom>
                        Вместимость, чел.
                    </Typography>
                    <Slider
                        value={peopleRange}
                        onChange={(event, newValue) => {
                            setPeopleRange(newValue)
                        }}
                        valueLabelDisplay="auto"
                        aria-labelledby="range-slider"
                        marks={rangeMarks}
                        min={0}
                        max={50}
                    />
                </Grid>

                <Grid item>
                    <FormControl component="fieldset" className={classes.formControl}>
                        <FormLabel component="legend">Оборудование</FormLabel>
                        <FormGroup>
                            <FormControlLabel
                                control={<Checkbox checked={facilities.video} color="primary"
                                                   onChange={handleCheckboxChange} name="video"/>}
                                label="ВКС"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={facilities.microphone} color="primary"
                                                   onChange={handleCheckboxChange} name="microphone"/>}
                                label="Микрофон"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={facilities.wifi} color="primary"
                                                   onChange={handleCheckboxChange} name="wifi"/>}
                                label="Wi-Fi"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={facilities.led} color="primary"
                                                   onChange={handleCheckboxChange} name="led"/>}
                                label="LED"
                            />
                        </FormGroup>
                    </FormControl>
                </Grid>

                <Grid item>
                    <Button variant="contained" className={classes.search}>
                        Поиск
                    </Button>
                </Grid>
            </Grid>
        </Paper>
    )

}
export default FiltersCard