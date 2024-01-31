import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import Header from "../components/Header";
import Spinner from "react-bootstrap/Spinner";
import Footer from "../components/Footer";
import { singleProperty } from "../actions/propertiesAction";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import moment from 'moment'
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import { formatPrice } from "../priceFormated";

function PropertyDetail() {

  const dispatch = useDispatch();
  const history = useHistory()

  const [label, setLabel] = useState("")
  const { id } = useParams();
  const propertyDetails = useSelector((state) => state.propertyDetails);
  const token = localStorage.getItem("token")
  const { loading, property } = propertyDetails;

  const { photo1, photo2,
    photo3, photo4,
    photo5, photo6 } = property
  const [images, setImages] = useState([])
  const [indexImage, setIndexImage] = useState([])
  const [isOpen, setOpen] = useState(false)

  useEffect(() => {
    dispatch(singleProperty(id));
  }, []);


  useEffect(() => {
    setImages([photo1, photo2,
      photo3, photo4,
      photo5, photo6])
  }, [property]);

  const handleChat = async (e) => {
    e.preventDefault();
    if (!token) {
      setTimeout(() => {
        history.push("/login")
      }, 6000);
      toast.warn("You have to be Loggedin first")
    } else {
      history.push(`/chat/${property.postedBy && property.postedBy._id}`)
    }
  }

  function capitalizeFirstLetter(string) {
    if (typeof string !== "string" || string.length === 0) {
      return string;
    }
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div style={{ marginTop: "110px", marginLeft: "10px" }}>
      <Header setLabel={setLabel} />
      <div class="container-fluid mt-5">
        <div class="row">
          {loading ? (
            <h2 class="text-center mt-5 pt-5">
              {" "}
              <Spinner
                animation="border"
                variant="dark"
                class="text-center mt-5 pt-5 w-100"
              />{" "}
            </h2>
          ) : (
            <>
              <div class="col-md-7  shadow-lg" style={{ backgroundColor: "#ffffff", borderRadius: "10px", marginBottom: "12px" }} >
                <div class="card" style={{ marginTop: "20px" }}>
                  <img class="card-img-top" src={property.mainPhoto} />
                </div>

                <div className="row no-gutters" style={{ marginBottom: "20px" }}>
                  {images.map((image, index) => (
                    <div className="col-md-3 image" >
                      <div
                        className="card w-100 h-100"
                        style={{
                          backgrounColor: "black",
                        }}
                        key={index}
                      >
                        <img
                          class="card-img-top fit"
                          src={image}
                          onClick={() => { setIndexImage(index); setOpen(true) }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div class="col-md-5">
                <div style={{ backgroundColor: "white", borderRadius: "7px" }}>
                  <p style={{ padding: "20px" }}>
                    <h4 class="des-c">Description:</h4>
                    <span class="properties">{property.description}</span>
                  </p>
                </div>
                <div class="card">
                  <div class="card-body d-flex align-items-center justify-content-around flex-wrap" >
                    <h5>
                      <Link to={`/chat/${property.postedBy && property.postedBy._id}`} onClick={handleChat} class="card-title text-center chat-with">Chat..</Link>
                    </h5>
                    <p class="card-text post">Agent:</p>
                    <h5 class="postedby text-center align-items-center" ><span class="text-uppercase">{`${property.postedBy && property.postedBy.firstname} `}</span> {`${property.postedBy && property.postedBy.lastname}  `}</h5>
                    <p class="post card-text align-items-center text-center mr-3 ml-3">
                      <i class="bi bi-telephone mr-1"></i>
                      <a href={`tel:0${property.postedBy && property.postedBy.phoneNumber}`}>
                        {`0${property.postedBy && property.postedBy.phoneNumber}`}
                      </a>
                    </p>
                  </div>
                </div>
                <div class="card mb-3">
                  <div class="card-body">
                    <div class="form-group">
                      <textarea
                        class="form-control"
                        rows="5"
                        id="comment"
                        placeholder="Write message here..."
                      ></textarea>
                    </div>
                  </div>
                  <div className="text-center ">
                    <a href="#" class="fs-4 button-bg text-light btn-lg btn-block">
                      Comment
                    </a>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
        {!loading &&
          <div class='shadow-lg' style={{ backgroundColor: "#ffffff", borderRadius: "10px", marginBottom: "20px", justifyContent: "center", alignItems: "center", width: "100%" }}>
            <div>
              {" "}
              <h4 class="justify-content-center text-center pt-2 pb-2 pl-2 m-4 text-dark">
                Additional Details
              </h4>
            </div>
            <div class="container">
              <div class="row property-detail">
                <div class="col-md-4">
                  <ul>
                    <li>
                      <span class="propertyTitle">Property type:{" "}</span>
                      <span class="properties">{capitalizeFirstLetter(property.type)}</span>
                    </li>
                    <li>
                      <span class="propertyTitle">Negotiable:{" "}</span>
                      <span class="properties">
                        {property.negotiable ? "Yes" : "No"}
                      </span>
                    </li>

                    <li>
                      <span class="propertyTitle">Price:{" "}</span>
                      <span class="properties">{formatPrice(property.price)}{" "}{property.currency}</span>
                    </li>
                  </ul>
                </div>

                <div class="col-md-4">
                  <ul>
                    <li>
                      <span class="propertyTitle">Property Name:{" "}</span>
                      <span class="properties">{capitalizeFirstLetter(property.propertyName)}</span>
                    </li>
                    <li>

                      <span class="propertyTitle"> Status:{" "}</span>
                      <span class="properties">{capitalizeFirstLetter(property.businessStatus)}</span>
                    </li>
                    <li>
                      <span class="propertyTitle">Listed date:{" "}</span>
                      <span class="properties">{moment(property.publishedOn).format("MMM Do YY")}</span>
                    </li>
                  </ul>
                </div>
                <div class="col-md-4">
                  <ul>
                    <li>
                      <span class="propertyTitle">Street:{" "}</span>
                      <span class="properties">{capitalizeFirstLetter(property.street)}</span>
                    </li>
                    <li>
                      <span class="propertyTitle">Neighbourhood:{" "}</span>
                      <span class="properties">{capitalizeFirstLetter(property.neighbourhood)}</span>
                    </li>
                    <li>
                      <span class="propertyTitle" >Location:{" "}</span>
                      <span class="properties">{capitalizeFirstLetter(property.city)}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        }
        {/* <h3 class="text-center p-4 text-dark" style={{fontStyle:"bolder"}}>Related properties</h3> */}
      </div>
      {isOpen &&
        <Lightbox
          style={{ width: "500px" }}
          mainSrc={images[indexImage]}
          nextSrc={images[(indexImage + 1) % images.length]}
          prevSrc={images[(indexImage + images.length - 1) % images.length]}
          onCloseRequest={() => setOpen(false)}
          onMovePrevRequest={() =>
            setIndexImage((indexImage + images.length - 1) % images.length,
            )
          }
          onMoveNextRequest={() =>
            setIndexImage((indexImage + 1) % images.length,
            )
          }
        />
      }
      {/* <LiveChat /> */}
      {/* <PropertySection /> */}
      {!loading && <Footer />}
    </div>
  );
}

export default PropertyDetail;

