import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import AddItemButton from '../components/AddItemButton';

test('renders the AddItemButton component', () => {
    render(
      <Router>
        <AddItemButton />
      </Router>
    );
  
    const addButton = screen.getByRole('button');
    expect(addButton).toBeInTheDocument();
    expect(addButton).toHaveTextContent('+');
    // test passed
  });
  