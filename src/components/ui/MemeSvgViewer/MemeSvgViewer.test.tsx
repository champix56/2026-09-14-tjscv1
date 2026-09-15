import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import MemeSvgViewer from './MemeSvgViewer';

describe('<MemeSvgViewer />', () => {
  test('should mount', () => {
    render(<MemeSvgViewer />);

    const memeSvgViewer = screen.getByTestId('MemeSvgViewer');

    expect(memeSvgViewer).toBeInTheDocument();
  });
});
