import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import fetchMock from 'jest-fetch-mock';
import AdminLogin from '../AdminLogin';

fetchMock.enableMocks();

describe('AdminLogin Component',()=>{
    beforeEach(()=>{
        fetchMock.resetMocks();
    });

    test('renders login form with username and password fields', () => {
        render(<AdminLogin />);
        expect(screen.getByPlaceholderText('Admin')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('*****')).toBeInTheDocument();
        expect(screen.getByText('Login')).toBeInTheDocument();
      });

    test('updates input value on change',()=>{
        render(<AdminLogin/>);
        const userNameInput=screen.getByPlaceholderText('Admin');
        const passwordInput=screen.getByPlaceholderText('*****');
        fireEvent.change(userNameInput,{target:{value:'adminuser'}});
        fireEvent.change(passwordInput,{target:{value:'adminpassword'}});
        expect(userNameInput.value).toBe('adminuser');
        expect(passwordInput.value).toBe('adminpassword');

    });
    test('display error message on login failure', async()=>{
        fetchMock.mockResponse(JSON.stringify({}),{status:400});
        render(<AdminLogin/>);
        fireEvent.change(screen.getByPlaceholderText('Admin'),{target:{value:'adminuser'}});
        fireEvent.change(screen.getByPlaceholderText('*****'),{target:{value:'adminpassword'}});
        fireEvent.click(screen.getByText('Login'));
        await waitFor(()=>{
            expect(screen.getByText('Invalid email or password')).toBeInTheDocument();

        });

    });
    test('successful login and token is stored in localstorage', async()=>{
        const sampleToken='sampleToken';
        fetchMock.mockResponse(JSON.stringify({token:sampleToken}),{status:200});
        render(<AdminLogin/>);
        fireEvent.change(screen.getByPlaceholderText('Admin'),{target:{value:'adminuser'}});
        fireEvent.change(screen.getByPlaceholderText('*****'),{target:{value:'adminpassword'}});
        fireEvent.click(screen.getByText('Login'));
        await waitFor(()=>{
            expect(localStorage.getItem('token')).toBe(sampleToken);
        });

    });
});