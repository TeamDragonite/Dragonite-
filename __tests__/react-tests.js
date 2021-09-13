import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import { expect } from '@jest/globals';


describe('React unit tests', () => {
  beforeEach(() => {
    render(<App />);
  })
  describe('Homepage tests', () => {
    it('should display a Create Post button', () => {
      const createButton = screen.getByText(/create post/i);
      expect(createButton).toBeInTheDocument();
    })
    it('user can click create post and load a create post modal/page', () => {

    })
    it('should display the top 10 posts', () => {

    })
    it('should display the number of upvotes for each post', () => {

    })
    it('user can click into post details page', () => {

    })
    it('user can click on upvote and downvote buttons', () => {

    })
    it('updates upvote and downvote numbers when buttons are clicked', () => {

    })
    it('should display a search input box', () => {

    })
    it('user can enter search text', () => {

    })
    it('should display a search button', () => {

    })
    it('user can click search button', () => {

    })
    it('clicking on search button should filter posts', () => {

    })
    it('user can filter by difficulty', () => {

    })
    it('user can filter by LOE', () => {

    })
    it('user can filter by tech', () => {

    })
    it('shows the LOE, difficulty, and techs for each post', () => {

    })
  })
  describe('Create post tests', () => {
    it('user can save a post and get a confirmation', () => {

    })
    it('should have difficulty, LOE, and tech tags selectors', () => {

    })
    it('should have title and description inputs', () => {

    })
    it('should allow the selection of multiple tech tags', () => {

    })
  })
  describe('Post details tests', () => {
    it('shows comments for the post', () => {

    })
    it('user can click back to home page', () => {

    })
    it('shows an add comment button', () => {

    })
    it('user can click upvote and downvote post from within details', () => {

    })
    it('should access post ID when upvote and downvote are clicked', () => {

    })
    it('should show LOE, difficulty, and techs for the post', () => {

    })
  })
  describe('Comment tests', () => {
    it('user can click add comment button and receive a response', () => {

    })
    it('should display an input for the comment body', () => {

    })
    it('should clear out the input box after comment saves', () => {

    })
    it('should rerender and display the new comment after saving', () => {

    })
  })
})