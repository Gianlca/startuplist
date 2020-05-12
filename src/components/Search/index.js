import React from 'react';
import { useForm } from 'react-hook-form'
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import useStyles from './styles';
import { useStoreActions } from 'easy-peasy';
const Search = () => {
    const classes = useStyles();
    const { register, handleSubmit, errors, reset  } = useForm();
    
    const addQuery = useStoreActions(actions => actions.addQuery);
    
    const onSubmit = data => { 
        addQuery(data.query);
    }

    const handleChange = (e) => {
      addQuery(e.target.value);
    }

    return(
        <div className={classes.search}>
            <form noValidate onSubmit={handleSubmit(onSubmit)} className={classes.form}>
            <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              inputRef={register} label="query" name="query"
              onChange={handleChange}
              autoComplete='off'
            />
          </div>
            </form>
         </div>      
    )
}

export default Search;