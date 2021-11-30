import './App.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './pages/Home/Header/Header';
import Home from './pages/Home/Home/Home';
import Footer from './pages/Home/Footer/Footer';

import AuraDetails from './pages/Details/AuraDetails';
import Blog from './pages/Blog/Blog';
import TripIn from './pages/Details/TripIn';
import OdonticCare from './pages/Details/OdonticCare';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
        <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/blog">
            <Blog></Blog>
          </Route>
          
          <Route path="/auraDetails">
            <AuraDetails></AuraDetails>
          </Route>
          <Route path="/tripDetails">
            <TripIn></TripIn>
          </Route>
          <Route path="/odonticDetails">
            <OdonticCare></OdonticCare>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
     
    </div>
  );
}

export default App;
