// App.jsx
import React, { useState, useEffect } from 'react';
import Header from './components/Header.jsx';
import Search from './components/Search.jsx';
import Recettes from './components/Recettes.jsx';
import Data from './data/recettes.json';
import Footer from './components/Footer.jsx'; // Import du composant Footer

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [recettesJson, setRecettesJson] = useState(Data);
  const [filterData, setFilterData] = useState([]);
  const [isFilterFavorite, setIsFilterFavorite] = useState(false);

  const handleSearch = () => {
    const updatedData = recettesJson.filter((recette) =>
      recette.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (isFilterFavorite) {
      setFilterData(updatedData.filter(recette => recette.fav));
    } else {
      setFilterData(updatedData);
    }
  };

  const handleFavoris = (id) => {
    setRecettesJson(
      recettesJson.map((recette) =>
        recette.id === id ? { ...recette, fav: !recette.fav } : recette
      )
    );
  };

  useEffect(() => {
    handleSearch();
  }, [searchTerm, recettesJson, isFilterFavorite]);

  return (
    <>
      <Header />
      <Search
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        isFilterFavorite={isFilterFavorite}
        setIsFilterFavorite={setIsFilterFavorite}
      />
      <Recettes filterData={filterData} handleFavoris={handleFavoris} />
      <Footer /> {/* Rendu du composant Footer */}
    </>
  );
}

export default App;
