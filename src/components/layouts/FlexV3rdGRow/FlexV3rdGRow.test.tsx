import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import FlexV3rdGRow from './FlexV3rdGRow';

describe('<FlexV3rdGRow />', () => {
  test('should mount', () => {
    render(<FlexV3rdGRow >content</FlexV3rdGRow>);

    const flexV3rdGRow = screen.getByTestId('FlexV3rdGRow');

    expect(flexV3rdGRow).toBeInTheDocument();
  });
});
