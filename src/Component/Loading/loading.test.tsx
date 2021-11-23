import React from 'react';
import { render, screen } from '@testing-library/react';
import Loading from './index';

describe('Loading', () => {
  test('renders Loading component', () => {
    render(<Loading />);
  });
  
});

