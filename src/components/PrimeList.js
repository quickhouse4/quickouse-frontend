import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { SpecialProperties } from '../actions/propertiesAction'
import { formatPrice } from "../priceFormated";

function PrimeList() {
  const pageLimit = 25
  const [pageCount, setpageCount] = useState(1)
  const dispatch = useDispatch()

  const specialProperties = useSelector(state => state.specialPropertiesLists)

  const { specialPropertiesLists } = specialProperties

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  useEffect(() => {
    dispatch(SpecialProperties(pageCount, pageLimit))
  }, []);

  return (

    <div class="col-md-3 property-col prime-list top">
      <div class="common">
        {specialPropertiesLists.length === 0 ?
          <>
            <span style={{ color: "#071c36" }} className="fs-1 mt-5 text-center d-flex justify-content-center">
              Special Properties not available for now!
            </span>
          </> :
          <div className='d-flex justify-content-center'>
            <h4 class="fs-3" style={{fontWeight:"500"}}>Premium</h4>
          </div>
        }
        {specialPropertiesLists.map((property) => (
          <div class="card mb-2 border border-light"
            key={property._id}
            style={{
              position: "relative",
            }}>

            <Link to={`/property/${property._id}`} >
              <img
                class="card-img-top"
                src={property.mainPhoto}
                alt="Card image cap"
                style={{

                }} />
            </Link>

            <div class="card-body">
              <h5
                class="size-text"
                style={{
                  color: "#071c36",
                  fontWeight: 600,
                }}
              >
                {capitalizeFirstLetter(property.type)}{" "}
                {property.businessStatus}
              </h5>
              <div class="d-flex align-items-center size">
                      <div style={{ cursor: "pointer" }} class="flex-nowrap icons-1">
                        <span class="size " style={{color: "#071c36"}}>{property.city}</span>
                        <span class="pl-1 size" style={{color: "#071c36"}}>{property.district}</span>
                        <span class="pl-1 size" style={{color: "#071c36"}}>{property.sector}</span>
                      </div>
                    </div>
              <div class="card-text price">
                <h6 >
                  {formatPrice(property.price)} {property.currency}
                </h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PrimeList