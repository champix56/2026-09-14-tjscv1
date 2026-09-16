import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import MemeForm from './MemeForm';
import { emptyMeme } from 'orsys-tjs-meme';

describe('<MemeForm />', () => {
  test('should mount', () => {
    render(<MemeForm images={[]} meme={emptyMeme} onMemeChange={()=>{}} onMemeSubmit={()=>{}}/>);

    const memeForm = screen.getByTestId('MemeForm');

    expect(memeForm).toBeInTheDocument();
  });
});
