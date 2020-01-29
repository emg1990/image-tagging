import React from 'react';
import { render } from '@testing-library/react';
import ImageSlider from './ImageSlider';

test('renders image preview', () => {
  const { getByAltText } = render(<ImageSlider />);
  const imgPreview = getByAltText(/image preview/i);
  expect(imgPreview).toBeInTheDocument();
});
