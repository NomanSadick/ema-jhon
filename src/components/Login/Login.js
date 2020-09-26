import React from 'react';
import Auth from './use-auth';


const Login = () => {
    const auth = Auth();
    return (
        <div>
            <h1>Join the Party !!!</h1>
            {
                auth.user ? <button onClick={auth.signOut}>Sign Out</button> :
                <button onClick={auth.signInWithGoogle}>Sign in with google</button>
            }
        </div>
    );
};

export default Login;
