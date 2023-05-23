import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {
    const {user}=useContext(AuthContext)

    return (
        <div>
            <h2>Login page {user}</h2>
        </div>
    );
};

export default Login;