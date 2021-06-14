import React from 'react';
import { screen } from '@testing-library/react';
// import RenderWithStore from '../../../test-utils/RenderWithStore';
import RenderWithStore from '../../../test-utils/RenderWithStore';

import Search from './Search';

describe('SearchContainer', () => {
    const testState = {
        items: ['testItem1', 'testItem2'],
        selected: null,
        loading: false
    }

    it('should be defined', () => {
        const searchContainer = RenderWithStore(<Search />, { initialState: testState });
        // const searchContainer = render(RenderWithStore(<Search />));
        expect(searchContainer).toBeDefined();
    });

    it('should render SearchView', () => {
        RenderWithStore(<Search />, { initialState: testState });
        expect(screen.getByLabelText('search controls')).toBeDefined();
    });
});