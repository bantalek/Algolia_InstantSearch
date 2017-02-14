import React from 'react';
import { RefinementList, StarRating } from 'react-instantsearch/dom';

const SideBar = () => (
  <aside className="widget-container">
    <div>
      <div className="widget-title">Food / Cuisine Type</div>
      <RefinementList attributeName="food_type" />
    </div>

    <div>
      <div className="widget-title">Rating</div>
      <StarRating attributeName="stars_count" min={0} max={5} />
    </div>

    <div>
      <div className="widget-title">Payment Options</div>
      <RefinementList attributeName="payment_options" />
    </div>
  </aside>
);

export default SideBar;
