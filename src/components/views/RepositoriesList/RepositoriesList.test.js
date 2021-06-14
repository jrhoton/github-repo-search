import React from 'react';
import { screen, render } from '@testing-library/react';
import RepositoriesList from './RepositoriesList';

describe('RepositoriesList', () => {
    const testProps = {
        loading: false,
        results: [],
        viewDetail: jest.fn(),
    };

    it('should be defined', () => {
        const repositoriesList = render(<RepositoriesList {...testProps} />);
        expect(repositoriesList).tobeDefined();
    });

    it('should not render progress indicator when loading is false', () => {
        render(<RepositoriesList {...testProps} />);
        expect(screen.getByLabelText('loading results')).not.toBeInTheDocument();
    })

    it('should render progress indicator when loading is true', () => {
        render(<RepositoriesList {...{...testProps, loading: true}} />);
        expect(screen.getByLabelText('loading results')).toBeInTheDocument();
    });


});