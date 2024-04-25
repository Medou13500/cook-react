// Search.jsx
import React, { useState } from "react";

function Search({ searchTerm, setSearchTerm,isFilterFavorite, setIsFilterFavorite}) {
  return (
    <section className="Search-container flex flex-col items-center justify-center gap-4 mt-14">
      <h1 className="text-4xl">Let's cook</h1>
      <div className="w-full max-w-md">
        <div className="search-barre relative flex items-center justify-between">
          <input
            className="bg-slate-950 text-white flex-grow px-4 py-2 rounded-full outline-none mr-3"
            type="search"
            placeholder="Search for anything"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
          <button
            className="bg-red-500 p-1 rounded-full w-20"
            onClick={() => setIsFilterFavorite(!isFilterFavorite)}
          >
            Favoris
          </button>
        </div>
      </div>
     
    </section>
  );
}

export default Search;
