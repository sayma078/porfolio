import React from 'react';
import About from '../../About/About';
import Contact from '../../Contact/Contact';
import Projects from '../../Projects/Projects';
import Service from '../../Service/Service';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div id="home">
            
            <Banner></Banner>
            <About></About>
            <Service></Service>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;