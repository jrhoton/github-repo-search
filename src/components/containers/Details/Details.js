import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import * as css from './Details.css';

const Details = () => {
    const repo = useSelector(state => state.repo.selected);

    return(
        <Fragment>
            <Link to="/">Back to Search Results</Link>
            <div className={css.card}>
                <div className={css.header}>
                    {/* <img 
                        className={css.avatar}
                        src={repo.owner.avatar_url} 
                        alt="avatar" /> */}
                    <div className={css.nameBlock}>
                        <h3>{repo.full_name}</h3>
                        <h3>{repo.created_at}</h3>
                    </div>
                </div>
                <div>
                    <h2>{repo.stargazers_count}</h2>
                </div>
                <p>{repo.description}</p>
                <div className={css.footer}>
                    <div>{repo.language}</div>
                    <div>
                        <a href={repo.html_url}>View on GitHub</a>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Details;