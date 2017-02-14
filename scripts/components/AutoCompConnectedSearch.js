import React from 'react';
import AgAutocomplete from 'react-algoliasearch';
import { connectSearchBox } from 'react-instantsearch/connectors';


const MySearchBox = ({ refine }) => {
  const suggestionSelected = (event, suggestion) => {
    refine(event.target.value);
  };

  return (
    <AgAutocomplete
      apiKey={'d731cdda9f85d927bf8e950389476293'}
      appId={'FND5QH0PGJ'}
      displayKey={(hit) => `${hit.name} ${hit.city} ${hit.dining_style}`}
      indices={[{ index: 'restaurants' }]}
      inputId="input-search"
      selected={suggestionSelected}
      placeholder="Search for Restaurants by Name, Cuisine, Location"
      hitsPerPage={10}
      updated={suggestionSelected}
    />
  );
};

export default connectSearchBox(MySearchBox);
