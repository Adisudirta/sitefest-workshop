import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import foodAPI from "../api/foodAPI";

import SearchBar from "@/components/SearchBar";
import Card from "@/components/Card";

export default function Recipes() {
  const { slug } = useParams();
  const [mealsData, setMealsData] = useState([]);

  async function getFoodByCategoryData() {
    const payload = await foodAPI(`/filter.php?c=${slug}`, "GET");
    setMealsData(payload.meals);
  }

  useEffect(() => {
    getFoodByCategoryData();
  }, []);

  return (
    <div className="container d-flex flex-column justify-content-center">
      {/* Search Section */}
      <h2 className="text-center fs-1 fw-bold text-primary mt-5">{`${slug} Category`}</h2>

      <Link to="/" className="text-center text-primary mb-3">
        <small>🏠 Back to Home</small>
      </Link>

      <SearchBar />

      {/* Card List Section  */}
      <div className="row row-cols-1 row-cols-md-5 g-4 mt-3">
        {mealsData.map((data) => {
          return (
            <Card
              key={data.idMeal}
              title={data.strMeal}
              image={data.strMealThumb}
            />
          );
        })}
      </div>
    </div>
  );
}
