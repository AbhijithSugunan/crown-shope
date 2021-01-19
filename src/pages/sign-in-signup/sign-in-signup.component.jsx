import React from 'react';
import './sign-in-signup.styles.scss'

import SignIn from '../../components/sign-in/signin.component'
import SignUp from '../../components/sign-up/sign-up.component';

const SignInSignOut = () => {
    return (
        <div className="sign-in-and-sign-up">
            <SignIn />
            <SignUp />
        </div>
    )
}

export default SignInSignOut;