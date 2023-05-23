import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ChefRecipe from './ChefRecipe/ChefRecipe';
import Chef from './Chef/Chef';

const ChefPage = () => {
    const loader = useLoaderData();
    const [recipe, setRecipe] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/recipe')
            .then(res => res.json())
            .then(data => setRecipe(data));

    }, [])


    return (
        <>
            <div>
                <Chef>{loader}</Chef>
            </div>

            <div className='grid  lg:grid-cols-4 gap-4'>
                {
                    recipe.map(rp =>
                        <ChefRecipe
                            key={rp._id}>
                            {rp}
                        </ChefRecipe>)
                }
            </div>


        </>
    );
};

export default ChefPage;