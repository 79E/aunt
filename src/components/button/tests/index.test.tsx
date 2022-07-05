import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Button } from '../button';

describe('<Button />', () => {
  it('render Button with Anut', () => {
    const msg = 'Anut';

    render(<Button>{msg}</Button>);
    expect(screen.queryByText(msg)).toBeInTheDocument();
  });
});
