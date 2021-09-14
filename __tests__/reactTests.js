/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import { expect } from '@jest/globals';
import App from '../client/App';
import AddProjectCard from '../client/containers/bottom/addProjectCard';
import { before } from 'lodash';


describe('React unit tests', () => {

  describe('Homepage tests', () => {
    beforeEach(() => {
      render(<App />);
    })
    it('should display a Create Project button', () => {
      const createButton = screen.getByText('Create Project');
      expect(createButton).toBeInTheDocument();
    })
    xit('user can click create post and load a create post modal/page', () => {
      fireEvent.click(screen.getByText('Create Post'))
      const diff = screen.getByLabelText('Difficulty');
      expect(diff).toBeInTheDocument();
    })
    xit('should display the top 10 posts', () => {
      const projectDisplay = screen.getAllByDisplayValue('');
      expect(projectDisplay).toBeInTheDocument();
    })
    xit('should display the number of upvotes for each post', () => {
      expect(screen.getByText('Upvotes')).toBeInTheDocument();
    })
    xit('user can click into post details page', () => {
      fireEvent.click(screen.getByText(''))
    })
    xit('updates upvote and downvote numbers when buttons are clicked', () => {
    })
    xit('user can click back to home page', () => {

    })
    it('should display a search input box', () => {
      expect(screen.getByPlaceholderText('search')).toBeInTheDocument();
    })
    it('user can enter search text', () => {
      const searchInput = screen.getByPlaceholderText('search');
      searchInput.focus();
      fireEvent.change(searchInput, { target: { value: 'Test Search' } })
      expect(searchInput.value).toBe('Test Search')
    })
    it('should display a search button', () => {
      expect(screen.getByText('Search')).toBeInTheDocument();
    })
    xit('clicking on search button should filter posts', () => {

    })
    it('user can filter by difficulty', () => {
      expect(screen.getByText('Difficulty')).toBeInTheDocument();
    })
    it('user can filter by LOE', () => {
      expect(screen.getByText('Effort Level')).toBeInTheDocument();
    })
    it('user can filter by tech', () => {
      expect(screen.getByText('Tech')).toBeInTheDocument();

    })
    xit('shows the LOE, difficulty, and techs for each post', () => {
      expect(screen.getByText('Difficulty')).toBeInTheDocument();
      expect(screen.getByText('Techs')).toBeInTheDocument();
      expect(screen.getByText('Level of Effort')).toBeInTheDocument();
    })
  })
  describe('Create post tests', () => {
    beforeEach(() => {
      render(<AddProjectCard />)
    })
    xit('user can save a post and get a confirmation', () => {

    })
    it('should have difficulty, LOE, and tech tags selectors', () => {
      expect(screen.getByLabelText('Difficulty:')).toBeInTheDocument();
      expect(screen.getByLabelText('Techs:')).toBeInTheDocument();
      expect(screen.getByLabelText('Level of effort:')).toBeInTheDocument();
    })
    it('should have title and description inputs', () => {
      expect(screen.getByPlaceholderText('Title')).toBeInTheDocument();
      expect(screen.getByPlaceholderText('Description')).toBeInTheDocument();
    })
    xit('should allow the selection of multiple tech tags', () => {

    })
  })
  xdescribe('Post details tests', () => {
    xit('shows comments for the post', () => {

    })
    xit('shows an add comment button', () => {
      expect(screen.getByText('Add Comment')).toBeInTheDocument();
    })
    xit('user can click upvote and downvote post from within details', () => {

    })
    xit('should access post ID when upvote and downvote are clicked', () => {

    })
    xit('should show LOE, difficulty, and techs for the post', () => {
      expect(screen.getByText('Difficulty')).toBeInTheDocument();
      expect(screen.getByText('Techs')).toBeInTheDocument();
      expect(screen.getByText('Level of Effort')).toBeInTheDocument();
    })
  })
  xdescribe('Comment tests', () => {
    xit('should display an input for the comment body', () => {
      expect(screen.getByLabelText('Comment')).toBeInTheDocument();
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