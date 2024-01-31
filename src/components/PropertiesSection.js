import React, { useState, useEffect } from "react";

import {useDispatch, useSelector} from 'react-redux'

import {listProperties} from '../actions/propertiesAction'
import { Link, useHistory } from "react-router-dom";
import { FcLike } from "react-icons/fc";
import SweetPagination from "sweetpagination";

function PropertiesSection(props) {
  const dispatch=useDispatch()
  const propertyList =useSelector(state => state.propertyLists)
   const {properties} = propertyList
  const history = useHistory(); 
  const [currentPageData, setCurrentPageData] = useState(new Array(3).fill());

  useEffect(() => {
    dispatch(listProperties())
  }, []);

  return (
    <div class="container-fluid">
      <h3
        class="text-center m-4 p-2"
        style={{ color: "#0070BB", fontSize: "24px" }}
      >
        Property for Sale/Rent
      </h3>

      <div class="row">
        {properties.map((property) => (
          <div class="col-md-4">
            <div
              class="card mb-2 shadow-lg bg-light rounded properties"
            >
              <Link to={`/property/${property._id}`}>
                <img
                  class="card-img-top"
                  src={property.mainPhoto}
                  alt="Card image cap"
                  style={{}}
                />
              </Link>
              <div class="card-body">
                <div class="card-text rentals">
                  <span class="ml-4 mr-4">{property.businessStatus}</span>
                </div>
                <h4
                  class="card-title login-header"
                  style={{fontStyle: "bolder" }}
                >
                  {property.propertyName}
                </h4>
                <p class="card-text">{property.description}</p>

                <h5
                  class="card-title login-header"
                  style={{fontStyle: "bolder" }}
                >
                  {property.price} RWF
                </h5>

                <p>
                  {" "}
                  <FcLike class="text-dark" />
                  <span
                    class="ml-2"
                    style={{ fontSize: "0.8rem", fontStyle: "bold" }}
                  >
                    {property.likes}
                  </span>
                  <span class="ml-2 text-bold" style={{ fontSize: "0.7rem" }}>
                    Views
                  </span>
                  <span
                    class="ml-2"
                    style={{ fontSize: "0.8rem", fontStyle: "bold" }}
                  >
                    {property.views}
                  </span>
                </p>
              </div>
            </div>
          </div>
        ))}   
      </div>
      <div class="row">
        <div class="col-md-4"></div>
        <div class="col-md-4">
          <SweetPagination
            currentPageData={setCurrentPageData}
            dataPerPage={5}
            getData={properties}
            navigation={true}
          />
          <h4 class="text-center justify-content-center bg-primary pt-2 pb-2">
            Load more
          </h4>
          <h2>{props.data}</h2>
        </div>
      </div>
    </div>
  );
}
export default PropertiesSection;

