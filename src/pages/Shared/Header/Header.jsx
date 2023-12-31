import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Header = () => {
  const { logOut, user } = useContext(AuthContext);
 

  console.log(user)
  const handleLogOut = () => {
    logOut()
      .then()
      .catch(error =>
        console.log(error))

  }

  return (
    <>
      <div className="navbar bg-base-200 flex justify-between ">
        <div>
          <h2 className='normal-case text-3xl'>Chef & Recipe</h2>
        </div>
        <div className='text-xl'>
          <Link className='link link-hover' to={'/'}>Home</Link>
          <Link className='ms-4 link link-hover' to={'/blog'}>Blog</Link>
        </div>

        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src={user?.photoURL} />
            </div>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <a className="justify-between">
                Profile
              </a>
            </li>

            <li>
              {
                user ? <button onClick={handleLogOut} >logout</button> : <Link to='/logCategory'> Login</Link>
              }
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;