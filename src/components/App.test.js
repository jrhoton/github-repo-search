import React from 'react';
// import renderWithStore from '../test-utils/RenderWithStore';
import { render } from '@testing-library/react';
import RenderWithStore from '../test-utils/RenderWithStore';
// import RenderWithBrowserRouter from '../test-utils/RenderWithRouter';
import App from './App';

describe('App', () => {
  // const testState = {
  //   items: ['testItem1', 'testItem2'],
  //   selected: null,
  //   loading: false
  // }

  it('should be defined', () => {
    const app = render(RenderWithStore(<App />));
    expect(app).toBeDefined();
  });
});
