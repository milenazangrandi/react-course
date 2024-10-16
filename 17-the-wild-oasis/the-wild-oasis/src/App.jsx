import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'react-hot-toast';

import Dashboard from './pages/Dashboard';
import Account from './pages/Account';
import Bookings from './pages/Bookings';
import Settings from './pages/Settings';
import Cabins from './pages/Cabins';
import Users from './pages/Users';
import Login from './pages/Login';
import PageNotFound from './pages/PageNotFound';
import GlobalStyles from './styles/GlobalStyle';
import AppLayout from './ui/AppLayout';
import Booking from './pages/Booking';
import Checkin from './pages/Checkin';
import ProtectedRoute from './ui/ProtectedRoute';
import { DarkModeProvider } from './context/DarkModeContext';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 0,
        },
    },
});

export default function App() {
    return (
        <DarkModeProvider>
            <QueryClientProvider client={queryClient}>
                <ReactQueryDevtools initialIsOpen={false} />
                <GlobalStyles />
                <BrowserRouter>
                    <Routes>
                        <Route
                            element={
                                <ProtectedRoute>
                                    <AppLayout />
                                </ProtectedRoute>
                            }
                        >
                            <Route index element={<Navigate replace to="dashboard"></Navigate>}></Route>
                            <Route path="dashboard" element={<Dashboard />}></Route>
                            <Route path="account" element={<Account />}></Route>
                            <Route path="bookings" element={<Bookings />}></Route>
                            <Route path="settings" element={<Settings />}></Route>
                            <Route path="cabins" element={<Cabins />}></Route>
                            <Route path="users" element={<Users />}></Route>
                            <Route path="bookings/:bookingId" element={<Booking />} />
                            <Route path="checkin/:bookingId" element={<Checkin />} />
                        </Route>
                        <Route path="login" element={<Login />}></Route>
                        <Route path="*" element={<PageNotFound />}></Route>
                    </Routes>
                </BrowserRouter>
                <Toaster
                    position={'top-center'}
                    gutter={12}
                    toastOptions={{
                        className: '',
                        style: {
                            background: '#363636',
                            color: '#fff',
                        },
                        success: {
                            duration: 3000,
                        },
                        error: {
                            duration: 5000,
                        },
                    }}
                />
            </QueryClientProvider>
        </DarkModeProvider>
    );
}
