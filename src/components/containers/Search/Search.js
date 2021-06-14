import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRepos, selectRepo } from '../../../store/repoSlice';
import { default as SearchView } from '../../views/Search/Search';

/**
 * Search Container
 * 
 * This is the base component for the '/' route. It contains the methods used by the Search View to query the 
 * GitHub Repository Search API (https://docs.github.com/en/rest/reference/search).
 */
const Search = () => {
    const results = useSelector(state => state.repo.items);
    const loading = useSelector(state => state.repo.loading);

    // queryParams contains a key (a specific search control) and its value.
    const [queryParams, setQueryParams] = useState({});
    // allowSearch determines whether the search button is enabled.
    const [allowSearch, setAllowSearch] = useState(false);

    const dispatch = useDispatch();

    // update queryParams whenever the value in any of the search controls is changed.
    const updateCriteria = (key, value) => {
        const criteria = {...queryParams, [key]: value};
        criteria ? setAllowSearch(true) : setAllowSearch(false);
        setQueryParams(criteria);
    }

    // Build a query string from the queryParams object and dispatch the fetchRepos action.
    const handleSearch = (e) => {
        e.preventDefault();
        let query = '';
        Object.entries(queryParams).forEach(([key, value]) => {
            if (value) {
                if (query) {query = query.concat(' ')}
                if (key === 'keyword') {
                    query = query.concat(value);
                } else {
                    query = query.concat(key, ':"', value, '"');
                }
            }
        });
        dispatch(fetchRepos(query));
    }

    // Store the repository that matched the passed id.
    const selectRepository = (id) => {
        dispatch(selectRepo(id));
    };
    
    return (
        <SearchView 
            queryParams={queryParams}
            updateCriteria={updateCriteria}
            allowSearch={allowSearch}
            search={handleSearch}
            loading={loading}
            results={results}
            viewDetail={selectRepository} />
    );  
};

export default Search;