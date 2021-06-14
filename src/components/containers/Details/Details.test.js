import React from 'react';
import RenderWithProvider from '../../../test-utils/RenderWithProvider';
import RenderWithRouter from '../../../test-utils/RenderWithRouter';
import Details from './Details';

describe('Details', () => {
    it('should be defined', () => {
        const details = RenderWithProvider(RenderWithRouter(<Details />));
        expect(details).toBeDefined();
    });
});