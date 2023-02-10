import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useGetMeQuery } from '../features/auth/authApi';

const PrivateRoute = ({ children }) => {
    const { data, isLoading, error } = useGetMeQuery()
    const router = useRouter()
 
    useEffect(() => {
        if (error?.status === 401 || error?.status === 403) {
            router.push('/login')
            return
        }
    }, [error, router])
    return (
        <div>
            {
                children
            }
        </div>
    );
};

export default PrivateRoute;