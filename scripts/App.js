import React, { Component } from 'react';
import { InstantSearch, SearchBox, } from 'react-instantsearch/dom';
import Restaurants from './components/Results.js';
import SideBar from './components/SideBar.js';
import AgAutocomplete from 'react-algoliasearch';
import {connectSearchBox} from 'react-instantsearch/connectors';

const MySearchBox = ({currentRefinement, refine}) => {
  const suggestionSelected = (event, suggestion, dataset) => {
    refine(event.target.value);
  };

  return (<AgAutocomplete
    apiKey={"d731cdda9f85d927bf8e950389476293"}
    appId={"FND5QH0PGJ"}
    displayKey={(hit) => `${hit.name} ${hit.city} ${hit.dining_style}`}
    indices={[{index: 'restaurants'}]}
    inputId="input-search"
    selected={suggestionSelected}
    placeholder="Search for Restaurants by Name, Cuisine, Location"
    hitsPerPage={10}
    updated = {suggestionSelected}
  />);
}

const ConnectedSearchBox = connectSearchBox(MySearchBox);


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
