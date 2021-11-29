import React from 'react';
import About from '../../About/About';
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
            <Footer></Footer>
        </div>
    );
};

export default Home;