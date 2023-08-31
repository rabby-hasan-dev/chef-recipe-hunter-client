import React from 'react';

const WelcomeBanner = () => {
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl my-14 pb-4">
              
                <div className=' w-full'>
                    <img src="https://us.123rf.com/450wm/facesportrait/facesportrait2106/facesportrait210600009/170130224-healthy-food-cooking-female-cook-preparing-delicious-food-in-kitchen-woman-in-chef-uniform.jpg?ver=6" alt="Album" />
                </div>
                <div className="card-body">
                    <h2 className="text-4xl font-bold">Welcome at Chef & Recipe</h2>
                    <p>“Action ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate”.</p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
                    </p>
                    <div className="card-actions justify-end">
                        <a href="#about">About Us Chef specialist</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WelcomeBanner;