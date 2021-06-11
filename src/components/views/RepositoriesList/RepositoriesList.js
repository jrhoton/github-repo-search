import React from 'react';
import RepositoryItem from '../RepositoryItem/RepositoryItem';
import './RepositoriesList.css';

const RepositoriesList = (props) => {
    let list = null
    if (props.results) {
        list = props.results.map(repo => <RepositoryItem key={repo.id} repo={repo} onClick={() => props.viewDetail(repo.id)} />);
    }

    return(
        <div className='resultsContainer'>
            <div className='columnHeadings'>
                <div className='nameColumn'>Repository Name</div>
                <div className='column'>Language</div>
                <div className='column alignRight'>Stars</div>
            </div>
            {list}
        </div>
    );
};

export default RepositoriesList;