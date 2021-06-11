import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';

import './Details.css';

const Details = () => {
    const repo = useSelector(state => state.repo.selected);

    return (
        <Fragment>
            {!repo ? <Redirect to='/' /> :
                <div className='detailsContainer'>
                    <a href={repo.owner.html_url}>
                        <div className='header'>
                            <img 
                                className='avatar'
                                src={repo.owner.avatar_url} 
                                alt='avatar' />
                            <h2 className='name'>{repo.full_name}</h2>
                        </div>
                    </a>
                    <p className='desc'>{repo.description}</p>
                    <div className='condensed'>
                        <p>{`Language: ${repo.language}`}</p> 
                        <p>{`Stars: ${repo.stargazers_count}`}</p>
                    </div>
                    <div className='condensed'>
                        <Link to='/'>{`<< Back`}</Link>
                        <a href={repo.html_url} className='floatRight'>{`View Repository >>`}</a>
                    </div>
                </div>}
        </Fragment>
    );
};

export default Details;