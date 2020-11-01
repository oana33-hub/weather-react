import React from "react";

export default function Form() {
  return (
    <div>
      <form id="search-form" />
      <div>
        <input
          type="search"
          placeholder="Search a city"
          autofocus="on"
          autocomplete="off"
          id="city-input"
          className="search-form"
        />
      </div>

      <input
        type="submit"
        value="search"
        className="btn btn-info "
        id="search-city"
      />

      <button
        type="button"
        className="btn btn-info"
        id="current-location-button"
      >
        Current
      </button>
    </div>
  );
}

       
    