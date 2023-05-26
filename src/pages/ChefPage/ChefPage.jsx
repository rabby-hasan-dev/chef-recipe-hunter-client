import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ChefRecipe from './ChefRecipe/ChefRecipe';
import Chef from './Chef/Chef';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ChefPage = () => {
    const loader = useLoaderData();
    const [recipe, setRecipe] = useState([]);
    console.log(loader);

    useEffect(() => {
        fetch('https://chef-recipe-hunter-server-side-brown.vercel.app/recipe')
            .then(res => res.json())
            .then(data => setRecipe(data));

    }, [])


    return (
        <>
            <div>
                <Chef>{loader}</Chef>
            </div>

            <div className='grid  lg:grid-cols-3 gap-4'>
                {
                    recipe.map(rp =>
                        <ChefRecipe
                            key={rp._id}>
                            {rp}
                        </ChefRecipe>)
                }
            </div>
            <ToastContainer></ToastContainer>


        </>
    );
};

export default ChefPage;