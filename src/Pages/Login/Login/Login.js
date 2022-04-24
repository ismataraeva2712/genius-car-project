import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword, useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Social from '../Social/Social';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../Loading/Loading';
import { Helmet } from 'react-helmet-async';
import PageTitle from '../../Shared/PageTitle/PageTitle';

const Login = () => {

    const emailRef = useRef('')
    const passwordRef = useRef('')
    const navigate = useNavigate()
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending,] = useSendPasswordResetEmail(
        auth
    );
    // =============================
    if (loading || sending) {
        return <Loading></Loading>
    }
    //  ============================================================
    const handleSubmit = event => {
        event.preventDefault()
        const email = emailRef.current.value
        const password = passwordRef.current.value
        signInWithEmailAndPassword(email, password)
    }
    if (user) {
        navigate(from, { replace: true });
    }
    const handleNavigate = event => {
        navigate('/signUp')
    }
    const handleResetPass = async () => {
        const email = emailRef.current.value
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else {
            toast('please enter your email');
        }
    }
    let errorText;
    if (error) {
        errorText = <div>
            <p className='text-danger'>Error: {error?.message}</p>
        </div>
    }
    return (
        <div className='container mt-5'>
            <PageTitle title='Login'></PageTitle>
            <h2 className='text-center text-primary '>Login</h2>
            <Form onSubmit={handleSubmit} className='w-50 mx-auto'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>

                <p>{error}</p>
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            <p className='w-50 mx-auto mt-3'>new in genius car ? <span className='text-danger' onClick={handleNavigate}>please register</span></p>
            <p className='w-50 mx-auto mt-3'>Forget your password ? <span className='text-danger' onClick={handleResetPass}>reset password</span></p>
            <ToastContainer />
            <Social></Social>
        </div>

    );
};

export default Login;