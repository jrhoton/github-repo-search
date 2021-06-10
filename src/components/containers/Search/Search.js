import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRepos, selectRepo } from '../../../store/repoSlice';
import { default as SearchView } from '../../views/Search/Search';

const Search = () => {
    const results = useSelector(state => state.repo.items);
    const loading = useSelector(state => state.repo.loading);

    const [queryParams, setQueryParams] = useState({});
    const [allowSearch, setAllowSearch] = useState(false);

    const dispatch = useDispatch();

    const updateCriteria = (key, value) => {
        const criteria = {...queryParams, [key]: value};
        criteria ? setAllowSearch(true) : setAllowSearch(false);
        setQueryParams(criteria);
    }

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