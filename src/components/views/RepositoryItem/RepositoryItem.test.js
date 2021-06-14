import React from 'react';
import { render, fireEvent, within } from '@testing-library/react';
import RepositoryItem from './RepositoryItem';

describe('RepositoryItem', () => {
    const testProps = {
        repo: {
            full_name: 'jrhoton/hello-world',
            language: 'javascript',
            stargazers_count: 1,
        },
        onClick: jest.fn(),
    }

    it('should be defined', () => {
        const repositoryItem = render(<RepositoryItem {...testProps} />);
        expect(repositoryItem).toBeDefined();
    })

    it('should route select the repository when clicked', () => {
        const onClickMock = jest.fn();
        const repositoryItem = render(<RepositoryItem {...{...testProps, onClick: onClickMock}} />);
        const link = within(repositoryItem).getByRole('repository link');
        fireEvent.click(link);
        expect(onClickMock).toHaveBeenCalled();
    })
});