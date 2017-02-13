import React from 'react';
import Restaurant from './RestaurantHit';
import { InfiniteHits, Stats, SortBy } from 'react-instantsearch/dom';

const Results = () => (
  <div className="results-wrapper">
    <section className="results-topbar">
      <Stats />
      <SortBy
        items={[
          { value: 'restaurants', label: 'Featured' },
          { value: 'restaurants_price_asc', label: 'Price asc.' },
          { value: 'restaurants_price_desc', label: 'Price desc.' },
          ]}
        defaultRefinement="restaurants"
    />
  </section>
  
  <main className="hits-container">
    <InfiniteHits className="hits" hitComponent={Restaurant} />
  </main>
  </div>
);

export default Results;