import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialRepoState = {
    items: null,
    selected: null,
    loading: false,
    error: null
};

export const fetchRepos = createAsyncThunk(
    'repo/fetchRepos',
    async (queryString) => {
        return await axios.get('https://api.github.com/search/repositories', {
            params: {q: queryString}
        });
    }
);

export const repoSlice = createSlice({
    name: 'repositories',
    initialState: initialRepoState,
    reducers: {
        selectRepo(state, action) {
            state.selected = state.items.find(repo => repo.id === action.payload);
        },
    },
    extraReducers: {
        [fetchRepos.pending]: (state) => {
            state.items = [];
            state.loading = true;
            state.error = null;
        },
        [fetchRepos.fulfilled]: (state, action) => {
            state.items = [...action.payload.data.items];
            state.loading = false;
        },
        [fetchRepos.rejected]: (state, action) => {
            state.items = [];
            state.loading = false;
            state.error = action.error;
        },
    },
});

export const { selectRepo } = repoSlice.actions;

export default repoSlice.reducer;