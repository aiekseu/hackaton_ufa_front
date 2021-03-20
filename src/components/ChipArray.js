import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import TagFacesIcon from '@material-ui/icons/TagFaces';

import { useDispatch, useSelector } from 'react-redux';
import {handleAdd, handleDelete} from './redux/ChipSlice';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: theme.spacing(0.5),
    margin: 0,
  },
  chip: {
    margin: theme.spacing(0.5),
  },
}));

export default function ChipArray() {
  const chipStore = useSelector((state) => (state.chipReducer.chips));
  const dispatch = useDispatch();
  const classes = useStyles();
  
  const handleDeleteAction = (chipToDelete) => () => {
    dispatch(handleDelete({chipToDelete}))
  };

  return (
    <Paper component="ul" className={classes.root}>
      {chipStore.map((data) => {
        let icon;

        if (data.email === 'React') {
          icon = <TagFacesIcon />;
        }

        return (
          <li key={data.key}>
            <Chip
              icon={icon}
              label={data.email}
              onDelete={data.email === 'React' ? undefined : handleDeleteAction(data)}
              className={classes.chip}
            />
          </li>
        );
      })}
    </Paper>
  );
}
