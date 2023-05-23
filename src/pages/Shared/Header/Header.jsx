import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <div className="navbar bg-base-100 flex justify-between mt-">
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
              <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" />
            </div>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <a className="justify-between">
                Profile
              </a>
            </li>

            <li> <Link to='/login'> Login</Link> </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;