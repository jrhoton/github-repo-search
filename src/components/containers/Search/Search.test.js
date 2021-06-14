import React from 'react';
import { render } from '@testing-library/react';
import ReduxProvider from '../../../test-utils/RenderWithStore';
// import renderWithStore from '../../../test-utils/RenderWithStore';

import Search from './Search';

describe('SearchContainer', () => {
    // const testState = {
    //     items: ['testItem1', 'testItem2'],
    //     selected: null,
    //     loading: false
    // }

    it('should be defined', () => {
        // const searchContainer = renderWithStore(<Search />, { initialState: testState });
        const searchContainer = render(ReduxProvider(<Search />));
        expect(searchContainer).toBeDefined();
    });

    // it('should render SearchView', () => {
    //     const searchContainer = renderWithStore(<Search />, { initialState: testState });
    //     expect(searchContainer.container.firstChild.firstChild).toHaveClass('searchContainer');
    // });
});