import React, { useEffect, useState } from "react";

import { fetchCategories } from "../api/Api";
import Category from "./Category";


const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    if (categories.length === 0) {
      retrieveCategories();
    }
  }, [categories]);

  const retrieveCategories = async () => {
    const response = await fetchCategories();
    if (response.status === 200) {
      return setCategories(response.data.result);
    }
    return [];
  };

  const renderCategoriesList = categories.map((category) => {
    return <Category category={category} key={category.category_id} />;
  });

  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
        {renderCategoriesList}
      </div>
    </div>
  );
};

export default Categories;
