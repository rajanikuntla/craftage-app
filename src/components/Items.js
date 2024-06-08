import React, { useEffect, useState } from "react";

import { useParams } from 'react-router-dom';

import { fetchItems } from "../api/Api";
// import { Link } from "react-router-dom";
import bull from "../images/bull.jpg";

const Items = () => {
    const { category_id } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (items.length === 0) {
      retrieveItems();
    }
  }, [items]);

  const retrieveItems = async () => {
    const response = await fetchItems(category_id);
    if (response.status === 200) {
      return setItems(response.data.result);
    }
    return [];
  };

  const renderItemsList = items.map((item) => {
    return (
        <div className="row justify-content-center mb-3">
        <div className="col-md-12 col-xl-10">
          <div className="card shadow-0 border rounded-3">
            <div className="card-body">
              <div className="row">
                <div className="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                  <div className="bg-image hover-zoom ripple rounded ripple-surface">
                    <img src={bull}
                      className="w-100" alt="item" />
                    <a href="/">
                      <div className="hover-overlay">
                        <div className="mask" style={{backgroundColor: " rgba(253, 253, 253, 0.15);"}}></div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-md-6 col-lg-6 col-xl-6">
                  <h5>{item.item_name}</h5>
                  <div className="d-flex flex-row">
                    <div class="text-danger mb-1 me-2">
                     
                    </div>
                    <span>310</span>
                  </div>
            
                  <p className="text-truncate mb-4 mb-md-0">
                  {item.description}
                  </p>
                </div>
                <div className="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                  <div className="d-flex flex-row align-items-center mb-1">
                    <h4 className="mb-1 me-1">{item.price}</h4>
                    
                  </div>
                  <h6 className="text-success">Free shipping</h6>
                  <div className="d-flex flex-column mt-4">
                    <button data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-sm" type="button">Details</button>
                    <button data-mdb-button-init data-mdb-ripple-init className="btn btn-outline-primary btn-sm mt-2" type="button">
                      Add to wishlist
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <section style={{backgroundColor: "#eee"}} >
      <div className="container py-5">{renderItemsList}</div>
    </section>
  );
};

export default Items;
