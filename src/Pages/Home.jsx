import React from 'react';
import Hero from '../components/Hero';
import BlogSection from '../components/BlogSection';
import SubscribSection from './SubscribSection';
import FeaturesSection from './FeaturesSection';
// import Animation from './Animation';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <BlogSection></BlogSection>
            <FeaturesSection></FeaturesSection>
            {/* <Animation></Animation> */}
            <SubscribSection></SubscribSection>
        </div>
    );
};

export default Home;