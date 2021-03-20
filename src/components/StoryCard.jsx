import {Card, CardActionArea, CardContent, CardMedia, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 300,
        margin: 16
    },
    media: {
        height: 'auto',
        width: '45%',
        padding: 8,
        margin: 'auto',
        textAlign: 'center'
    },
}));


const StoryCard = ({picture, text}) => {
    const classes = useStyles();


    return (
        <Card elevation={3} className={classes.root}>
            <CardActionArea
                onClick={() => {
                    console.log('clicked')
                }}
            >
                <CardMedia
                    component="img"
                    image={picture}
                    title="Contemplative Reptile"
                    className={classes.media}
                />
                <CardContent>
                    <Typography variant="subtitle2" color="textSecondary" align='center'>
                        {text}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )

}

export default StoryCard