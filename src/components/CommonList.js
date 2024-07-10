import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { listProperties ,propertyForSale} from '../actions/propertiesAction'
import { TiLocationOutline } from 'react-icons/ti'
import Spinner from "react-bootstrap/Spinner";
import ReactPaginate from "react-paginate";
import { ToastContainer, toast } from "react-toastify";
import { createLike } from '../actions/likeAction'
import { formatPrice } from '../priceFormated'

const CommonList = ({ label, setLoading }) => {
  let pageLimit = 25;
  let allProperties = [];
  let commonLoading = "";
  let allError = "";
  const token = localStorage.getItem("token")
  const [pageCount, setpageCount] = useState(1);
  const [likes, setLikes] = useState([]);

  const [likesCount, setLikesCount] = useState(0);


  const dispatch = useDispatch();
  const commonProperties = useSelector((state) => state.propertyLists)
  const forRentProperties = useSelector((state) => state.forRent);
  const forSaleProperties = useSelector((state) => state.forSale);
  const { loadingLike } = useSelector((state) => state.createLike)

  // console.log("like",likesProperty)
  const { loadingForRent, totalPagesforRent, errorForRent, propertiesForRent } = forRentProperties;
  const { loadingForSale, totalPagesforSale, errorForSale, propertiesForSale } = forSaleProperties;
  const { loading, error, totalPages, properties } = commonProperties;

  //warehouse
  const filteredWarehouse = useSelector((state) => state.warehouseFilters);
  const { Warehouseloading, warehouseError, warehouseFilters } = filteredWarehouse
  const filteredSaleWarehouse = useSelector((state) => state.warehouseSaleFilters);
  const { WarehouseSaleloading, warehouseSaleError, warehouseSaleFilters } = filteredSaleWarehouse;
  //residentials
  const filteredResidentials = useSelector((state) => state.residentialFilters);
  const { residentialLoading, residentialError, residentialsFilters } = filteredResidentials;
  const filteredSaleResidentials = useSelector((state) => state.residentialSaleFilters);
  const { residentialSaleLoading, residentialSaleError, residentialSaleFilters } = filteredSaleResidentials;
  //office
  const filteredOffices = useSelector((state) => state.officesFilters);
  const { officeLoading, officeError, officesFilters } = filteredOffices;
  const filteredSaleOffices = useSelector((state) => state.officesSaleFilters);
  const { officeSaleLoading, officeSaleError, officesSaleFilters } = filteredSaleOffices;
  //appartments
  const filteredApartments = useSelector((state) => state.apartmentsFilters);
  const { apartmentsLoading, apartmentError, apartmentsFilters } = filteredApartments;
  const filteredSaleApartments = useSelector((state) => state.apartmentsSaleFilters);
  const { apartmentsSaleLoading, apartmentSaleError, apartmentsSaleFilters } = filteredSaleApartments;
  //vocant plots
  const filteredPlots = useSelector((state) => state.vacantplotsFilters);
  const { plotLoading, plotsError, vacantplotsFilters } = filteredPlots;
  const filteredSalePlots = useSelector((state) => state.vacantplotsSaleFilters);
  const { plotSaleLoading, PlotsSaleError, vacantplotsSaleFilters } = filteredSalePlots;
  //commercial
  const filteredCommercial = useSelector((state) => state.commercialFilters);
  const { commercialLoading, commercialError, commercialFilters } = filteredCommercial;
  const filteredSaleCommercial = useSelector((state) => state.commercialSaleFilters);
  const { commercialSaleLoading, commercialSaleError, commercialSaleFilters } = filteredSaleCommercial;

  const allData = useSelector((state) => state.allData);
  const { activeCategory } = useSelector((state) => state.activeCategory);
  const { Searchloading, searchedData } = allData;

  let allCommon = properties;
  let pages = totalPages;
  let errors = error;
  allProperties = allCommon;
  commonLoading = loading;
  allError = errors

  if (typeof searchedData !== "undefined" && activeCategory === "search") {
    commonLoading = Searchloading
    allProperties = searchedData
  }


  switch (label) {
    //warehouse
    case 'warehouseFilters':
      commonLoading = Warehouseloading;
      allProperties = warehouseFilters;
      allError = warehouseError
      break;

    case 'warehouseSaleFilters':
      commonLoading = WarehouseSaleloading
      allProperties = warehouseSaleFilters
      allError = warehouseSaleError
      break;

    //office
    case 'officesFilters':
      commonLoading = officeLoading;
      allProperties = officesFilters;
      allError = officeError
      break;
    case 'officesSaleFilters':
      commonLoading = officeSaleLoading;
      allProperties = officesSaleFilters;
      allError = officeSaleError
      break;
    //residentials
    case 'residentialsFilters':
      commonLoading = residentialLoading;
      allProperties = residentialsFilters;
      allError = residentialError
      break;
    // setFilteredData(residentialsFilters)

    case 'residentialsSaleFilters':
      commonLoading = residentialSaleLoading
      allProperties = residentialSaleFilters
      allError = residentialSaleError
      break;

    case 'apartmentsFilters':
      commonLoading = apartmentsLoading;
      allProperties = apartmentsFilters;
      allError = apartmentError
      
      break;

    case 'apartmentsSaleFilters':
      commonLoading = apartmentsSaleLoading;
      allProperties = apartmentsSaleFilters;
      allError = apartmentSaleError
      break;

    case 'vacantPlotsFilters':
      commonLoading = plotLoading;
      allProperties = vacantplotsFilters;
      allError = plotsError
      break;

    case 'vacantPlotsSaleFilters':
      commonLoading = plotSaleLoading;
      allProperties = vacantplotsSaleFilters;
      allError = PlotsSaleError
      break;
    case 'commercialFilters':
      commonLoading = commercialLoading;
      allProperties = commercialFilters;
      allError = commercialError;
      break;
    case 'commercialSaleFilters':
      commonLoading = commercialSaleLoading;
      allProperties = commercialSaleFilters;
      allError = commercialSaleError
      break;
    case 'propertiesForRent':
      commonLoading = loadingForRent
      pages = totalPagesforRent
      allProperties = propertiesForRent;
      allError = errorForRent

      break;
    case 'propertiesForSale':
      commonLoading = loadingForSale
      pages = totalPagesforSale
      allProperties = propertiesForSale;
      allError = errorForSale

      break;
    default:
      allProperties = allProperties
  }

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  useEffect(() => {
    dispatch(listProperties(pageCount, pageLimit));
    // dispatch(propertyForSale(pageCount , pageLimit))
  }, []);

  
  // useEffect(() => {
  //   setLikes([])
  //   if (likedStatus.Response) {
  //     setLikes(prevLikes => prevLikes.map(
  //       prevLike => prevLike.id === likedStatus.Response.propertyId ? {
  //         ...prevLike, total_likes: likedStatus.Response.liked ? prevLike.total_likes + 1 : prevLike.total_likes - 1
  //       } : prevLike
  //     ))
  //   }
  //   {
  //     commonProperties.properties && commonProperties.properties.map(property => {
  //       // console.log(property)
  //       likes.push({ id: property._id, total_likes: property.likes })
  //       setLikes(likes)
  //     });
  //   }
  // }, [commonProperties, likedStatus])

  let propertyCount = (pageCount - 1) * pageLimit + allProperties && allProperties.length
  // console.log("pagecount",pageCount)

  let handlePageClick = (data) => {
    let currentPage = data.selected + 1;
    setpageCount(currentPage);
    dispatch(listProperties(pageCount, pageLimit));

  };

  useEffect(() => {
    setLoading(commonLoading)
  }, [commonLoading])

  const updateLikes = (id) => {
    dispatch(createLike(id, token));
  }

  // useEffect((id) => {
  //   updateLikes(id)
  // }, [loadingLike]);
  
  return (
    <div class="col-md-6 property-col d-md-block common-list top">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div class="row common">
        <div className='d-flex justify-content-center'>
          <h4 class="fs-3" style={{fontWeight:"500",color:"transparent"}}>ORDINARY</h4>
        </div>
        {commonLoading ? (
          <h2 class="text-center mt-5 pt-5">
            {" "}
            <Spinner
              animation="border"
              variant="dak"
              class="text-center mt-5 pt-5"
            />
          </h2>
        ) : (
          <>
            {" "}
            {!allProperties ? (
              <>{toast.success(allError)}</>
            ) : allProperties.map((property, index) => (
              <div class="col-md-6" key={index}> 
                <div
                  key={property._id}
                  class="card shadow-lg bg-light rounded border border-light "
                  style={{
                    position: "relative",
                  }}

                >
                  <Link to={`/property/${property._id}`} >
                    <img
                      class="card-img-top h-sm-100 w-sm-100"
                      src={property.mainPhoto}
                      alt="Card image cap"
                      style={{
                        objectFit: "fit",
                        width: "100%",
                        height: "250px",
                      }}
                    />
                  </Link>
                  <div class="card-body">
                    <div class="card-text location">
                      <h6 class="pl-3 pr-3 d-flex justify-content-center align-items-center w-5  h-5" >
                        <TiLocationOutline
                          style={{
                            color: "#fff",
                            fontSize: "1.8rem",
                            fontWeight: "bolder",
                          }}
                        />
                        <span style={{
                          color: "#fff",
                          fontSize: "1.5rem",
                          fontFamily: "600",
                          flexWrap:"wrap"
                        }}>{capitalizeFirstLetter(property.neighbourhood)}</span>
                      </h6>
                    </div>
                    <h5
                      class="size-text"
                      style={{
                        color: "#071c36",
                        fontWeight: 600,
                      }}
                    >
                      {capitalizeFirstLetter(property.type)}{" "}
                      {capitalizeFirstLetter(property.businessStatus)}
                    </h5>
                    <div class="d-flex align-items-center size">
                      {/* <h4 style={{ cursor: "pointer" }} class="icons icons-1" onClick={() => updateLikes(property)}>
                        <i class={`text-danger bi ${likes.length > 0 && likes[index].total_likes === 1 ? 'bi-heart-fill' : 'bi-heart'}`}></i>
                        <span class="views1">{likes.length > 0 && likes[index].total_likes}</span>
                      </h4> */}
                      {/* <h4 style={{ cursor: "pointer" }} class="icons icons-1">
                        <i class="bi bi-heart" onClick={() => updateLikes(property._id)} />
                        <span class="views1">{property.likes}</span>
                      </h4> */}
                      {/* <h6>views <span class="views">{property.views}</span></h6> */}
                      <div style={{ cursor: "pointer" }} class="flex-nowrap icons-1">
                        <span class="size " style={{color: "#071c36"}}>{property.city}</span>
                        <span class="pl-1 size" style={{color: "#071c36"}}>{property.district}</span>
                        <span class="pl-1 size" style={{color: "#071c36"}}>{property.sector}</span>
                      </div>
                    </div>
                    <div class="card-text price">
                      <h6>
                        {formatPrice(property.price)} {property.currency}
                      </h6>
                    </div>
                  </div>

                </div>

                <div
                  class="justify-content-center mt-3 hadow-lg bg-light rounded"
                  style={{ width: "300px", marginLeft: "10rem" }}
                ></div>
              </div>
            ))}{" "}
          </>
        )}

        {propertyCount > pageLimit && (
          <ReactPaginate
            previousLabel={"previous"}
            nextLabel={"next"}
            breakLabel={"..."}
            pageCount={pages}
            onPageChange={handlePageClick}
            containerClassName={"pagination justify-content-center"}
            pageClassName={"page-item"}
            pageLinkClassName={"page-link"}
            previousClassName={"page-item"}
            previousLinkClassName={"page-link"}
            nextClassName={"page-item"}
            nextLinkClassName={"page-link"}
            breakClassName={"page-item"}
            breakLinkClassName={"page-link"}
            activeClassName={"active"}
          />)}
      </div>
    </div>
  )
}

export default CommonList