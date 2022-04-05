import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FexHLayout from './FexHLayout';

describe('<FexHLayout />', () => {
  test('it should mount', () => {
    render(<FexHLayout />);
    
    const fexHLayout = screen.getByTestId('FexHLayout');

    expect(fexHLayout).toBeInTheDocument();
  });
});