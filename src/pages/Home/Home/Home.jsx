import React from 'react';
import BannerOne from '../Banner/BannerOne';
import ChefSection from '../Banner/ChefSection/ChefSection';
import WelcomeBanner from '../Banner/WelcomeBanner/WelcomeBanner';
import TakeawyFood from '../TakeawyFood/TakeawyFood';
import Lunch from '../Lunch/Lunch';

const Home = () => {
    return (
        <div>
            <BannerOne></BannerOne>
            <WelcomeBanner></WelcomeBanner>
            <ChefSection></ChefSection>
            <TakeawyFood></TakeawyFood>
            <Lunch></Lunch>

        </div>
    );
};

export default Home;