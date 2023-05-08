import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import foodAPI from "@/api/foodAPI";

import Search from "@/components/Search";
import Card from "@/components/Card";

export default function Recipes() {
  const { slug } = useParams();
  const [mealsData, setMealsData] = useState([]);

  async function getFoodByCategoryData() {
    const payload = await foodAPI(`/filter.php?c=${slug}`, "GET");
    setMealsData(payload.meals);
  }

  getFoodByCategoryData();

  return (
    <div className="container d-flex flex-column justify-content-center">
      {/* Search Section */}
      <p className="text-center fs-1 fw-bold text-primary mt-5">Food Recipes</p>
      <Search />

      <div>
        <h1>Recipes: {slug}</h1>
      </div>

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
