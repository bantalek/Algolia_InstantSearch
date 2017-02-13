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

           // <CurrentRefinements/>
           // <ClearAll/>
           // 
// <section id="results-topbar">
//  <div class="sort-by">
//    <label>Sort by</label><select class="ais-SortBy__root">
//      <option value="ikea">
//        Featured
//      </option>
//      <option value="ikea_price_asc">
//        Price asc.
//      </option>
//      <option value="ikea_price_desc">
//        Price desc.
//      </option>
//    </select>
//  </div><span class="ais-Stats__root">4,618 results found in 1ms</span>
// </section>