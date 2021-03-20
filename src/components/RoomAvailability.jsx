import {Box, LinearProgress, Typography} from "@material-ui/core";
import React from "react";

const RoomAvailability = ({roomType, available, total}) => {
    return (
        <Box display="flex" alignItems="center">
            <Box minWidth={260}>
                <Typography variant='subtitle1' color='textSecondary'>
                    {roomType}
                </Typography>
            </Box>
            <Box width="100%" ml={2} mr={2}>
                <LinearProgress variant="determinate" value={Math.round(available / total * 100)}/>
            </Box>
            <Box minWidth={35}>
                <Typography variant="body2">
                    {available}/{total}
                </Typography>
            </Box>
        </Box>
    )
}

export default RoomAvailability