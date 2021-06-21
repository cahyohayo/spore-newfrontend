import React from 'react';
import { BrowserRouter as ReactRouter, Route, Switch } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/Home';
import NFT from './pages/NFT/NFT';
import NFTGallery from './pages/NFT/NFTGallery';
import TeamPage from './pages/Team';
import ComingSoon from './components/ComingSoon';

const Router = () => {
  return (
    <ReactRouter>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/nft' component={NFT} />
        <Route exact path='/gallery' component={NFTGallery} />
        <Route exact path='/coming-soon' component={ComingSoon} />
        <Route exact path='/team' component={TeamPage} />
      </Switch>
      <Footer />
    </ReactRouter>
  );
};

export default Router;
