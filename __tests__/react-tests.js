import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import { expect } from '@jest/globals';


describe('React unit tests', () => {
  describe('Homepage tests', () => {
    beforeEach(() => {
      render(<App />);
    })
    it('should display a Create Post button', () => {
      const createButton = screen.getByText(/create post/i);
      expect(createButton).toBeInTheDocument();
    })

  })
  describe('Create post tests', () => {

  })
  describe('Post details tests', () => {

  })
  describe('Comment tests', () => {

  })
})