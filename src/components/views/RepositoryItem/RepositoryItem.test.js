import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import RenderWithRouter from '../../../test-utils/RenderWithRouter';
import RepositoryItem from './RepositoryItem';

describe('RepositoryItem', () => {
    const testProps = {
        repo: {
            full_name: 'jrhoton/hello-world',
            language: 'javascript',
            stargazers_count: 1,
        },
        onClick: jest.fn(),
    };

    it('should be defined', () => {
        const repositoryItem = render(RenderWithRouter(<RepositoryItem {...testProps} />));
        expect(repositoryItem).toBeDefined();
    });

    it('should select the repository when clicked', () => {
        const onClickMock = jest.fn();
        const repositoryItem = render(RenderWithRouter(<RepositoryItem {...{...testProps, onClick: onClickMock}} />));
        const link = repositoryItem.getByLabelText('repository item');
        fireEvent.click(link);
        expect(onClickMock).toHaveBeenCalled();
    });
});