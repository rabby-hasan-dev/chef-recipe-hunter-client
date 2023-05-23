import React from 'react';

const ChefRecipe = ({ children }) => {
    const { _id, name, cooking_method, ingredients, picture, rating } = children;
    return (

        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={picture} alt="Food" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{cooking_method}</p>
                    <p>{rating}</p>
                    <div className="card-actions">
                        <button className="btn btn-primary"> Favorite</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ChefRecipe;