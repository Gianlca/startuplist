import React from 'react';
import useStyles from './style';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Home from './Home';
import Container from '@material-ui/core/Container';
import Search from './Search';
import './styles.css';

const Root = () => {
    const classes = useStyles();
    return (
      <div className='root'>
        <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Inreach react interview
          </Typography>         
          <Search/> 
          </Toolbar>
        </AppBar>
        <Container>
          <Home/>
        </Container>
      </div>
    );

}

export default Root;
