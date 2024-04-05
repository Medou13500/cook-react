
import Header from './components/Header.jsx';
import Search from './components/Search.jsx';
import Recettes from './components/Recettes.jsx'; // Chemin d'importation corrigé
import Data from './data/recettes.json'
import { useEffect, useState } from 'react';
function App() {
  
  const  [ searchTerm, setSearchTerm] = useState("")
  const [recettesJson, setRecettesJson] = useState(Data)
  const [filterData, setFilterData] = useState([]);
  const handleSearch = () => {
const updateData = recettesJson.filter((recette)=> recette.category.toLowerCase().includes(searchTerm.toLowerCase()))
  setFilterData(updateData)
}
  useEffect(()=>{
    handleSearch()
  },[searchTerm])

  return (
    <>
      <Header />
      
      <Recettes  recettesJSon={recettesJson} setRecettesJson={setRecettesJson} setSearchTerm={setSearchTerm}  filterData={filterData}  />

    </>
  );
}

export default App;
