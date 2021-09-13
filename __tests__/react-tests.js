import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import { expect } from '@jest/globals';


describe('React unit tests', () => {
  beforeEach(() => {
    render();
  })
  describe('Homepage tests', () => {
    xit('should display a Create Post button', () => {
      const createButton = screen.getByText('Create Post');
      expect(createButton).toBeInTheDocument();
    })
    it('user can click create post and load a create post modal/page', async () => {
      fireEvent.click(screen.getByText('Create Post'))
      const diff = await screen.getByLabelText('Difficulty');
      expect(diff).toBeInTheDocument();
    })
    xit('should display the top 10 posts', () => {
      const projectDisplay = screen.findAllByDisplayValue('');
      expect(projectDisplay).toBeInTheDocument;
    })
    xit('should display the number of upvotes for each post', () => {

    })
    xit('user can click into post details page', () => {

    })
    xit('user can click on upvote and downvote buttons', () => {

    })
    xit('updates upvote and downvote numbers when buttons are clicked', () => {

    })
    xit('should display a search input box', () => {

    })
    xit('user can enter search text', () => {

    })
    xit('should display a search button', () => {

    })
    xit('user can click search button', () => {

    })
    xit('clicking on search button should filter posts', () => {

    })
    xit('user can filter by difficulty', () => {

    })
    xit('user can filter by LOE', () => {

    })
    xit('user can filter by tech', () => {

    })
    xit('shows the LOE, difficulty, and techs for each post', () => {

    })
  })
  xdescribe('Create post tests', () => {
    xit('user can save a post and get a confirmation', () => {

    })
    xit('should have difficulty, LOE, and tech tags selectors', () => {

    })
    xit('should have title and description inputs', () => {

    })
    xit('should allow the selection of multiple tech tags', () => {

    })
  })
  xdescribe('Post details tests', () => {
    xit('shows comments for the post', () => {

    })
    xit('user can click back to home page', () => {

    })
    xit('shows an add comment button', () => {

    })
    xit('user can click upvote and downvote post from within details', () => {

    })
    xit('should access post ID when upvote and downvote are clicked', () => {

    })
    xit('should show LOE, difficulty, and techs for the post', () => {

    })
  })
  xdescribe('Comment tests', () => {
    xit('user can click add comment button and receive a response', () => {

    })
    xit('should display an input for the comment body', () => {

    })
    xit('should clear out the input box after comment saves', () => {

    })
    xit('should rerender and display the new comment after saving', () => {

    })
  })
})