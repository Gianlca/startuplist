import React from 'react';
import ListStartupEntries from '../ListStartupEntries';
import Card from '@material-ui/core/Card';
import useStyles from './style';
const Home = () => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <ListStartupEntries/>
        </Card>
    )
}

export default Home;