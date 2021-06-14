import React, { Fragment } from 'react';
import { FormControl, InputLabel, Input, Select, MenuItem, Button} from '@material-ui/core';
import RepositoriesList from '../RepositoriesList/RepositoriesList';
import './Search.css';

/**
 * Search View
 * 
 * This component contains the search controls and renders the Repositories List once a request has been
 * made to the GitHub API.
 * @props queryParams, updateCriteria(), allowSearch, search(), loading, results, viewDetail()
 */
const Search = (props) => {
    return (
        <Fragment>
            <div 
                className='searchControls'
                aria-label='search controls'
                onKeyDown={e => {if (e.key === 'Enter') {props.search(e)}}}>
                <FormControl 
                    className='grow control'
                    aria-label='keyword search'>
                    <InputLabel>Search Repositories</InputLabel>
                    <Input
                        name='keyword'
                        role='text control'
                        value={props.queryParams.keyword || ''}
                        onChange={e => props.updateCriteria('keyword', e.target.value)}
                        required />
                </FormControl>
                <FormControl 
                    className='control'
                    aria-label='language search'>
                    <InputLabel>Language</InputLabel>
                    <Input
                        name='language'
                        role='text control'
                        value={props.queryParams.language || ''}
                        onChange={e => props.updateCriteria('language', e.target.value)} />
                </FormControl>
                <FormControl 
                    aria-label='sort by'
                    style={{minWidth: 120, }}>
                    <InputLabel>Sort By</InputLabel>
                    <Select
                        name='sort' 
                        role='select control'
                        value={props.queryParams.sort || ''}
                        onChange={e => props.updateCriteria('sort', e.target.value)}>
                        <MenuItem value=''>Best Match</MenuItem>
                        <MenuItem value='stars'>Stars</MenuItem>
                    </Select>
                </FormControl>
                <div className='control'>
                    <Button
                        aria-label='search button'
                        role='button'
                        color='primary'
                        variant='contained'
                        onClick={e => props.search(e)}
                        disabled={!props.allowSearch}>
                        Search
                    </Button>
                </div>
            </div>
            {props.loading || props.results ? 
                <RepositoriesList
                    loading={props.loading}
                    results={props.results}
                    viewDetail={props.viewDetail} /> :
                null}
        </Fragment>
    );
};

export default Search;