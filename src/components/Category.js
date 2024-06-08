import React from "react";
import { Link } from "react-router-dom";
import bull from "../images/bull.jpg";

const Category = (props) => {
  const category = props.category;

    console.log(category)
  return (
    <div className="col">
      <div className="card" style={{ width: " 20rem", marginTop: "25px" }}>
        <img
          src={bull}
          className="card-img-top"
          alt="Hollywood Sign on The Hill"
        />
        <div className="card-body">
          <Link to={ `/items/${category.category_id}` }>
            <h5 className="card-title">{category.name}</h5>
          </Link>

          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Category;
