import React, { Component } from 'react';
import Restaurant from './RestaurantHit';
import { InfiniteHits, Stats, SortBy } from 'react-instantsearch/dom';

export default const Results = () => (
  <div className="results-wrapper">
    <section className="results-topbar">
      <Stats />
      <SortBy
        items={[
          { value: 'restaurants', label: 'Featured' },
          { value: 'restaurant_price_asc', label: 'Price Low' },
          { value: 'restaurant_price_desc', label: 'Price High' },
          ]}
        defaultRefinement="restaurants"
      />
    </section>
    <main className="hits-container">
      <InfiniteHits className="hits" hitComponent={Restaurant} />
    </main>
  </div>
);
