import {Grid} from "@material-ui/core";
import Header from "../components/Header";
import Statistic from "../components/Statistic";


const MainPage = () => {


    return (
        <Grid container direction="column">
            <Grid item >
                <Header/>
            </Grid>
            <Grid item container>
                <Grid item xs={false} sm={1} />
                <Grid item xs={12} sm={10}>
                    <Statistic />
                </Grid>
                <Grid item xs={false} sm={1} />
            </Grid>
        </Grid>
    )

}

export default MainPage