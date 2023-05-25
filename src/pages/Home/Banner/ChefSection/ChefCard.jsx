import React from 'react';
import { Link } from 'react-router-dom';

const ChefCard = ({ children }) => {

    const { id, name, bio, picture, yearsOfExperience, likes
    } = children;
    return (
        <>
            <div className="card  bg-base-100 shadow-xl">
                <figure className='w-auto'><img src={picture} alt="Chef Picture" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Name: {name}</h2>
                    <p>Years Of Experience:{yearsOfExperience}</p>
                    <p> Likes:{likes}</p>
                    <p> Bio: {bio}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/chefPage/${id}`}><button className="btn btn-primary">View Recipes</button></Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ChefCard;