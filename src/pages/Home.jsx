import SearchBar from "../components/SearchBar.jsx";

export default function Home() {
  return (
    <div className="container d-flex flex-column justify-content-center">
      {/* Search Section */}
      <h2 className="text-center fs-1 fw-bold text-primary mt-5">
        Food Recipes
      </h2>

      <SearchBar />
    </div>
  );
}
