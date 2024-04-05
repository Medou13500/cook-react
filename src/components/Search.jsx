function Search({ searchTerm, setSearchTerm }) {
  return (
    <section className="Search-container flex flex-col items-center justify-center gap-4 mt-14">
      <h1 className="text-4xl">Let's cook</h1>
      <div className="w-full max-w-md">
        <div className="search-barre relative">
          <input
            className="bg-slate-950 text-white w-full sm:w-32 md:w-48 lg:w-72 px-4 py-2 rounded-full outline-none ml-5 sm:ml-14" // Utilisation de classes responsive pour la largeur et le margin-left
            type="search"
            placeholder="Search for anything"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value) }
          />
        </div>
      </div>
    </section>
  );
}

export default Search;
