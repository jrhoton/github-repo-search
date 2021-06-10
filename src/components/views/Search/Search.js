import React from 'react';
import { FormControl, InputLabel, Input, Select, MenuItem, Button, CircularProgress} from '@material-ui/core';
import * as css from './Search.module.css';
import RepositoriesList from '../RepositoriesList/RepositoriesList';

const Search = (props) => {
    return (
        <div>
            <div 
                className={css.searchContainer}
                onKeyDown={e => {if (e.key === 'Enter') {props.search(e)}}}>
                <FormControl>
                    <InputLabel>Search Repositories</InputLabel>
                    <Input
                        className={css.searchField}
                        name='keyword'
                        value={props.queryParams.keyword || ''}
                        onChange={e => props.updateCriteria('keyword', e.target.value)}
                        required />
                </FormControl>
                <FormControl>
                    <InputLabel>Language</InputLabel>
                    <Input
                        className={css.searchField}
                        name='language'
                        value={props.queryParams.language || ''}
                        onChange={e => props.updateCriteria('language', e.target.value)} />
                </FormControl>
                <FormControl style={{minWidth: 120}}>
                    <InputLabel>Sort By</InputLabel>
                    <Select
                        name='sort' 
                        value={props.queryParams.sort || ''}
                        onChange={e => props.updateCriteria('sort', e.target.value)}>
                        <MenuItem value=''>Best Match</MenuItem>
                        <MenuItem value='stars'>Stars</MenuItem>
                    </Select>
                </FormControl>
                <Button 
                    color='primary'
                    variant='contained'
                    onClick={e => props.search(e)}
                    disabled={!props.allowSearch}>
                    Search
                </Button>
            </div>
            {props.loading ? 
                <CircularProgress color='primary' /> :
                <RepositoriesList
                    results={props.results}
                    viewDetail={props.viewDetail} />}
        </div>
    );
};

export default Search;