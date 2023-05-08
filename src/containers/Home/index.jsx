import { useState, useEffect } from "react";
import foodAPI from "@/api/foodAPI";
import Card from "@/components/Card";
import Search from "@/components/Search";

export default function Home() {
  const [categoryData, setCategoryData] = useState([]);

  async function getCategoryData() {
    // emit("loadingStatus", true);
    const payload = await foodAPI("/categories.php", "GET");
    setCategoryData(payload.categories);
    // emit("loadingStatus", false);
  }

  useEffect(() => {
    getCategoryData();
  });

  return (
    <div className="container d-flex flex-column justify-content-center">
      {/* Search Section */}
      <p className="text-center fs-1 fw-bold text-primary mt-5">Food Recipes</p>
      <Search />

      {/* Card List Section  */}
      <div className="row row-cols-1 row-cols-md-5 g-4 mt-3">
        {categoryData.map((data, index) => {
          return (
            <Card
              key={data.idCategory}
              category={data.strCategory}
              description={data.strCategoryDescription}
              image={data.strCategoryThumb}
              link={`/recipes/${data.strCategory}`}
            />
          );
        })}
      </div>
    </div>
  );
}
