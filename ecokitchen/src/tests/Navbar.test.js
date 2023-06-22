import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Navbar from '../components/Navbar';

test('renders the AddItemButton component', () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );
        
    const navbar = screen.getByTestId('navbar'); // not working, added  data-testid to Navbar.js in the main div 

    expect(navbar).toBeInTheDocument();
    expect(navbar).toHaveTextContent('Home' && 'Recipes' && 'Food' && 'Shopping' && 'Breakdown' );
   
  });

  test('Navbar renders correctly', () => {
    render(<Navbar />);
  });