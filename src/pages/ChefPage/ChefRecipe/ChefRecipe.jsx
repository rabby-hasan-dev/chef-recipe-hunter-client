import React from 'react';

const ChefRecipe = ({ children }) => {
    const { _id, name, cooking_method, ingredients, picture, rating } = children;
    // console.log(ingredients);

    // {ingredients.map()}



    return (

        <div className='m-4'>

            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={picture} alt="Food" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Food Name: {name}</h2>
                    <p> <span className='text-xl'>Cooking Method:</span> {cooking_method}</p>
                    <p> <span className='text-xl' >Ingredients :</span> {ingredients}</p>
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