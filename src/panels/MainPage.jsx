import {Grid, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

import Header from "../components/Header";
import Statistic from "../components/Statistic";
import StoryCard from "../components/StoryCard";

import story_1 from '../images/story_1.png'
import story_2 from '../images/story_2.png'
import story_3 from '../images/story_3.png'
import RoomsTable from "../components/RoomsTable";

const useStyles = makeStyles((theme) => ({
    body: {
        backgroundColor: '#F1F6FF'
    },
    roomsTitle: {
        marginBottom: 16,
        marginLeft: 32
    }
}));

const MainPage = () => {
    const classes = useStyles();

    return (
        <Grid container direction="column">
            <Grid item>
                <Header/>
            </Grid>

            <Grid item container direction='row' justify="space-around">
                <Grid item xs='auto' sm={8}>
                    <Statistic/>
                </Grid>
                <Grid item xs='auto' sm={3}>
                    <StoryCard picture={story_1} text='Как забронировать комнату'/>
                    <StoryCard picture={story_2} text='Как забронировать комнату'/>
                    <StoryCard picture={story_3} text='Как забронировать комнату'/>
                </Grid>
            </Grid>

            <Grid item >
                <Typography variant='h4' className={classes.roomsTitle}>
                    Переговорные
                </Typography>
                <RoomsTable />
            </Grid>
        </Grid>
    )
}

export default MainPage