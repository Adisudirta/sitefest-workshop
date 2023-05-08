import { useParams } from "react-router-dom";
import Search from "@/components/Search";

export default function Recipes() {
  const { slug } = useParams();

  return (
    <div className="container d-flex flex-column justify-content-center">
      {/* Search Section */}
      <p className="text-center fs-1 fw-bold text-primary mt-5">Food Recipes</p>
      <Search />

      <div>
        <h1>Recipes: {slug}</h1>
      </div>
    </div>
  );
}
