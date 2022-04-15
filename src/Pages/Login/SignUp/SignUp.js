import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from './../../../firebase.init';
import Social from '../Social/Social';
import Loading from '../Loading/Loading';
const SignUp = () => {
    const nameRef = useRef('')
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const [agree, setAgree] = useState(false)
    const navigate = useNavigate()
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, error1] = useUpdateProfile(auth);
    // ==========================================================================
    const handleSignUp = async (event) => {
        event.preventDefault()
        const name = nameRef.current.value
        const email = emailRef.current.value
        const password = passwordRef.current.value


        await createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName: name });
        console.log('Updated profile')
        navigate('/home')

    }
    if (user) {
        console.log(user)
    }
    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div className='container mt-5'>
                <h2 className='text-center text-primary '>Sign up</h2>
                <Form onSubmit={handleSignUp} className='w-50 mx-auto'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control ref={nameRef} type="text" placeholder="Name" required />

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check onClick={() => setAgree(!agree)} type="checkbox" label="Accept genius Car terms and conditions" className={agree ? 'text-primary' : 'text-danger'} />
                    </Form.Group>
                    <Button disabled={!agree} variant="primary" type="submit">
                        Sign Up
                    </Button>
                </Form>
                <p className='text-center'>Allready have an account ? <span className='text-danger'>
                    <Link to='/login'>Login</Link>
                </span></p>
            </div>
            <Social></Social>
        </div>
    );
};

export default SignUp;