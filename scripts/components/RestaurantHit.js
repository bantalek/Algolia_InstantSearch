import React from 'react';

const Restaurant = ({ hit }) => {
  const stars = [];

  for (let i = 1; i < hit.stars_count; i++) {
    stars.push(<label  key={i} className="ais-StarRating__ratingIcon" />);
  }

  return (
    <article className="hit">
      <div className="product-picture-wrapper">

        <img role="presentation" className="product-picture" src={hit.image_url} />

      </div>
      <div className="product-desc-wrapper">
        <div className="product-name">
          <span className="ais-Highlight"><span className="ais-Highlight__nonHighlighted">{hit.name}</span></span>
        </div>
        <div className="product-reputation">

          <span className="product-star-details">
            <span className="product-star-count">{`${hit.stars_count} `}</span>
            <span className="product-star-count">{stars}</span>
          </span>
          <span className="product-details">{`(${hit.reviews_count} reviews)` }</span>

        </div>
        <div className="ais-Highlight">
          <div className="product-type">

            <span className="product-details">{hit.dining_style}</span>
            <span className="product-spacer">|</span>
            <span className="product-details">{hit.neighborhood}</span>
            <span className="product-spacer">|</span>
            <span className="product-details">{hit.price_range}</span>

          </div>
        </div>
      </div>
    </article>
  );
};

export default Restaurant;
