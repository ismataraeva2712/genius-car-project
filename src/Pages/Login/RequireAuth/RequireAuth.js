import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../Loading/Loading';
const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    let location = useLocation();
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);
    if (loading) {
        return <Loading></Loading>
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    if (user.providerData[0]?.providerId === 'password' && !user.emailVerified) {
        return <div>
            <p className='text-danger fs-2 text-center'>email is not verified</p>
            <div className='  text-center'>
                <button
                    onClick={async () => {
                        await sendEmailVerification();
                        toast('Sent email');
                    }}
                >
                    Verify email
                </button>
                <ToastContainer />
            </div>
        </div>
    }
    return children;
};

export default RequireAuth;