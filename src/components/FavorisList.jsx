import React, { useState } from 'react';
import Post from './Post';

function ParentComponent({ recettes }) {
  const [favoris, setFavoris] = useState([]);

  // Fonction pour ajouter ou supprimer une recette des favoris
  const toggleFavorite = (recette) => {
    const isAlreadyFavori = favoris.some((fav) => fav.id === recette.id);

    if (isAlreadyFavori) {
      setFavoris(favoris.filter((fav) => fav.id !== recette.id));
    } else {
      setFavoris([...favoris, recette]);
    }
  };

  // Filtrer les recettes pour n'afficher que les favoris
  const favorisRecettes = recettes.filter((recette) =>
    favoris.some((fav) => fav.id === recette.id)
  );

  return (
    <div>
      {/* Afficher les recettes favorites */}
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {favorisRecettes.map((recette) => (
          <Post key={recette.id} recette={recette} onToggleFavorite={toggleFavorite} />
        ))}
      </div>

      {/* Afficher toutes les recettes */}
      <h2>Toutes les recettes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {recettes.map((recette) => (
          <Post key={recette.id} recette={recette} onToggleFavorite={toggleFavorite} />
        ))}
      </div>
    </div>
  );
}

export default ParentComponent;
