import React from 'react';
import { FormControl, InputLabel, Input, Select, MenuItem, Button} from '@material-ui/core';
// import { makeStyles } form '@material-ui/core/styles';
import RepositoriesList from '../RepositoriesList/RepositoriesList';

import './Search.css';


const Search = (props) => {
    return (
        <div>
            <div 
                className='searchContainer'
                onKeyDown={e => {if (e.key === 'Enter') {props.search(e)}}}>
                <FormControl className='grow control'>
                    <InputLabel>Search Repositories</InputLabel>
                    <Input
                        name='keyword'
                        value={props.queryParams.keyword || ''}
                        onChange={e => props.updateCriteria('keyword', e.target.value)}
                        required />
                </FormControl>
                <FormControl className='control'>
                    <InputLabel>Language</InputLabel>
                    <Input
                        name='language'
                        value={props.queryParams.language || ''}
                        onChange={e => props.updateCriteria('language', e.target.value)} />
                </FormControl>
                <FormControl style={{minWidth: 120, }}>
                    <InputLabel>Sort By</InputLabel>
                    <Select
                        name='sort' 
                        value={props.queryParams.sort || ''}
                        onChange={e => props.updateCriteria('sort', e.target.value)}>
                        <MenuItem value=''>Best Match</MenuItem>
                        <MenuItem value='stars'>Stars</MenuItem>
                    </Select>
                </FormControl>
                <div className='control'>
                    <Button
                        // className='control'
                        color='primary'
                        variant='contained'
                        onClick={e => props.search(e)}
                        disabled={!props.allowSearch}>
                        Search
                    </Button>
                </div>
            </div>
            {props.loading || props.results.length > 0 ? 
                <RepositoriesList
                    loading={props.loading}
                    results={props.results}
                    viewDetail={props.viewDetail} /> :
                null}
        </div>
    );
};

export default Search;