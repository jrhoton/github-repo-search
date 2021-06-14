import React from 'react';
import { Link } from 'react-router-dom';
import './RepositoryItem.css';

const RepositoryItem = (props) => {
    return (
        <Link
            role='result link'
            aria-label='repository item'
            className='row'
            to="/details"
            onClick={() => props.onClick(props.repo.id)}>
            <div className='nameColumn'>{props.repo.name}</div>
            <div className='column'>{props.repo.language}</div>
            <div className='column alignRight'>{props.repo.stargazers_count}</div>
        </Link>
    );
};

export default RepositoryItem;