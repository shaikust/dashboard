// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const AdminLoginElement = screen.getByTestId('admin-login');
//   expect(AdminLoginElement).toBeInTheDocument();
//   const DashboardElement=screen.getByTestId('dashboard');
//   expect(DashboardElement).toBeInTheDocument();
// });
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import AdminLogin from './pages/Admin/AdminLogin';
import SupplierDashBoard from './pages/Supplier/DashBoard';


test('renders AdminLogin component at the root path', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <Routes>
        <Route path="/" element={<AdminLogin />} />
      </Routes>
    </MemoryRouter>
  );

  const adminLoginElement = screen.getByTestId('admin-login');
  expect(adminLoginElement).toBeInTheDocument();
});

test('renders SupplierDashBoard component at /supplierdashboard path', () => {
  render(
    <MemoryRouter initialEntries={['/supplierdashboard']}>
      <Routes>
        <Route path="/supplierdashboard" element={<SupplierDashBoard />} />
      </Routes>
    </MemoryRouter>
  );

  const dashboardElement = screen.getByTestId('dashboard');
  expect(dashboardElement).toBeInTheDocument();
});

