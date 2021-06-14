import React from 'react'
import { configureStore } from '@reduxjs/toolkit'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import repoReducer from '../store/repoSlice';

const testUnselectedState = {
    selected: null,
};

const testSelectedState = {
    selected: {}
};

export const makeStore = (testState) => {
    return configureStore({ reducer: repoReducer, preloadedState: testState});    
};

export const unselectedRepoProvider = (Component, props = {}) => {
    return (
        <Provider store={makeStore({ selected: null })}>
            <BrowserRouter>
                <Component {...props} />
            </BrowserRouter>
        </Provider>
    );
};

export const selectedRepoProvider = (Component, props = {}) => {
    return (
        <Provider store={makeStore({ selected: {} })}>
            <BrowserRouter>
                <Component {...props} />
            </BrowserRouter>
        </Provider>
    );
};