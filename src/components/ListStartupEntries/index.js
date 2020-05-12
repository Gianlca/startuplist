import React, { useState, useEffect } from "react";
import { listLogEntries } from "../../API";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import useStyles from './styles';
import { useStoreState } from 'easy-peasy';
import IconButton from '@material-ui/core/IconButton';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import Button from '@material-ui/core/Button';

const ListStartupEntries = () => {
    const classes = useStyles();

    const [logEntries, setLogEntries] = useState([]);

    const filtered = useStoreState(state => [...logEntries].filter(data => data.name.toLowerCase().includes(state.query)));

    const getEntries = async () => {
        const logEntries = await listLogEntries();  
        setLogEntries(logEntries.organizations); 
    }
    
    useEffect(() => {
        getEntries();
    }, []);    

    const sortByName = () => {
        const sorted = [...logEntries].sort(function(a, b) {
            var nameA = a.name.toUpperCase();
            var nameB = b.name.toUpperCase();
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }
            return 0;
        });
        setLogEntries(sorted);
    }

    return (
      <List className={classes.root}>
        <Button
        variant="contained"
        color="primary"
        className={classes.button}
        endIcon={<ArrowDownwardIcon />}
        onClick={sortByName}
        size="small"
      >
        Sort by name
      </Button>        
        {filtered.map((entry, i) => (
          <div key={`id_${i}`}>
            <ListItem alignItems="flex-start" className={classes.column}>
              <ListItemAvatar>
                <Avatar src={entry.image_url} />
              </ListItemAvatar>
              <Typography>{entry.name}</Typography>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                {entry.description}
              </Typography>
            </ListItem>
            <Divider variant="inset" component="li" />
          </div>
        ))}
      </List>
    );
}

export default ListStartupEntries;