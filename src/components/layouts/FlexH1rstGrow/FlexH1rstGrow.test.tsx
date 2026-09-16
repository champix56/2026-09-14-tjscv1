import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import FlexH1RstGrow from './FlexH1rstGrow';

describe('<FlexH1RstGrow />', () => {
  test('should mount', () => {
    render(<FlexH1RstGrow >content</FlexH1RstGrow>);

    const flexH1RstGrow = screen.getByTestId('FlexH1RstGrow');

    expect(flexH1RstGrow).toBeInTheDocument();
  });
});
