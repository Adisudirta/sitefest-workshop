import { useState } from "react";
import { useParams, Link } from "react-router-dom";

import foodAPI from "../api/foodAPI";

import Card from "@/components/Card";

export default function Search() {
  const { value } = useParams();

  const [mealsData, setMealsData] = useState([]);

  async function getMealsByName() {
    const payload = await foodAPI(`/search.php?s=${value}`, "GET");
    setMealsData(payload.meals);
  }

  getMealsByName();

  return (
    <div className="container d-flex flex-column justify-content-center">
      {/* Search Section */}
      <h2 className="text-center fs-1 fw-bold text-primary mt-5">
        🔎 Result for {value}
      </h2>

      <Link to="/" className="text-center text-primary">
        <small>🏠 Back to Home</small>
      </Link>

      {/* Card List Section  */}

      {mealsData ? (
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
      ) : (
        <p className="text-center text-secondary fs-3 fw-bold mt-5">
          Food is doesn't exist in our database 🙏
        </p>
      )}
    </div>
  );
}
