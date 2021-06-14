import React from 'react';
import RenderWithProvider from '../../../test-utils/RenderWithProvider';

import Search from './Search';

describe('SearchContainer', () => {
    it('should be defined', () => {
        const searchContainer = RenderWithProvider(<Search />);
        expect(searchContainer).toBeDefined();
    });
});