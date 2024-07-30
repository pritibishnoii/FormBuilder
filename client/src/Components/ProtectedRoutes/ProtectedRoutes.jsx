import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


const ProtectedRoute = ({ children }) => {
    const { isUserLogedIn } = useSelector((state) => state.user);

    if (!isUserLogedIn) {
        return <Navigate to="/signin" />
               
    }


    return children;
};

export default ProtectedRoute;
