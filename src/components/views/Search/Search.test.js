import React from 'react';
import { screen, render, fireEvent, within } from '@testing-library/react';
import Search from './Search';
import userEvent from '@testing-library/user-event';

describe('SearchView', () => {
    const testProps = {
        queryParams: '',
        updateCriteria: jest.fn(),
        allowSearch: false,
        search: jest.fn(),
        loading: false,
        results: null,
        viewDetail: jest.fn(),
    };

    it('should be defined', () => {
        const searchView = render(<Search {...testProps} />);
        expect(searchView).toBeDefined();
    });
    
    it('should disable the search button if allowSearch is false', () => {
        render(<Search {...{...testProps, allowSearch: false}} />);
        expect(screen.getByLabelText('search button')).toBeDisabled();
    });
    
    it('should enable the search button if allowSearch is true', () => {
        const searchView = render(<Search {...{...testProps, allowSearch: true}} />);
        expect(searchView.getByLabelText('search button')).toBeEnabled();
    });
    
    it('should render RepositoriesList if loading is true', () => {
        const searchView = render(<Search {...{...testProps, loading: true}} />);
        expect(searchView.getByLabelText('results list')).toBeInTheDocument();
    });

    it('should render RepositoriesList if results array is not empty', () => {
        render(<Search {...{...testProps, results: []}} />);
        expect(screen.getByLabelText('results list')).toBeInTheDocument();
    });

    it('should not render RepositoriesList if not loading and results array is empty', () => {
        render(<Search {...{...testProps, loading: false, results: null}} />);
        expect(screen.queryByLabelText('results list')).toBeFalsy();
    });

    it('should search when the search button is clicked', () => {
        const searchMock = jest.fn();
        render(<Search {...{...testProps, allowSearch: true, search: searchMock}} />);
        const searchButton = screen.getByLabelText('search button');
        fireEvent.click(searchButton);
        expect(searchMock).toHaveBeenCalled();
    });
});