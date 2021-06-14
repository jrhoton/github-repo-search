import React from 'react';
import { screen, render } from '@testing-library/react';
import { unselectedRepoProvider, selectedRepoProvider } from '../../../test-utils/storeProviders';
import Details from './Details';

describe('Details', () => {
    it('should be defined', () => {
        const details = render(<Details />, {wrapper: selectedRepoProvider});
        expect(details).toBeDefined();
    });

    it('redirects without a selected repo', () => {
        render(<Details />, { wrapper: unselectedRepoProvider });
        const redirectSpy = jest.spyOn(React, 'Redirect');
        expect(redirectSpy).toHaveBeenCalled();
    });

    it('displays the selected repo', () => {
        render(<Details />, { wrapper: selectedRepoProvider });
        expect(screen.getByDisplayValue('Hello World')).toBeInTheDocument();
    });
});