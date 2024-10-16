import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { createSpecialProperty } from "../actions/propertiesAction";
import { property, plotType } from '../Data/Rwanda'
import { Provinces, Districts, Sectors, Cells, Villages } from 'rwanda';
import { addPropertyToPublish } from "../actions/paymentAction";


function CreateSpecialProperty() {

  const propertyCreate = useSelector((state) => state.createSpecialProperty);

  const { loading } = propertyCreate;
  const { pubLoading } = useSelector((state)=> state.publishedProperty)
  let token = localStorage.getItem("token");

  const dispatch = useDispatch()
  const history = useHistory();
  const [status, setStatus] = useState({});
  const [type, setType] = useState({});
  const [title, setTitle] = useState({});
  const [street, setStreet] = useState({});
  const [currency, setCurrency] = useState({});
  const [price, setPrice] = useState({});
  const [neighbour, setNeighbour] = useState({});
  const [negotiable, setNegotiable] = useState({});
  const [descripton, setDescription] = useState({});
  const [mainPhoto, SetMainPhoto] = useState({});
  const [photo1, setPhoto1] = useState({});
  const [photo2, setPhoto2] = useState({});
  const [photo3, setPhoto3] = useState({});
  const [photo4, setPhoto4] = useState({});
  const [photo5, setPhoto5] = useState({});
  const [photo6, setPhoto6] = useState({});
  const [province, setProvince] = useState('')
  const [district, setDistrict] = useState('')
  const [sector, setSector] = useState('')
  const [cell, setCell] = useState('')
  const [village, setVillage] = useState('')
  const [plotTypeVisible, setPlotTypeVisible] = useState(false);

  const onStatusChange = (e) => {
    var em = e.target.value;
    if (em != "") {
      setStatus({ value: em });
    } else {
      setStatus({ value: em, message: "Select status" });
    }
  };

  const onTypeChange = (e) => {
    var em = e.target.value;
    if (em != "") {
      setType({ value: em });
    } else {
      setType({ value: em, message: "Select Type" });
    }
  };

  const onTitleChange = (e) => {
    var em = e.target.value;
    if (em != "") {
      setTitle({ value: em });
      if (em === "plot") {
        setPlotTypeVisible(true)
      }
      else {
        setPlotTypeVisible(false)
      }
    } else {
      setTitle({ value: em, message: "Write your Title" });
    }
  };

  const onStreetChange = (e) => {
    var em = e.target.value;
    if (em != "") {
      setStreet({ value: em });
    } else {
      setStreet({ value: em, message: "Write Street" });
    }
  };

  const onCurrencyChange = (e) => {
    var em = e.target.value;
    if (em != "") {
      setCurrency({ value: em });
    } else {
      setCurrency({ value: em, message: "Set currency" });
    }
  };

  const onPriceChange = (e) => {
    var em = e.target.value;
    if (em != "") {
      setPrice({ value: em });
    } else {
      setPrice({ value: em, message: "Set price" });
    }
  };

  const onNeighbourChange = (e) => {
    var em = e.target.value;
    if (em != "") {
      setNeighbour({ value: em });
    } else {
      setNeighbour({ value: em, message: "Set neighbour hood" });
    }
  };

  const onNeogotiableChange = (e) => {
    var em = e.target.value;
    if (em != "") {
      setNegotiable({ value: em });
    } else {
      setNegotiable({ value: em, message: "Select neighbourhood" });
    }
  };

  const onDescriptionChange = (e) => {
    var em = e.target.value;
    if (em != "") {
      setDescription({ value: em });
    } else {
      setDescription({ value: em, message: "Select Description" });
    }
  };
  const onFileChange = (e) => {
    var em = e.target.files[0];
    if (em != "") {
      SetMainPhoto({ value: em });
    } else {
      SetMainPhoto({ value: em, message: "Upload main photo" });
    }
  };

  const onFile1Change = (e) => {
    var em = e.target.files[0];
    if (em != "") {
      setPhoto1({ value: em });
    } else {
      setPhoto1({ value: em, message: "Upload photo one" });
    }
  };
  const onFile2Change = (e) => {
    var em = e.target.files[0];
    if (em != "") {
      setPhoto2({ value: em });
    } else {
      setPhoto2({ value: em, message: "Upload file two" });
    }
  };
  const onFile3Change = (e) => {
    var em = e.target.files[0];
    if (em != "") {
      setPhoto3({ value: em });
    } else {
      setPhoto3({ value: em, message: "Upload file three" });
    }
  };
  const onFile4Change = (e) => {
    var em = e.target.files[0];
    if (em != "") {
      setPhoto4({ value: em });
    } else {
      setPhoto4({ value: em, message: "Upload file four" });
    }
  };
  const onFile5Change = (e) => {
    var em = e.target.files[0];
    console.log(em)
    if (em != "") {
      setPhoto5({ value: em });
    } else {
      setPhoto5({ value: em, message: "Upload file five" });
    }
  };
  const onFile6Change = (e) => {
    var em = e.target.files[0];
    if (em != "") {
      setPhoto6({ value: em });
    } else {
      setPhoto6({ value: em, message: "Upload file six" });
    }
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

  const provincesList = Provinces();
  const propertyRegister = async (e) => {
    e.preventDefault();
    if (status.value == "" || status.value == null) {
      setStatus({ message: "Select status" });
    } else if (type.value == "" || type.value == null) {
      setType({ message: "Select type" })
    } else if (title.value == "" || title.value == null) {
      setTitle({ message: "write your title" })
    } else if (descripton.value == "" || descripton.value == null) {
      setDescription({ message: "write your descripton" })
    } else if (street.value == "" || street.value == null) {
      setStreet({ message: "write your street" })
    } else if (province == "" || province == null) {
      setProvince({ message: "Select your Province" })
    } else if (district == "" || district == null) {
      setDistrict({ message: "Select your district" })
    } else if (sector == "" || sector == null) {
      setSector({ message: "Select your sector" })
    } else if (cell == "" || cell == null) {
      setCell({ message: "write your cell" })
    } else if (village == "" || village == null) {
      setVillage({ message: "write your village" })
    } else if (neighbour.value == "" || neighbour.value == null) {
      setNeighbour({ message: "set neighbour hood" })
    } else if (price.value == "" || price.value == null) {
      setPrice({ message: "set price" })
    } else if (currency.value == "" || currency.value == null) {
      setCurrency({ message: "select currency" })
    } else if (negotiable.value == "" || negotiable.value == null) {
      setNegotiable({ message: "select negotiable" })
    } else if (mainPhoto.value == "" || mainPhoto.value == null) {
      SetMainPhoto({ message: "Upload main photo" })
    } else if (photo1.value == "" || photo1.value == null) {
      setPhoto1({ message: "Upload photo one" })
    } else if (photo2.value == "" || photo2.value == null) {
      setPhoto2({ message: "Upload photo two" })
    } else if (photo3.value == "" || photo3.value == null) {
      setPhoto3({ message: "Upload photo three" })
    } else if (photo4.value == "" || photo4.value == null) {
      setPhoto4({ message: "Upload photo four" })
    } else if (photo5.value == "" || photo5.value == null) {
      setPhoto5({ message: "Upload photo five" })
    } else if (photo6.value == "" || photo6.value == null) {
      setPhoto6({ message: "Upload photo six" })
      console.log("message");
    } else {
      const formData = new FormData();
      formData.append("businessStatus", status.value);
      formData.append("type", type.value);
      formData.append("propertyName", title.value);
      formData.append("description", descripton.value);
      formData.append("street", street.value);
      formData.append("city", province);
      formData.append("district", district);
      formData.append("sector", sector);
      formData.append("cell", cell);
      formData.append("village", village);
      formData.append("neighbourhood", neighbour.value);
      formData.append("price", price.value);
      formData.append("currency", currency.value);
      formData.append("negotiable", negotiable.value);
      formData.append("mainPhoto", mainPhoto.value);
      formData.append("photo1", photo1.value);
      formData.append("photo2", photo2.value);
      formData.append("photo3", photo3.value);
      formData.append("photo4", photo4.value);
      formData.append("photo5", photo5.value);
      formData.append("photo6", photo6.value);
      for (const pair of formData.entries()) {
        console.log(`${pair[0]}, ${pair[1]}`);
      }
        dispatch(addPropertyToPublish(formData, history));
        //await dispatch(createSpecialProperty(formData, token, history));
    }

  };

  return (
    <>
      <div class="col-md-9" style={{ marginTop: "120px" }}>
        <h3
          class="text-center text-primary mt-2"
          style={{ fontWeight: "bold" }}
        >
          Special Property Information
        </h3>

        <form class="mt-5">
          <div class="form-row">
            <div class="col-md-6">
              <div class="form-group">
                <label for="se" class="text-primary">
                  Business status
                </label>
                <select
                  class="form-control text-primary"
                  id="sel1"
                  onChange={onStatusChange}
                >
                  <option>Select bussiness status</option>
                  <option>For sale </option>
                  <option>For rent</option>
                </select>
                <span class="text-danger">{status.message}</span>
              </div>
            </div>

            

            <div class="col-md-6">
              <div class="form-group">
                <label class="text-primary">Property Title</label>
                <select
                  class="form-control text-primary"
                  id="sel1"
                  onChange={onTitleChange}
                >
                  <option>Select Property Title</option>
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
                <label for="" class="text-primary">
                  Property Type
                </label>
                <select
                  class="form-control text-primary"
                  id="sel1"
                  onChange={onTypeChange}
                >
                  <option>Select Property Type</option>
                  {title && title.value === 'plot' && plotTypeVisible ? (
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
                  {/* <option>Residential house </option>
                  <option>Apartment</option>
                  <option>Commercial house</option>
                  <option>Warehouse</option>
                  <option>Vacant plot</option>
                  <option>Offices</option> */}
                </select>
                <span class="text-danger">{type.message}</span>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label class="text-primary">Street</label>
                <input
                  type="text"
                  class="form-control"
                  id="usr"
                  name="street"
                  onChange={onStreetChange}
                />
                <span class="text-danger">{street.message}</span>
              </div>
            </div>
          </div>

          <div class="form-row">
            <div class="col-md-6">
              <div class="form-group">
                <label for="" class="text-primary">
                  Province
                </label>
                <select
                  className="form-control text-primary"
                  id="provinceSelect"
                  value={province}
                  onChange={(e) => onProvinceChange(e.target.value)}
                >
                  <option >-- Select Province --</option>
                  {provincesList && provincesList.map((province, index) => (
                    <option key={index} value={province}>
                      {province}
                    </option>
                  ))}
                </select>
                <span class="text-danger">{province.message}</span>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label for="" class="text-primary">
                  District
                </label>
                <select
                  className="form-control text-primary"
                  id="districtSelect"
                  value={district}
                  onChange={(e) => onDistrictChange(e.target.value)}
                >
                  <option>-- Select District --</option>
                  {
                    province && Districts(province).map((district, index) => (
                      <option key={index} value={district}>
                        {district}
                      </option>
                    ))
                  }
                </select>
                <span class="text-danger">{district.message}</span>
              </div>
            </div>
          </div>

          <div class="form-row">
            <div class="col-md-6">
              <div class="form-group">
                <label htmlFor="sectorSelect" class="text-primary">
                  Sector
                </label>
                <select
                  className="form-control text-primary"
                  id="sectorSelect"
                  value={sector}
                  onChange={(e) => onSectorChange(e.target.value)}
                >
                  <option>-- Select Sector --</option>
                  {district && Sectors(province, district).map((sector, index) => (
                    <option key={index} value={sector}>
                      {sector}
                    </option>
                  ))}
                </select>
                <span class="text-danger">{sector.message}</span>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label htmlFor="sectorSelect" class="text-primary">
                  Cell
                </label>
                <select
                  className="form-control text-primary"
                  id="sectorSelect"
                  value={cell}
                  onChange={(e) => onCellChange(e.target.value)}
                >
                  <option>-- Select Cell --</option>
                  {sector && Cells(province, district, sector).map((cell, index) => (
                    <option key={index} value={cell}>
                      {cell}
                    </option>
                  ))}
                </select>
                <span class="text-danger">{cell.message}</span>
              </div>
            </div>
          </div>

          <div class="form-row">
            <div class="col-md-6">
              <div class="form-group">
                <label htmlFor="sectorSelect" class="text-primary">
                  Village
                </label>
                <select
                  className="form-control text-primary"
                  id="sectorSelect"
                  value={village}
                  onChange={(e) => onVillageChange(e.target.value)}
                >
                  <option>-- Select Village --</option>
                  {cell && Villages(province, district, sector, cell).map((village, index) => (
                    <option key={index} value={village}>
                      {village}
                    </option>
                  ))}
                </select>
                <span class="text-danger">{village.message}</span>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label for="sel1" class="text-primary">
                  Currency
                </label>
                <select
                  class="form-control text-primary "
                  id="usr"
                  name="price"
                  onChange={onCurrencyChange}
                >
                  <option>Select Currency</option>
                  <option>RWF </option>
                  <option>USD</option>
                </select>
                <span class="text-danger">{currency.message}</span>
              </div>
            </div>
          </div>
          <div class="form-row">
            <div class="col-md-6">
              <div class="form-group">
                <label class="text-primary">Price</label>
                <input
                  type="Number"
                  class="form-control"
                  id="usr"
                  name="price"
                  onChange={onPriceChange}
                />
                <span class="text-danger">{price.message}</span>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label for="sel1" class="text-primary">
                  neighbourhood
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="usr"
                  name="neighbourhood"
                  onChange={onNeighbourChange}
                />
                <span class="text-danger">{neighbour.message}</span>
              </div>
            </div>

            <div class="col-md-6">
              <div class="form-group mt-4">
                <label class="m-2 text-primary"> Negotiable</label>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="negetition"
                    value="true"
                    onChange={onNeogotiableChange}
                  />
                  <label class="form-check-label" for="inlineRadio1">
                    Yes
                  </label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="negetition"
                    value="false"
                    onChange={onNeogotiableChange}
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
            <label class="text-primary">Property Description</label>
            <textarea
              class="form-control"
              rows="5"
              id="comment"
              onChange={onDescriptionChange}
            ></textarea>
            <span class="text-danger">{descripton.message}</span>
          </div>

          <div class="form-group">
            <label class="text-primary w-100" htmlFor="main-photo">Main photo
              <div class="file-drop-area">
                <input type="file" onChange={onFileChange} id="main-photo" />
              </div></label>
            <span class="text-danger">{mainPhoto.message}</span>
          </div>
          <div class="form-group">
            <label class="text-primary w-100" htmlFor="photo1">First photo
              <div class="file-drop-area">
                <input type="file" onChange={onFile1Change} id="photo1" />
              </div></label>
            <span class="text-danger">{photo1.message}</span>
          </div>
          <div class="form-group">
            <label class="text-primary w-100" htmlFor="photo2">Second photo
              <div class="file-drop-area">
                <input type="file" onChange={onFile2Change} id="photo2" />
              </div></label>
            <span class="text-danger">{photo2.message}</span>
          </div>
          <div class="form-group">
            <label class="text-primary w-100" htmlFor="photo3">Third photo
              <div class="file-drop-area">
                <input type="file" onChange={onFile3Change} id="photo3" />
              </div></label>
            <span class="text-danger">{photo3.message}</span>
          </div>
          <div class="form-group">
            <label class="text-primary w-100" htmlFor="photo4">Fourth photo
              <div class="file-drop-area">
                <input type="file" onChange={onFile4Change} id="photo4" />
              </div></label>
            <span class="text-danger">{photo4.message}</span>
          </div>
          <div class="form-group ">
            <label class="text-primary w-100" htmlFor="photo5">Five photo
              <div class="file-drop-area">
                <input type="file" onChange={onFile5Change} id="photo5" />
              </div></label>
            <span class="text-danger">{photo5.message}</span>
          </div>
          <div class="form-group">
            <label class="text-primary w-100" htmlFor="photo6">Sixth photo
              <div class="file-drop-area">
                <input type="file" onChange={onFile6Change} id="photo6" />
              </div></label>
            <span class="text-danger">{photo6.message}</span>
          </div>
          <div class="form-group">
            {loading ? (
              <button
                class="btn btn-primary btn-lg btn-block"
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
                class="btn btn-primary btn-lg btn-block"
                onClick={propertyRegister}
              >
                Upload property
              </button>
            )}
          </div>
        </form>
      </div>
    </>
  );
}

export default CreateSpecialProperty
