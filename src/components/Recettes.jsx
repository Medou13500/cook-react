import React, { useEffect, useState } from "react";
import Post from "./Post.jsx";

// Fonction

function Recettes({ filterData, setFilterData, handleFavoris}) {
  


  return (
    <div className="flex flex-wrap justify-center gap-5">
      {filterData.map(recette =>
        <Post
          key={recette.id}
          recette={recette}
          handleFavoris={handleFavoris}
        />
      )}
    </div>
  );
}

export default Recettes;
