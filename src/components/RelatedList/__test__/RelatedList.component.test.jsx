import { render, cleanup } from '@testing-library/react';
import RelatedList from '../';
import React from 'react';

import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom';

const history = createMemoryHistory();
afterEach(cleanup);

describe('related list', () => {
  test('list renders', () => {
    const { getAllByTestId } = render(
      <Router history={history}>
        <RelatedList id={'nmXMgqjQzls'} />
      </Router>
    );
    expect(getAllByTestId('loading-related')).toBeDefined();
  });

});
