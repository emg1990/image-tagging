import React from 'react';
import { render } from '@testing-library/react';
import ImageTagger from './ImageTagger';

test('renders load title', () => {
  const { getByText } = render(<ImageTagger />);
  const imgPreview = getByText(/Image Tagger/i);
  expect(imgPreview).toBeInTheDocument();
});
