import React, { useState } from 'react';
import { toast } from 'react-toastify';

const ChefRecipe = ({ children }) => {
    const { _id, name, cooking_method, ingredients, picture, rating } = children;
    // console.log(ingredients);

    // {ingredients.map()}

    const [disableButton, setDisable]=useState(false);
    console.log(disableButton);

    const toastHandler=()=>{
        toast('the recipe is my favorite')
        setDisable(true);
        

    }
    // disabled={{disableButton}}


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
                    <button onClick={toastHandler} disabled={disableButton} className="btn btn-primary"> Favorite</button>
                      
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ChefRecipe;