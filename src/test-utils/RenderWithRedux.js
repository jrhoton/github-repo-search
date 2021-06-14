import React from 'react';
import { render } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import RepoReducer from '../store/repoSlice';

const RenderWithRedux = (
    ui,
    {
        initialState,
        store = configureStore({
            reducer: RepoReducer,
            preloadedState: initialState,
        }),
        ...renderOptions
    } = {}
) => {
    const Wrapper = ({ children }) => {
        return <Provider store={store}>{children}</Provider>;
    };
    return render(ui, { wrapper: Wrapper, ...renderOptions });
};

export default RenderWithRedux;