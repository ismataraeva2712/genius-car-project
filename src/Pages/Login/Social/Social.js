import React from 'react';
import google from '../../../images/social/google.png'
import facebook from '../../../images/social/facebook.png'
import github from '../../../images/social/github.png'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';
const Social = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate()
    if (user || user1) {
        navigate('/home')
    }
    let errorText;
    if (error || error1) {
        errorText = <div>
            <p className='text-danger'>Error: {error?.message} {error1?.message}</p>
        </div>
    }
    if (loading || loading1) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div className='d-flex align-items-center justify-content-center'>
                <div style={{ height: '1px' }} className='bg-primary w-25'></div>
                <p className='mt-2 p-2'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-25'></div>
            </div>
            <div className='w-50 mx-auto'>
                <button onClick={() => signInWithGoogle()} className='w-100 border-0 p-2 d-block my-3' > <img style={{ width: '25px' }} src={google} alt="" /> <span className='px-2 '>Google sign in</span></button>
                {errorText}
                <button className='w-100 border-0 p-2 d-block my-3' > <img style={{ width: '25px' }} src={facebook} alt="" /> <span className='px-2 '>Facebook sign in</span></button>
                <button onClick={() => signInWithGithub()} className='w-100 border-0 p-2 d-block my-3' > <img style={{ width: '25px' }} src={github} alt="" /> <span className='px-2 '>Github sign in</span></button>
            </div>
        </div>
    );
};

export default Social;