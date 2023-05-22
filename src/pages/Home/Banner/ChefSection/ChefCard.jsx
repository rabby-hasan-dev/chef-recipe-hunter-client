import React from 'react';

const ChefCard = ({ children }) => {
    console.log(children)
    const { id, name, bio, picture, yearsOfExperience, likes
    } = children;
    return (
        <>
            <div className="card  bg-base-100 shadow-xl">
                <figure className='w-auto'><img src={picture } alt="Chef Picture" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Name: {name}</h2>
                    <p>Years Of Experience:{yearsOfExperience}</p>
                    <p> Likes:{likes}</p>
                    <p> Bio: {bio}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">View Recipes</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ChefCard;