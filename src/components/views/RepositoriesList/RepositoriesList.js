import React from 'react';
import { CircularProgress } from '@material-ui/core';
import RepositoryItem from '../RepositoryItem/RepositoryItem';
import './RepositoriesList.css';

const RepositoriesList = (props) => {
    let list = null
    if (props.results) {
        list = props.results.map(repo => <RepositoryItem key={repo.id} repo={repo} onClick={() => props.viewDetail(repo.id)} />);
    }

    return(
        <div 
            className='resultsContainer'
            aria-label='results list'>
            <div className='columnHeadings'>
                <div className='nameColumn'>Repository Name</div>
                <div className='column'>Language</div>
                <div className='column alignRight'>Stars</div>
            </div>
            {props.loading ? 
                <CircularProgress
                    aria-label='loading results'
                    style={{ marginLeft: '50%' }}
                    size={40}
                    left={-20}
                    top={30} /> :
                null}
            {list}
        </div>
    );
};

export default RepositoriesList;