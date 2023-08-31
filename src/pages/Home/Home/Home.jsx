import React from 'react';
import BannerOne from '../Banner/BannerOne';
import ChefSection from '../Banner/ChefSection/ChefSection';
import WelcomeBanner from '../Banner/WelcomeBanner/WelcomeBanner';
import TakeawyFood from '../TakeawyFood/TakeawyFood';
import Lunch from '../Lunch/Lunch';
import FollowUs from '../FollowUs/FollowUs';
import RecipeCategory from '../RecipeCategory/RecipeCategory';

const Home = () => {
    return (
        <div>
            <BannerOne></BannerOne>
            <WelcomeBanner></WelcomeBanner>
            <ChefSection></ChefSection>
            <TakeawyFood></TakeawyFood>
            <Lunch></Lunch>
            <RecipeCategory></RecipeCategory>
            <FollowUs></FollowUs>

        </div>
    );
};

export default Home;