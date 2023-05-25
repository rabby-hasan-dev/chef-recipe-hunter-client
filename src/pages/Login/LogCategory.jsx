import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGithub, FaGoogle, FaInbox } from "react-icons/fa";
import { AuthContext } from '../providers/AuthProvider';

const LogCategory = () => {

    
    const { gitPopup, googlePopup } = useContext(AuthContext);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const navigate=useNavigate();
    const location=useLocation();
    console.log(location)
    const from=location.state?.from?.pathname||'/chefPage'




    const handleGooglePopup = () => {
        googlePopup()
            .then(result => {
                const loogedUser = result.user;
                setSuccess('Successfully User Login')
                navigate(from, { replace:true });
                console.log(loogedUser);

            })
            .catch(error => {
                setError(error.message);
            })

    }

    const handleGithubPopup = () => {
        gitPopup()
            .then(result => {
                const loogedUser = result.user;
                setSuccess('Successfully User Login')
                navigate(from, { replace:true });
                console.log(loogedUser);
            })
            .catch(error => {
                setError(error.message);
            })


    }

    return (
        <div className=' md:flex flex-col md:justify-center md:items-center text-center w-auto mt-4'>
            <h2 className='mb-4 text-3xl' >Please Select Login Option!</h2>
            <div className="w-full   lg:max-w-xs">
                <form className="bg-slate-100 shadow-md rounded px-8 pt-6 pb-8 mb-4">

                    <div className=" mt-2 ">
                        <Link to='/login' >
                            <button className="bg-blue-500 my-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                <span><FaInbox></FaInbox></span> SigIn With Email
                            </button></Link>
                        <button onClick={handleGooglePopup} className="bg-red-500 my-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            <FaGoogle></FaGoogle> SigIn With Google
                        </button>
                        <button onClick={handleGithubPopup} className="bg-sky-500 my-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            <FaGithub></FaGithub> SigIn With Github
                        </button>

                    </div>
                    <div>
                        <p className=" text-red-600 text-sm italic">
                            {error}
                        </p>
                        <p className=" text-sky-500  text-sm italic">
                            {success}
                        </p>
                    </div>
                </form>

            </div>

        </div>
    );
};

export default LogCategory;