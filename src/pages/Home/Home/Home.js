import React from 'react';
import About from '../../About/About';
import Projects from '../../Projects/Projects';
import Service from '../../Service/Service';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <About></About>
            <Service></Service>
            <Projects></Projects>
            <Footer></Footer>
        </div>
    );
};

export default Home;