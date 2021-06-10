import React from 'react';
import RepositoryItem from '../RepositoryItem/RepositoryItem';
import * as css from './RepositoriesList.module.css';

const RepositoriesList = (props) => {
    let list = null
    if (props.results) {
        list = props.results.map(repo => <RepositoryItem key={repo.id} repo={repo} onClick={() => props.viewDetail(repo.id)} />);
    }

    return(
        <div className={css.results}>
            {list}
        </div>
    );
};

export default RepositoriesList;