import { configureStore } from '@reduxjs/toolkit';
import queryReducer from './querySlice';
import repoReducer from './repoSlice';

export default configureStore({
    reducer: {
        query: queryReducer,
        repo: repoReducer,
    },
});