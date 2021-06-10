import React from 'react';
import { Link } from 'react-router-dom';
import * as css from './RepositoryItem.css';

const RepositoryItem = (props) => {
    return (
        <Link
            className={css.row}
            to="/details"
            onClick={() => props.onClick(props.repo.id)}>
            <div>{props.repo.name}</div>
            <div>{props.repo.description}</div>
            <div>{props.repo.language}</div>
        </Link>
    );
};

export default RepositoryItem;