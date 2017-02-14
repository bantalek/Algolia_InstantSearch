import React, { Component } from 'react';
import { InstantSearch, SearchBox, } from 'react-instantsearch/dom';
import Restaurants from './components/Results.js';
import SideBar from './components/SideBar.js';


export default class App extends Component {
  render() {
    return (
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
