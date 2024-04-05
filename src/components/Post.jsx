import { useState } from 'react';

function Post({ recette }) {
  const [isFavorite, setIsFavorite] = useState(false); // État du favori

  const difficultyStars = Array(recette.difficulty).fill("⭐").join(" ");

  // Fonction pour basculer l'état du favori
  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const handleClick = () =>{
    toggleFavorite(recette)
    setIsFavorite(!isFavorite)
  }

  return (
    <article className="flex flex-col gap-5 items-center mt-7 bg-white rounded-lg shadow-md p-5 border border-gray-300 max-w-xs mx-auto">
      <div className="w-full overflow-hidden rounded-md">
        <img className="w-full h-auto md:w-auto md:h-auto" src={recette.imageUrl} alt={recette.title} />
      </div>
      <div className="text-center">
        <h1 className="text-xl font-bold">{recette.title}</h1>
        <p className="text-xl align-center mt-1">Difficulté {difficultyStars}</p>
        <h2 className="mt-4 text-xl">{recette.category}</h2>
        <p className="text-gray-700">{recette.description}</p>
        <div className="flex justify-between w-full mt-5"> {/* Conteneur flex pour aligner les éléments sur une seule ligne */}
          <h2>{recette.author}</h2>
          <svg
            onClick={handleClick} // Appel de la fonction pour basculer l'état du favori
            xmlns="http://www.w3.org/2000/svg"
            fill={isFavorite ? "red" : "none"} // Si le favori est activé, le cœur est rempli de rouge, sinon il est vide
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 cursor-pointer color"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
          </svg>
        </div>
      </div>
    </article>
  );
}

export default Post;
