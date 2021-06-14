import React from 'react';
import { Link } from 'react-router-dom';
import './RepositoryItem.css';

/**
 * RepositoryItem View
 * 
 * Each result consists of a Link element which contains the repository name, language, and stargazers. The full repository
 * object is selected when clicked.
 * @props repo, selectRepo()
 */
const RepositoryItem = (props) => {
    return (
        <Link
            role='result link'
            aria-label='repository item'
            className='row'
            to="/details"
            onClick={() => props.selectRepo(props.repo.id)}>
            <div className='nameColumn'>{props.repo.name}</div>
            <div className='column'>{props.repo.language}</div>
            <div className='column alignRight'>{props.repo.stargazers_count}</div>
        </Link>
    );
};

export default RepositoryItem;