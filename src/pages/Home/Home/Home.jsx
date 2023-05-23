import React from 'react';
import BannerOne from '../Banner/BannerOne';
import ChefSection from '../Banner/ChefSection/ChefSection';
import WelcomeBanner from '../Banner/WelcomeBanner/WelcomeBanner';

const Home = () => {
    return (
        <div>
            <BannerOne></BannerOne>
            <WelcomeBanner></WelcomeBanner>
            <ChefSection></ChefSection>

        </div>
    );
};

export default Home;