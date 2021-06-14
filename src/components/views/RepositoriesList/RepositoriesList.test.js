import React from 'react';
import { render } from '@testing-library/react';
import RenderWithRouter from '../../../test-utils/RenderWithRouter';
import RepositoriesList from './RepositoriesList';

describe('RepositoriesList', () => {
    const testProps = {
        loading: false,
        results: [
            {
                id: 1,
                full_name: 'jrhoton/hello-world',
                language: 'javascript',
                stars: 1
            },
            {
                id: 2,
                full_name: 'jrhoton/github-repo-search',
                language: 'javascript',
                stars: 1
            }
        ],
        viewDetail: jest.fn(),
    };

    it('should be defined', () => {
        const repositoriesList = RenderWithRouter(<RepositoriesList {...testProps} />);
        expect(repositoriesList).toBeDefined();
    });

    it('should render results if results array is not empty', () => {
        const repositoriesList = render(RenderWithRouter(<RepositoriesList {...testProps} />));
        expect(repositoriesList.getAllByLabelText('repository item')).toHaveLength(testProps.results.length);
    });

    it('should render progress indicator when loading is true', () => {
        const repositoriesList = render(RenderWithRouter(<RepositoriesList {...{...testProps, loading: true}} />));
        expect(repositoriesList.getByLabelText('loading results')).toBeInTheDocument();
    });
});