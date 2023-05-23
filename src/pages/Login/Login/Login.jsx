import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Link } from 'react-router-dom';

const Login = () => {
    const { sigInUser } = useContext(AuthContext)

    const handleLogin = (event) => {

        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        sigInUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
            })
            .catch(error => {
                console.log(error);
            })

    }

    return (
        <div className=' md:flex flex-col md:justify-center md:items-center text-center w-auto mt-4'>
            <h2 className='mb-4 text-3xl' >Please Login!</h2>
            <div className="w-full   lg:max-w-xs">
                <form onSubmit={handleLogin} className="bg-slate-100 shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>

                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name='email' id="email" required type="email" placeholder="Email" />
                    </div>

                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input name='password' className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" required type="password" placeholder="******************" />
                    </div>
                    <div className=''>

                        <p className=" text-sm italic">
                            Dont’t Have An Account?
                            <Link to={'/register'}>Register</Link>
                        </p>

                        <p className=" text-red-600 text-sm italic">

                        </p>
                        <p className=" text-sm italic">

                        </p>

                    </div>
                    <div className="flex  mt-2 items-center justify-between">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Login
                        </button>
                        <Link className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" >
                            Forgot Password?
                        </Link>
                    </div>
                </form>
                <p className="text-center text-gray-500 text-xs">
                    &copy;Chef & Recipe. All rights reserved.
                </p>
            </div>

        </div>
    );
};

export default Login;