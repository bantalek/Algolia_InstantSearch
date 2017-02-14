import React, { Component } from 'react';
import { InstantSearch, Configure } from 'react-instantsearch/dom';

import Restaurants from './components/Results';
import SideBar from './components/SideBarRefinements';
import ConnectedSearchBox from './components/AutoCompConnectedSearch';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <InstantSearch
          appId="FND5QH0PGJ"
          apiKey="d731cdda9f85d927bf8e950389476293"
          indexName="restaurants"
        >
          <Configure aroundRadius="all" aroundLatLngViaIP={true} />
          <ConnectedSearchBox />
          <div className="container content-wrapper">
            <SideBar />
            <Restaurants />
          </div>
        </InstantSearch>
      </div>
    );
  }
}
