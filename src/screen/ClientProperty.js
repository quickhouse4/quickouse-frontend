import React from 'react'

function ClientProperty() {
  return (
    <div>
        <h3
          class="text-center text-primary mt-2"
          style={{ fontWeight: "bold"}}
        >
          Property Information
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
                  <option>for sale </option>
                  <option>for rent</option>
                </select>
              </div>
            </div>
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
                  <option>residential house </option>
                  <option>apartment</option>
                  <option>commercial house</option>
                  <option>warehouse</option>
                  <option>vacant plot</option>
                  <option>offices</option>
                </select>
              </div>
            </div>
          </div>

          <div class="form-row">
            <div class="col-md-6">
              <div class="form-group">
                <label class="text-primary">Property Title</label>
                <select
                  class="form-control text-primary"
                  id="sel1"
                  onChange={onTitleChange}
                >
                  <option>house </option>
                  <option>plot</option>
                  <option>car</option>
                </select>
              </div>
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
              </div>          


          </div>         
          
          <div class="form-row">
            <div class="col-md-6">
              <div class="form-group">
                <label for="sel1" class="text-primary">
                  City
                </label>
                <select
                  class="form-control text-primary"
                  id="sel1"
                  onChange={onCityChange}
                >
                  <option>Kigali</option>
                  <option>Musanze</option>
                  <option>Rubavu</option>
                </select>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label for="sel1" class="text-primary">
                  District
                </label>
                <select
                  class="form-control text-primary"
                  id="sel1"
                  onChange={onDistrictChange}
                >
                  <option>Kicukiro</option>
                  <option>Nyarugenge</option>
                  <option>Gasabo</option>
                </select>
              </div>
            </div>
          </div>

          <div class="form-row">
            <div class="col-md-6">
              <div class="form-group">
                <label for="sel1" class="text-primary">
                  Sector
                </label>
                <select
                  class="form-control"
                  id="sel1"
                  onChange={onSectorChange}
                >
                  <option>Kicukiro</option>
                  <option>Nyarugenge</option>
                  <option>Gasabo</option>
                </select>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label for="sel1" class="text-primary">
                  Cell
                </label>
                <select
                  class="form-control text-primary"
                  id="sel1"
                  onChange={onCellChange}
                >
                  <option>Kicukiro</option>
                  <option>Nyarugenge</option>
                  <option>Gasabo</option>
                </select>
              </div>
            </div>
          </div>

          <div class="form-row">
            <div class="col-md-6">
              <div class="form-group">
                <label for="sel1" class="text-primary">
                  Village
                </label>
                <select
                  class="form-control text-primary"
                  id="sel1"
                  onChange={onVillageChange}
                >
                  <option>Kicukiro</option>
                  <option>Nyarugenge</option>
                  <option>Gasabo</option>
                </select>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label for="sel1" class="text-primary">
                  Currency
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="usr"
                  name="price"
                  onChange={onCurrencyChange}
                />
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
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label for="sel1" class="text-primary">
                  neighbourhood
                </label>
                <select
                  class="form-control text-primary"
                  id="sel1"
                  onChange={onNeighbourChange}
                >
                  <option>Kicukiro</option>
                  <option>Nyarugenge</option>
                  <option>Gasabo</option>
                </select>
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
          </div>

          <div class="form-group">
            <label class="text-primary">Main photo</label>
            <div class="file-drop-area">
              <input type="file" onChange={onFileChange} />
            </div>
          </div>
          <div class="form-group">
            <label class="text-primary">First photo</label>
            <div class="file-drop-area">
              <input type="file" onChange={onFile1Change} />
            </div>
          </div>
          <div class="form-group">
            <label class="text-primary">Second photo</label>
            <div class="file-drop-area">
              <input type="file" onChange={onFile2Change} />
            </div>
          </div>
          <div class="form-group">
            <label class="text-primary">Third photo</label>
            <div class="file-drop-area">
              <input type="file" onChange={onFile3Change} />
            </div>
          </div>
          <div class="form-group">
            <label class="text-primary">Fourth photo</label>
            <div class="file-drop-area">
              <input type="file" onChange={onFile4Change} />
            </div>
          </div>
          <div class="form-group">
            <label class="text-primary">Five photo</label>
            <div class="file-drop-area">
              <input type="file" onChange={onFile5Change} />
            </div>
          </div>
          <div class="form-group">
            <label class="text-primary">Sixth photo</label>
            <div class="file-drop-area">
              <input type="file" onChange={onFile6Change} />
            </div>
          </div>

          <div class="form-group">
            <button
              type="submit"
              class="btn btn-primary btn-lg btn-block"
              onClick={propertyRegister}
            >
              Create property
            </button>
          </div>
        </form>


      
    </div>
  )
}

export default ClientProperty
