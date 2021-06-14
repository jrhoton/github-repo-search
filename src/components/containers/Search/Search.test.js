import React from 'react';
import { screen } from '@testing-library/react';
// import RenderWithStore from '../../../test-utils/RenderWithStore';
import RenderWithStore from '../../../test-utils/RenderWithStore';
import RenderWithBrowserRouter from '../../../test-utils/RenderWithBrowserRouter';

import Search from './Search';

describe('SearchContainer', () => {
    // const testState = {
    //     items: ['testItem1', 'testItem2'],
    //     selected: null,
    //     loading: false
    // }

    it('should be defined', () => {
        const searchContainer = RenderWithStore(RenderWithBrowserRouter(<Search />));
        expect(searchContainer).toBeDefined();
    });

    it('should render SearchView', () => {
        RenderWithStore(RenderWithBrowserRouter(<Search />));
        expect(screen.getByLabelText('search controls')).toBeDefined();
    });
});