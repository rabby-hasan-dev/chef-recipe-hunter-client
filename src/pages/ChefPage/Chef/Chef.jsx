import React from 'react';

const Chef = ({children}) => {
    // console.log(children);
    const { id, name, picture, yearsOfExperience, likes, bio } = children;



    return (
        <div>
            
            <div className="  lg:flex justify-between bg-base-100 shadow-xl">
                <div>
                    <img src={picture} alt="Chef Picture" />
                </div>
                <div className=' text-center ' >
                    <h2 className='text-2xl' >Name: {name}</h2>
                    <p className='text-xl mt-3'>Years Of Experience:{yearsOfExperience}</p>
                    <p className='text-xl mt-3'> Likes:{likes}</p>
                    <p className='text-xl mt-3'> Bio: {bio}</p>

                </div>
            </div>
        </div>
    );
};

export default Chef;