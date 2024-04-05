import Post from "./Post.jsx";
import Search from "./Search"; 

const Recettes = ({ searchTerm, setSearchTerm, recettesJSon, filterData}) => {
  return (
    <>

<Search searchTerm = {searchTerm} setSearchTerm = {setSearchTerm}     />
    
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {filterData.map(recette =>
       <Post key={recette.id} recette={recette} />)}
    </div>
    
    </>
    
  );
};

export default Recettes;
