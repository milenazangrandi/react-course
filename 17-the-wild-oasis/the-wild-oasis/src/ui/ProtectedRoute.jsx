import PropTypes from 'prop-types';

import styled from 'styled-components';
import Spinner from './Spinner';

import { useUser } from '../features/authentication/useUser';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

ProtectedRoute.propTypes = {
    children: PropTypes.node,
};

const FullPage = styled.div`
    height: 100vh;
    background-color: var(--color-grey-50);
    display: flex;
    align-items: center;
    align-content: center;
`;

export default function ProtectedRoute({ children }) {
    const navigate = useNavigate();

    //1. Load the authenticated user
    const { user, isLoading, isAuthenticated } = useUser();
    console.log(user, isAuthenticated);

    //2. If there is no authenticated user, redirect to the /login

    useEffect(
        function () {
            if (!isAuthenticated && !isLoading) navigate('/login');
        },
        [isAuthenticated, isLoading, navigate]
    );

    //3. While loading show a spinner
    if (isLoading)
        return (
            <FullPage>
                <Spinner />;
            </FullPage>
        );

    return children;
}
