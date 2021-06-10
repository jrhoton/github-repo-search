import { createSlice } from '@reduxjs/toolkit';

const initialQueryState = {
    // queryParams: "",
    queryString: '',
    sortBy: '',
    // filter by language?
};

export const querySlice = createSlice({
    name: 'query',
    initialState: initialQueryState,
    reducers: {
        updateQueryString(state, action) {
            // regex match replace all non words with spaces?
            state.queryString = action.payload;
        },
        sortResults(state, action) {
            state.sortBy = action.payload;
        },
    },
});

export const { updateQueryString, sortResults } = querySlice.actions;

export default querySlice.reducer;