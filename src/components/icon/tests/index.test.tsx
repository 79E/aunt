import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Icon } from '../icon';

describe('<Icon />', () => {
  it('render Icon with Anut', () => {
    const msg = 'Anut';

    render(<Icon>{msg}</Icon>);
    expect(screen.queryByText(msg)).toBeInTheDocument();
  });
});
