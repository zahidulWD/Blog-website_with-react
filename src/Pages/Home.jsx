import React from 'react';
import Hero from '../components/Hero';
import BlogSection from '../components/BlogSection';
import SubscribSection from './SubscribSection';
import FeaturesSection from './FeaturesSection';
import FaqSection from './FaqSection';
import Dashboard from './Dashborad';


const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <BlogSection></BlogSection>
            <FeaturesSection></FeaturesSection>
            <Dashboard></Dashboard>
            <FaqSection></FaqSection>
            {/* <Animation></Animation> */}
            <SubscribSection></SubscribSection>
        </div>
    );
};

export default Home;