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
    xit('user can click create post and load a create post modal/page', () => {
      fireEvent.click(screen.getByText('Create Post'))
      const diff = screen.getByLabelText('Difficulty');
      expect(diff).toBeInTheDocument();
    })
    xit('should display the top 10 posts', () => {
      const projectDisplay = screen.findAllByDisplayValue('');
      expect(projectDisplay).toBeInTheDocument();
    })
    xit('should display the number of upvotes for each post', () => {
      expect(screen.findByText('Upvotes')).toBeInTheDocument();
    })
    xit('user can click into post details page', () => {
      fireEvent.click(screen.getByText(''))
    })
    xit('updates upvote and downvote numbers when buttons are clicked', () => {
    })
    xit('user can click back to home page', () => {

    })
    xit('should display a search input box', () => {
      expect(screen.findByPlaceholderText('Search')).toBeInTheDocument();
    })
    xit('user can enter search text', () => {
      const searchInput = screen.findByPlaceholderText('Search');
      searchInput.focus();
      fireEvent.change(searchInput, { target: { value: 'Test Search' } })
      expect(searchInput.value).toBe('Test Search')
    })
    xit('should display a search button', () => {
      expect(screen.findByText('Search')).toBeInTheDocument();
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
      expect(screen.findByText('Difficulty')).toBeInTheDocument();
      expect(screen.findByText('Techs')).toBeInTheDocument();
      expect(screen.findByText('Level of Effort')).toBeInTheDocument();
    })
  })
  xdescribe('Create post tests', () => {
    xit('user can save a post and get a confirmation', () => {

    })
    xit('should have difficulty, LOE, and tech tags selectors', () => {
      expect(screen.findByLabelText('Difficulty')).toBeInTheDocument();
      expect(screen.findByLabelText('Techs')).toBeInTheDocument();
      expect(screen.findByLabelText('Level of Effort')).toBeInTheDocument();
    })
    xit('should have title and description inputs', () => {
      expect(screen.findByLabelText('Title')).toBeInTheDocument();
      expect(screen.findByLabelText('Description')).toBeInTheDocument();
    })
    xit('should allow the selection of multiple tech tags', () => {

    })
  })
  xdescribe('Post details tests', () => {
    xit('shows comments for the post', () => {

    })
    xit('shows an add comment button', () => {
      expect(screen.findByText('Add Comment')).toBeInTheDocument();
    })
    xit('user can click upvote and downvote post from within details', () => {

    })
    xit('should access post ID when upvote and downvote are clicked', () => {

    })
    xit('should show LOE, difficulty, and techs for the post', () => {
      expect(screen.findByText('Difficulty')).toBeInTheDocument();
      expect(screen.findByText('Techs')).toBeInTheDocument();
      expect(screen.findByText('Level of Effort')).toBeInTheDocument();
    })
  })
  xdescribe('Comment tests', () => {
    xit('should display an input for the comment body', () => {
      expect(screen.findByLabelText('Comment')).toBeInTheDocument();
    })
    xit('should clear out the input box after comment saves', () => {

    })
    xit('should rerender and display the new comment after saving', () => {

    })
  })
  xdescribe('button tests', () => {
    const Button = ({ onClick, children }) => (
      <button onClick={onClick}>{children}</button>
    )

    xit('calls onClick prop when clicked', () => {
      const handleClick = jest.fn()
      render(<Button onClick={handleClick}>Click Me</Button>)
      fireEvent.click(screen.getByText(/click me/i))
      expect(handleClick).toHaveBeenCalledTimes(1)
    })
    xit('user can click on upvote and downvote buttons', () => {

    })
    xit('user can click search button', () => {

    })
    xit('user can click add comment button and receive a response', () => {

    })
  })
})