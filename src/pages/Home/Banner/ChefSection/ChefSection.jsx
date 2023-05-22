import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ChefCard from './ChefCard';

const ChefSection = () => {
    const [chef, setChef] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/chef')
            .then(res => res.json())
            .then(data => setChef(data))

    }, [])
    return (
        <>
            <h2 className='text-4xl text-center my-7 '> Chinese SPECIALTIES {chef.length}  </h2>
            <div className='grid sm:grid-cols-1 md:grid-cols-3 gap-4 mb-4'>
                {
                    chef.map(cf => <ChefCard
                        key={cf.id}

                    >
                        {cf}
                    </ChefCard>)
                }
            </div>

        </>
    );
};

export default ChefSection;