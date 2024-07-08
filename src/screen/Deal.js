import React, { useState, useEffect } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { createDeal } from '../actions/dealAction'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { propertyType, plotType } from '../Data/Rwanda'
import { Provinces, Districts, Sectors, Cells, Villages } from 'rwanda';

const Deal = () => {

    const [label, setLabel] = useState()
    let token = localStorage.getItem("token");
    const dealProperty = useSelector((state) => state.createDeal)
    const { loading } = dealProperty
    const history = useHistory()
    const dispatch = useDispatch();
    const [title, setTitle] = useState({})
    const [conditions, setConditions] = useState({})
    const [description, setDescription] = useState({})
    const [type, setType] = useState({})
    const [businessStatus, setBusinessStatus] = useState({})
    const [price, setPrice] = useState({})
    const [currency, setCurrency] = useState({})
    const [province, setProvince] = useState('')
    const [district, setDistrict] = useState('')
    const [sector, setSector] = useState('')
    const [cell, setCell] = useState('')
    const [village, setVillage] = useState('')
    const [plotTypeVisible, setPlotTypeVisible] = useState(false);


    const onTitleChange = (e) => {
        var em = e.target.value;
        if (em != "") {
            setTitle({ value: em });
            if (em === "Plot") {
                setPlotTypeVisible(true)
            }
            else {
                setPlotTypeVisible(false)
            }
        } else {
            setTitle({ value: em, message: "Write your Title" });
        }
    };

    const onCurrencyChange = (e) => {

        var em = e.target.value;
        if (em != "") {
            setCurrency({ value: em });
        } else {
            setCurrency({ value: em, message: "selelct your currency" });
        }
    };
    const onConditionsChange = (e) => {
        var em = e.target.value;
        if (em != "") {
            setConditions({ value: em });
        } else {
            setConditions({ value: em, message: "Tell us your conditions" });
        }
    };
    const onDescriptionChange = (e) => {
        var em = e.target.value;
        if (em != "") {
            setDescription({ value: em });
        } else {
            setDescription({ value: em, message: "Your descriptions" });
        }
    };

    const onPriceChange = (e) => {
        var em = e.target.value;
        if (em != "") {
            setPrice({ value: em });
        } else {
            setPrice({ value: em, message: "tell us your price" });
        }
    }
    const onCategoryChange = (e) => {
        var em = e.target.value;
        if (em != "") {
            setBusinessStatus({ value: em });
        } else {
            setBusinessStatus({ value: em, message: "Select Your Category" });
        }
    }
    const onTypeChange = (e) => {
        var em = e.target.value;
        if (em != "") {
            setType({ value: em });
        } else {
            setType({ value: em, message: "Select Your Type" });
        }
    }

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

    const handleDealer = async (e) => {
        e.preventDefault();
        if (title.value == "" || title.value == null) {
            setTitle({ message: "write title" });
        } else if (currency.value == "" || currency.value == null) {
            setCurrency({ message: "write your currency" })
        }
        else if (province == "" || province == null) {
            setProvince({ message: "Select your Province" })
        } else if (district == "" || district == null) {
            setDistrict({ message: "Select your district" })
        } else if (sector == "" || sector == null) {
            setSector({ message: "Select your sector" })
        } 
        else if (cell == "" || cell == null) {
            setCell({ message: "Select your cell" })
        } 
        else if (village == "" || village == null) {
            setVillage({ message: "Select your village" })
        } 
        else if (conditions.value == "" || conditions.value == null) {
            setConditions({ message: "Tell us your conditions" })
        } else if (description.value == "" || description.value == null) {
            setDescription({ message: "Your descriptions" })
        } else if (businessStatus.value == "" || businessStatus.value == null) {
            setBusinessStatus({ message: "Select Your Category" })
        } else if (type.value == "" || type.value == null) {
            setType({ message: "Select Your Type" })
        } else if (price.value == "" || price.value == null) {
            setPrice({ message: "Tell us your price" })
        } else {
            const payload = {
                title: title.value,
                type: type.value,
                currency: currency.value,
                conditions: conditions.value,
                description: description.value,
                businessStatus: businessStatus.value,
                price: price.value,
                province: province,
                district: district,
                sector: sector,
                cell: cell,
                village: village
            }

            dispatch(createDeal(payload, token, history))
        }
    }

    return (
        <>
            <Header setLabel={setLabel} />
            <div style={{ marginTop: "130px" }}>
                {/* <div className="">
                    <div className="text-center">
                        <h3 className="login-header" class="display-5 fw-bold">Deal for Property</h3>
                    </div>
                </div> */}

                <div className="my-5 px-3">
                    <form className="m-auto px-4 py-5 rounded shadow" style={{ maxWidth: "600px" }}>
                        <div className="mb-4 text-center">
                        </div>
                        <fieldset>
                            <div class="form-outline mb-4">
                                <div class="form-floating">
                                    <select
                                        class="form-control "
                                        id="sel1"
                                        onChange={onTitleChange}
                                    >
                                        <option>Property Title</option>
                                        <option>House </option>
                                        <option>Plot</option>
                                    </select>
                                    <span class="text-danger">{type.message}</span>
                                </div>
                            </div>
                            <div className="form-outline mb-4">
                                <div className="form-floating">
                                    <select
                                        class="form-control "
                                        id="sel1"
                                        onChange={onTypeChange}
                                    >
                                        <option>Property Type</option>
                                        {title.value === 'Plot' && plotTypeVisible ?
                                            plotType.map((type, index) => (
                                                <option key={index} value={type}>
                                                    {type}
                                                </option>
                                            )) : propertyType.map((type, index) => (
                                                <option key={index} value={type}>
                                                    {type}
                                                </option>
                                            ))
                                        }

                                        {/* <option>Plot(Ikibanza)</option>
                                        <option>Office</option>
                                        <option>Apartments</option>
                                        <option>Warehouse</option>
                                        <option>Residentials</option>
                                        <option>Commercial</option> */}
                                    </select>
                                    <span class="text-danger">{title.message}</span>
                                </div>
                            </div>
                            <div class="form-outline mb-4">
                                <div class="form-floating">
                                    <select
                                        class="form-control "
                                        id="sel1"
                                        onChange={onCategoryChange}
                                    >
                                        <option>Business Status</option>
                                        <option>For Rent </option>
                                        <option>For Buy</option>
                                        <option>For Sale</option>
                                        <option>For Rent Out</option>
                                    </select>
                                    <span class="text-danger">{businessStatus.message}</span>
                                </div>
                            </div>
                            <div class="form-outline mb-4">
                                <div class="form-floating">
                                    <select
                                        class="form-control "
                                        id="sel1"
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
                                    <span class="text-danger">{province && province.message}</span>
                                </div>
                            </div>
                            <div class="form-outline mb-4">
                                <div class="form-floating">
                                    <select
                                        class="form-control "
                                        id="sel1"
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
                                    <span class="text-danger">{district && district.message}</span>
                                </div>
                            </div>
                            <div class="form-outline mb-4">
                                <div class="form-floating">
                                    <select
                                        class="form-control "
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
                                    <span class="text-danger">{sector && sector.message}</span>
                                </div>
                            </div>
                            <div class="form-outline mb-4">
                                <div class="form-floating">
                                    <select
                                        class="form-control "
                                        value={cell}
                                        onChange={(e) => onCellChange(e.target.value)}
                                    >
                                        <option>-- Select Cell --</option>
                                        {
                                            sector && Cells(province, district, sector).map((cell, index) => (
                                                <option key={index} value={cell}>
                                                    {cell}
                                                </option>
                                            ))
                                        }
                                    </select>
                                    <span class="text-danger">{cell.message}</span>
                                </div>
                            </div>
                            <div class="form-outline mb-4">
                                <div class="form-floating">
                                    <select
                                        class="form-control "
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
                                    <span class="text-danger">{village && village.message}</span>
                                </div>
                            </div>
                            <div className="form-outline mb-4">
                                <div className="form-floating">
                                    <input
                                        onChange={onConditionsChange}
                                        type="text"
                                        name="conditions"
                                        className="form-control"
                                        placeholder="Conditions"
                                    />
                                    <span class="text-danger">{conditions.message}</span>
                                    <label htmlFor="conditions">Conditions</label>
                                </div>
                            </div>
                            <div class="form-outline mb-4">
                                <div class="form-floating">
                                    <select
                                        class="form-control "
                                        id="sel1"
                                        onChange={onCurrencyChange}
                                    >
                                        <option>Currency</option>
                                        <option>USD</option>
                                        <option>RWF</option>
                                    </select>
                                    <span class="text-danger">{currency.message}</span>
                                </div>
                            </div>
                            <div className="form-outline mb-4">
                                <div className="form-floating">
                                    <input
                                        onChange={onPriceChange}
                                        type="text"
                                        name="conditions"
                                        className="form-control"
                                        placeholder="Conditions"
                                    />
                                    <span class="text-danger">{price.message}</span>
                                    <label htmlFor="conditions">Price</label>
                                </div>
                            </div>

                            <div className="form-outline mb-4">
                                <div className=" form-floating">

                                    <textarea
                                        id="floatingTextarea2"
                                        style={{ height: "100px" }}
                                        name='description'
                                        onChange={onDescriptionChange}
                                        className="form-control"
                                        placeholder="Description"

                                    ></textarea>
                                    <span class="text-danger">{description.message}</span>
                                    <label for="floatingTextarea2">Description</label>
                                </div>
                            </div>

                            <div className="row px-2">
                                {loading ? (
                                    <button class="btn btn-block  login-btn" type="button" disabled>
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
                                        className="btn login-btn btn-lg py-3 rounded btn-block mb-4"
                                        onClick={handleDealer}
                                    >
                                        Place Your Order
                                    </button>
                                )}
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Deal