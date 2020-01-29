import React from 'react';
import { render } from '@testing-library/react';
import { getTags, getImage, getImages, tagImage, untagImage } from './api';

test('renders tags', () => {
  getTags((data) => {
    expect(data.length).toBeGreaterThan(0);
  }, console.log);
});

test('renders images', () => {
  getImages((data) => {
    expect(data.length).toBeGreaterThan(0);
  }, console.log);
});

test('renders image', () => {
  getImage((data) => {
    expect(data.length).toEqual(1);
  }, console.log);
});

test('tag image', () => {
  tagImage(1000, 1, (data) => {
    expect(data).toEqual({});
  }, console.log);
});

test('untag image', () => {
  getTags(1000, 1, (data) => {
    expect(data).toEqual({});
  }, console.log);
});
