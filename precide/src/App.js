import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ContactUs from './components/pages/ContactUs';
import SignUp from './components/pages/SignUp';
import Prediction from './components/pages/Prediction';
import Dataset from './components/pages/Dataset';
import Social from './components/pages/Social';
import PredText from './components/pages/widgets/PredText';
import PredUrl from './components/pages/widgets/PredUrl';
import PredImage from './components/pages/widgets/PredImage';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/prediction' component={Prediction} />
        <Route path='/text' component={PredText} />
        <Route path='/url' component={PredUrl} />
        <Route path='/image' component={PredImage} />
        <Route path='/dataset' component={Dataset} />
        <Route path='/contact-us' component={ContactUs} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/social' component={Social} />
      </Switch>
    </Router>
  );
}

export default App;
