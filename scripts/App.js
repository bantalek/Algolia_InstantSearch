import React, { Component } from 'react';
import { InstantSearch, SearchBox, } from 'react-instantsearch/dom';
import Restaurants from './components/Results.js';
import SideBar from './components/SideBar.js';


export default class App extends Component {
  render() {
    return (
      // Add your component markup and other subcomponent references here.
      // need to handle load more page at bottom and add scrolling to window
      <div className="container">
        <InstantSearch
          appId="FND5QH0PGJ"
          apiKey="d731cdda9f85d927bf8e950389476293"
          indexName="restaurants"
          className="container"
        >

          <SearchBox />
          <div className="container content-wrapper">
            <SideBar />
            <Restaurants />
          </div>
        </InstantSearch>
      </div>
    );
  }
}
