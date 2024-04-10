import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { property, plotType } from '../Data/Rwanda'
import { Provinces, Districts, Sectors, Cells, Villages } from 'rwanda';
import { addPropertyToPublish } from "../actions/paymentAction";

const CreateProperties = () => {
  let token = localStorage.getItem("token");

  const { pubLoading } = useSelector((state) => state.publishedProperty)

  const history = useHistory()

  const dispatch = useDispatch();
  const [status, setStatus] = useState("");
  const [type, setType] = useState("");
  const [title, setTitle] = useState("");
  const [street, setStreet] = useState("");
  const [currency, setCurrency] = useState("");
  const [price, setPrice] = useState("");
  const [neighbour, setNeighbour] = useState("");
  const [negotiable, setNegotiable] = useState("");
  const [descripton, setDescription] = useState("");
  const [mainPhoto, SetMainPhoto] = useState("");
  const [photo1, setPhoto1] = useState("");
  const [photo2, setPhoto2] = useState("");
  const [photo3, setPhoto3] = useState("");
  const [photo4, setPhoto4] = useState("");
  const [photo5, setPhoto5] = useState("");
  const [photo6, setPhoto6] = useState("");
  const [province, setProvince] = useState('')
  const [district, setDistrict] = useState('')
  const [sector, setSector] = useState('')
  const [cell, setCell] = useState('')
  const [village, setVillage] = useState('')
  const [plotTypeVisible, setPlotTypeVisible] = useState(false);

  const onTitleChange = (e) => {
    const value = e.target.value;
    setTitle(value);
    if (value === "plot") {
      setPlotTypeVisible(true);
    } else {
      setPlotTypeVisible(false);
    }
  };


  const onFileChange = (e) => {
    SetMainPhoto(e.target.files[0]);
  };

  const onFile1Change = (e) => {
    setPhoto1(e.target.files[0]);
  };
  const onFile2Change = (e) => {
    setPhoto2(e.target.files[0]);
  };
  const onFile3Change = (e) => {
    setPhoto3(e.target.files[0]);
  };
  const onFile4Change = (e) => {
    setPhoto4(e.target.files[0]);
  };
  const onFile5Change = (e) => {
    setPhoto5(e.target.files[0]);
  };
  const onFile6Change = (e) => {
    setPhoto6(e.target.files[0]);
  };

  const onProvinceChange = (selectedProvince) => {
    setProvince(selectedProvince);
    setDistrict('');
    setSector('');
    setCell('');
    setVillage('');
  };

  const onDistrictChange = (selectedDistrict) => {
    setDistrict(selectedDistrict);
    setSector('');
    setCell('');
    setVillage('');
  };

  const onSectorChange = (selectedSector) => {
    setSector(selectedSector);
    setCell('');
    setVillage('');
  };

  const onCellChange = (selectedCell) => {
    setCell(selectedCell);
    setVillage('');
  };

  const onVillageChange = (selectedVillage) => {
    setVillage(selectedVillage);
  };
  const onNegotiableChange = (e) => {
    setNegotiable(e.target.value === "true");
  };
  const provincesList = Provinces();

  const propertyRegister = async (e) => {
    e.preventDefault();

    if (status === "" || status === null) {
      setStatus({ message: "Select status" });
    } else if (type === "" || type === null) {
      setType({ message: "Select type" })
    } else if (title === "" || title === null) {
      setTitle({ message: "select title" })
    } else if (descripton === "" || descripton === null) {
      setDescription({ message: "write your descripton" })
    } else if (street === "" || street === null) {
      setStreet({ message: "write your street" })
    } else if (province === "" || province === null) {
      setProvince({ message: "select your province" })
    } else if (district === "" || district === null) {
      setDistrict({ message: "select your district" })
    } else if (sector === "" || sector === null) {
      setSector({ message: "select your sector" })
    } else if (cell === "" || cell === null) {
      setCell({ message: "select your cell" })
    } else if (village === "" || village === null) {
      setVillage({ message: "select your village" })
    } else if (neighbour === "" || neighbour === null) {
      setNeighbour({ message: "set neighbour hood" })
    } else if (price === "" || price === null) {
      setPrice({ message: "set price" })
    } else if (currency === "" || currency === null) {
      setCurrency({ message: "select currency" })
    } else if (negotiable === "" || negotiable === null) {
      setNegotiable({ message: "select negotiable" })
    } else if (mainPhoto === "" || mainPhoto === null) {
      SetMainPhoto({ message: "Upload main photo" })
    } else if (photo1 === "" || photo1 === null) {
      setPhoto1({ message: "Upload photo one" })
    } else if (photo2 === "" || photo2 === null) {
      setPhoto2({ message: "Upload photo two" })
    } else if (photo3 === "" || photo3 === null) {
      setPhoto3({ message: "Upload photo three" })
    } else if (photo4 === "" || photo4 === null) {
      setPhoto4({ message: "Upload photo four" })
    } else if (photo5 === "" || photo5 === null) {
      setPhoto5({ message: "Upload photo five" })
    } else if (photo6 === "" || photo6 === null) {
      setPhoto6({ message: "Upload photo six" })
    } else {
      const formData = new FormData();
      formData.append("businessStatus", status);
      formData.append("type", type);
      formData.append("propertyName", title);
      formData.append("description", descripton);
      formData.append("street", street);
      formData.append("city", province);
      formData.append("district", district);
      formData.append("sector", sector);
      formData.append("cell", cell);
      formData.append("village", village);
      formData.append("neighbourhood", neighbour);
      formData.append("price", price);
      formData.append("currency", currency);
      formData.append("negotiable", negotiable);
      formData.append("mainPhoto", mainPhoto);
      formData.append("photo1", photo1);
      formData.append("photo2", photo2);
      formData.append("photo3", photo3);
      formData.append("photo4", photo4);
      formData.append("photo5", photo5);
      formData.append("photo6", photo6);
      for (const pair of formData.entries()) {
        console.log(`${pair[0]}, ${pair[1]}`);
      }

      dispatch(addPropertyToPublish(formData, history));
      // dispatch(createProperty(formData, token, history));
    };
  }

  console.log("title", title);

  return (
    <>
      <div class="col-md-10 col-xl-10" style={{ marginTop: "120px" }} >
        <h3 class="text-center  mt-2" style={{ fontWeight: "bold" }}>
          Property Information
        </h3>
        <form class="mt-4">
          <div class="form-row">
            <div class="col-md-6">
              <div class="form-group">
                <label htmlFor="se" class="">
                  Business status
                </label>
                <select
                  class="form-control"
                  id="sel1"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option>Select bussiness status</option>

                  <option>for sale </option>
                  <option>for rent</option>
                </select>
                <span class="text-danger">{status.message}</span>
              </div>
            </div>

            <div class="col-md-6">
              <div class="form-group">
                <label class="">Property Title</label>
                <select
                  class="form-control "
                  id="sel1"
                  onChange={onTitleChange}
                >
                  <option>Select Propery title</option>
                  <option>house </option>
                  <option>plot</option>
                </select>
                <span class="text-danger">{title.message}</span>
              </div>
            </div>
          </div>

          <div class="form-row">
            <div class="col-md-6">
              <div class="form-group">
                <label htmlFor="" class="">
                  Property Type
                </label>
                <select
                  class="form-control "
                  id="sel1"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                >
                  <option>Select Propery type</option>

                  {title && title === 'plot' && plotTypeVisible ? (
                    plotType.map((type, index) => (
                      <option key={index} value={type}>
                        {type}
                      </option>
                    ))) : (property.map((type1, index) => (
                      <option key={index} value={type1}>
                        {type1}
                      </option>
                    )))
                  }
                </select>
                <span class="text-danger">{type.message}</span>
              </div>
            </div>

            <div class="col-md-6">
              <div class="form-group">
                <label class="">Street</label>
                <input
                  type="text"
                  class="form-control"
                  id="usr"
                  name="street"
                  value={typeof street === 'object' ? '' : street}
                  onChange={(e) => setStreet(e.target.value)}
                />
                {street && typeof street === 'object' && street.message && (
                  <span class="text-danger">{street.message}</span>
                )}
              </div>
            </div>
          </div>

          <div class="form-row">
            <div class="col-md-6">
              <div class="form-group">
                <label for="" class="">
                  Province
                </label>
                <select
                  className="form-control"
                  id="provinceSelect"
                  value={province}
                  onChange={(e) => onProvinceChange(e.target.value)}
                >
                  <option >-- Select Province --</option>
                  {provincesList && provincesList?.map((province, index) => (
                    <option key={index} value={province}>
                      {province}
                    </option>
                  ))}
                </select>
                <span class="text-danger">{province.toString().message}</span>
              </div>
            </div>

            <div class="col-md-6">
              <div class="form-group">
                <label for="" class="">
                  District
                </label>
                <select
                  className="form-control"
                  id="districtSelect"
                  value={district}
                  onChange={(e) => onDistrictChange(e.target.value)}
                >
                  <option>-- Select District --</option>
                  {
                    province && (Districts(province)?.map((district, index) => (
                      <option key={index} value={district}>
                        {district}
                      </option>

                    ))
                    )
                  }
                </select>
                <span class="text-danger">{district.toString().message}</span>
              </div>
            </div>
          </div>

          <div class="form-row">
            <div class="col-md-6">
              <div class="form-group">
                <label htmlFor="sectorSelect">
                  Sector
                </label>
                <select
                  className="form-control"
                  id="sectorSelect"
                  value={sector}
                  onChange={(e) => onSectorChange(e.target.value)}
                >
                  <option>-- Select Sector --</option>
                  {province && district && Sectors(province, district).map((sector, index) => (
                    <option key={index} value={sector}>
                      {sector}
                    </option>
                  ))}
                </select>
                <span class="text-danger">{sector.toString().message}</span>
              </div>
            </div>

            <div class="col-md-6">
              <div class="form-group">
                <label htmlFor="sectorSelect">
                  Cell
                </label>
                <select
                  className="form-control"
                  id="sectorSelect"
                  value={cell}
                  onChange={(e) => onCellChange(e.target.value)}
                >
                  <option>-- Select Cell --</option>
                  {
                    province && district && sector && Cells(province, district, sector).map((cell, index) => (
                      <option key={index} value={cell}>
                        {cell}
                      </option>
                    ))
                  }
                </select>
                <span class="text-danger">{cell.toString().message}</span>
              </div>
            </div>
          </div>
          <div class="form-row">
            <div class="col-md-6">
              <div class="form-group">
                <label htmlFor="sectorSelect">
                  Village
                </label>
                <select
                  className="form-control"
                  id="sectorSelect"
                  value={village}
                  onChange={(e) => onVillageChange(e.target.value)}
                >
                  <option>-- Select Village --</option>
                  {
                    province && district && sector && cell && Villages(province, district, sector, cell).map((village, index) => (
                      <option key={index} value={village}>
                        {village}
                      </option>
                    ))
                  }
                </select>
                <span class="text-danger">{village.toString().message}</span>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label htmlFor="se" class="">
                  Currency
                </label>
                <select
                  class="form-control"
                  id="sel1"
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                >
                  <option>Select Currency</option>

                  <option>rwf </option>
                  <option>usd</option>
                </select>
                <span class="text-danger">{currency.message}</span>
              </div>
            </div>
          </div>
          <div class="form-row">
            <div class="col-md-6">
              <div class="form-group">
                <label class="">Price</label>
                <input
                  type="Number"
                  class="form-control"
                  id="usr"
                  name="price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
                <span class="text-danger">{price.message}</span>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label for="sel1" class="">
                  neighbourhood
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="sel1"
                  name="neighbour"
                  value={typeof neighbour === 'object' ? '' : neighbour}
                  onChange={(e) => setNeighbour(e.target.value)}
                />
                <span class="text-danger">{neighbour.message}</span>
              </div>
            </div>

            <div class="col-md-6">
              <div class="form-group mt-4">
                <label class="m-2 "> Negotiable</label>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="negotiation"
                    value="true"
                    checked={negotiable === true}
                    onChange={onNegotiableChange}
                  />
                  <label class="form-check-label" for="inlineRadio1">
                    Yes
                  </label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="negotiation"
                    value="false"
                    checked={negotiable === false}
                    onChange={onNegotiableChange}
                  />
                  <label class="form-check-label" for="inlineRadio2">
                    No
                  </label>
                </div>
                <span class="text-danger">{negotiable.message}</span>
              </div>
            </div>
          </div>

          <div class="form-group">
            <label class="">Property Description</label>
            <textarea
              class="form-control"
              rows="5"
              id="comment"
              value={typeof descripton === 'object' ? '' : descripton}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            <span class="text-danger">{descripton.message}</span>
          </div>

          <div class="form-group">
            <label class=" w-100" htmlFor="main-photo">Main photo
              <div class="file-drop-area">
                <input type="file" onChange={onFileChange} id="main-photo" />
              </div>
            </label>
            <span class="text-danger">{mainPhoto.message}</span>
          </div>
          <div class="form-group">
            <label class="w-100" htmlFor="photo1">First photo
              <div class="file-drop-area">
                <input type="file" onChange={onFile1Change} id="photo1" />
              </div>
            </label>
            <span class="text-danger">{photo1.message}</span>
          </div>
          <div class="form-group">
            <label class="w-100" htmlFor="photo2">Second photo
              <div class="file-drop-area">
                <input type="file" onChange={onFile2Change} id="photo2" />
              </div>
            </label>
            <span class="text-danger">{photo2.message}</span>
          </div>
          <div class="form-group">
            <label class="w-100" htmlFor="photo3">Third photo
              <div class="file-drop-area">
                <input type="file" onChange={onFile3Change} id="photo3" />
              </div>
            </label>
            <span class="text-danger">{photo3.message}</span>
          </div>
          <div class="form-group">
            <label class="w-100" htmlFor="photo4">Fourth photo
              <div class="file-drop-area">
                <input type="file" onChange={onFile4Change} id="photo4" />
              </div>
            </label>
            <span class="text-danger">{photo4.message}</span>
          </div>
          <div class="form-group">
            <label class="w-100" htmlFor="photo5">Five photo
              <div class="file-drop-area">
                <input type="file" onChange={onFile5Change} id="photo5" />
              </div>
            </label>
            <span class="text-danger">{photo5.message}</span>
          </div>
          <div class="form-group">
            <label class="w-100" htmlFor="photo6">Sixth photo
              <div class="file-drop-area">
                <input type="file" onChange={onFile6Change} id="photo6" />
              </div>
            </label>
            <span class="text-danger">{photo6.message}</span>
          </div>

          <div class="form-group">
            {pubLoading ? (
              <button
                class="btn btn-block  login-btn"
                type="button"
                disabled
              >
                <span
                  class="spinner-grow spinner-grow-sm"
                  role="status"
                  aria-hidden="true"
                ></span>
                Loading...
              </button>
            ) : (
              <button
                type="submit"
                class="btn login-btn btn-lg btn-block"
                onClick={propertyRegister}
              >
                List Your property
              </button>
            )}
          </div>
        </form>
      </div>
    </>
  );
}

export default CreateProperties;
