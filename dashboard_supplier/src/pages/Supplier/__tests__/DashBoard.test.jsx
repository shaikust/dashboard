import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SupplierDashBoard from '../DashBoard';
import { MemoryRouter } from 'react-router-dom';


describe('SupplierDashBoard Component', () => {
  
  test('renders SupplierDashBoard with Navbar, Sidebar, and Content', () => {
    render(
      <MemoryRouter>
        <SupplierDashBoard />
      </MemoryRouter>
    );
    
    expect(screen.getByTestId('dashboard')).toBeInTheDocument();
   
    expect(screen.getByText('SUSTAINABILITY PROGRAM')).toBeInTheDocument(); 
    expect(screen.getByText('Dashboard')).toBeInTheDocument();
    expect(screen.getByText('Reporting')).toBeInTheDocument();
    expect(screen.getByText('Goals')).toBeInTheDocument();
    expect(screen.getByText('KPI Tracker')).toBeInTheDocument();
    expect(screen.getByText('Carbon Emission')).toBeInTheDocument();
    expect(screen.getByText('Recycle Packaging')).toBeInTheDocument();
    expect(screen.getByText('Carbon Reported')).toBeInTheDocument();
  });
  
  test('renders download button with correct text', () => {
    render(
      <MemoryRouter>
        <SupplierDashBoard />
      </MemoryRouter>
    );
    
    const downloadButton = screen.getByText('Excel Download');
    expect(downloadButton).toBeInTheDocument();
  });
  
  test('handles download button click', () => {
    render(
      <MemoryRouter>
        <SupplierDashBoard />
      </MemoryRouter>
    );
    const downloadButton = screen.getByText('Excel Download');
    fireEvent.click(downloadButton);
    
  });
  
  test('renders details buttons inside cards', () => {
    render(
      <MemoryRouter>
        <SupplierDashBoard />
      </MemoryRouter>
    );
    
    const detailButtons = screen.getAllByText('Details');
    expect(detailButtons).toHaveLength(3); 
  });
  
  test('handles details button click', () => {
    render(
      <MemoryRouter>
        <SupplierDashBoard />
      </MemoryRouter>
    );
    const detailButtons = screen.getAllByText('Details');
    fireEvent.click(detailButtons[0]);
    
  });
});

