
import {
  FILTER_VACANT_PLOT_REQUEST,
  FILTER_VACANT_PLOT_SUCCESS,
  FILTER_VACANT_PLOT_FAIL,

  FILTER_VACANT_PLOT_SALE_REQUEST,
  FILTER_VACANT_PLOT_SALE_SUCCESS,
  FILTER_VACANT_PLOT_SALE_FAIL,

  FILTER_WAREHOUSE_REQUEST,
  FILTER_WAREHOUSE_SUCCESS,
  FILTER_WAREHOUSE_FAIL,

  FILTER_WAREHOUSE_SALE_REQUEST,
  FILTER_WAREHOUSE_SALE_SUCCESS,
  FILTER_WAREHOUSE_SALE_FAIL,

  FILTER_COMMERCIAL_REQUEST,
  FILTER_COMMERCIAL_SUCCESS,
  FILTER_COMMERCIAL_FAIL,

  FILTER_COMMERCIAL_SALE_REQUEST,
  FILTER_COMMERCIAL_SALE_SUCCESS,
  FILTER_COMMERCIAL_SALE_FAIL,

  FILTER_APARTMENTS_REQUEST,
  FILTER_APARTMENTS_SUCCESS,
  FILTER_APARTMENTS_FAIL,


  FILTER_APARTMENTS_SALE_REQUEST,
  FILTER_APARTMENTS_SALE_SUCCESS,
  FILTER_APARTMENTS_SALE_FAIL,

  FILTER_RESIDENTIAL_REQUEST,
  FILTER_RESIDENTIAL_SUCCESS,
  FILTER_RESIDENTIAL_FAIL,

  FILTER_RESIDENTIAL_SALE_REQUEST,
  FILTER_RESIDENTIAL_SALE_SUCCESS,
  FILTER_RESIDENTIAL_SALE_FAIL,

  FILTER_OFFICE_REQUEST,
  FILTER_OFFICE_SUCCESS,
  FILTER_OFFICE_FAIL,

  FILTER_OFFICE_SALE_REQUEST,
  FILTER_OFFICE_SALE_SUCCESS,
  FILTER_OFFICE_SALE_FAIL,

  FILTER_DATA_REQUEST,
  FILTER_DATA_SUCCESS,
  FILTER_DATA_FAIL


} from "../actions/types";

export const vacantPlotFilterReducer = (state = { vacantPlotsFilters: [] }, action) => {
  switch (action.type) {
    case FILTER_VACANT_PLOT_REQUEST:
      return { plotLoading: true, vacantPlotsFilters: [] }
    case FILTER_VACANT_PLOT_SUCCESS:
      return { plotLoading: false, activeCategory: "rent", vacantPlotsFilters: action.payload };

    case FILTER_VACANT_PLOT_FAIL:
      return { plotLoading: false, plotsError: action.payload }
    default:
      return state;
  }
};

export const vacantPlotFilterSaleReducer = (state = { vacantPlotsSaleFilters: [] }, action) => {
  switch (action.type) {
    case FILTER_VACANT_PLOT_SALE_REQUEST:
      return { plotSaleLoading: true, vacantPlotsSaleFilters: [] }
    case FILTER_VACANT_PLOT_SALE_SUCCESS:
      return { plotSaleLoading: false, activeCategory: "sale", vacantPlotsSaleFilters: action.payload };
    case FILTER_VACANT_PLOT_SALE_FAIL:
      return { plotSaleLoading: false, PlotsSaleError: action.payload }
    default:
      return state;
  }
};

export const warehouseFilterReducer = (state = { warehouseFilters: [] }, action) => {
  switch (action.type) {
    case FILTER_WAREHOUSE_REQUEST:
      return { Warehouseloading: true, warehouseFilters: [] }
    case FILTER_WAREHOUSE_SUCCESS:
      //console.log("rent_reducer", action.payload.data)
      return { Warehouseloading: false, activeCategory: "rent", warehouseFilters: action.payload };
    case FILTER_WAREHOUSE_FAIL:
      return { Warehouseloading: false, warehouseError: action.payload }
    default:
      return state;
  }
};

export const warehouseFilterSaleReducer = (state = { warehouseSaleFilters: [] }, action) => {
  switch (action.type) {
    case FILTER_WAREHOUSE_SALE_REQUEST:
      return { WarehouseSaleloading: true, warehouseSaleFilters: [] }
    case FILTER_WAREHOUSE_SALE_SUCCESS:
      return { WarehouseSaleloading: false, activeCategory: "sale", warehouseSaleFilters: action.payload };

    case FILTER_WAREHOUSE_SALE_FAIL:
      return { WarehouseSaleloading: false, warehouseSaleError: action.payload }
    default:
      return state;
  }
};

export const commercialFilterReducer = (state = { commercialFilters: [] }, action) => {
  switch (action.type) {
    case FILTER_COMMERCIAL_REQUEST:
      return { commercialLoading: true, commercialFilters: [] }
    case FILTER_COMMERCIAL_SUCCESS:
      return { commercialLoading: false, activeCategory: "rent", commercialFilters: action.payload };
    case FILTER_COMMERCIAL_FAIL:
      return { commercialLoading: false, commercialError: action.payload }
    default:
      return state;
  }
};


export const commercialFilterSaleReducer = (state = { commercialSaleFilters: [] }, action) => {
  switch (action.type) {
    case FILTER_COMMERCIAL_SALE_REQUEST:
      return { commercialSaleLoading: true, commercialSaleFilters: [] }
    case FILTER_COMMERCIAL_SALE_SUCCESS:
      return { commercialSaleLoading: false, activeCategory: "sale", commercialSaleFilters: action.payload };
    case FILTER_COMMERCIAL_SALE_FAIL:
      return { commercialSaleLoading: false, commercialSaleError: action.payload }
    default:
      return state;
  }
};


export const apartmentsFilterReducer = (state = { apartmentsFilters: [] }, action) => {
  switch (action.type) {
    case FILTER_APARTMENTS_REQUEST:
      return { apartmentsLoading: true, apartmentsFilters: [] }
    case FILTER_APARTMENTS_SUCCESS:
      return { apartmentsLoading: false, activeCategory: "rent", apartmentsFilters: action.payload };
    case FILTER_APARTMENTS_FAIL:
      return { apartmentsLoading: false, apartmentError: action.payload }
    default:
      return state;
  }
};

export const apartmentsFilterSaleReducer = (state = { apartmentsSaleFilters: [] }, action) => {
  switch (action.type) {
    case FILTER_APARTMENTS_SALE_REQUEST:
      return { apartmentsSaleLoading: true, apartmentsSaleFilters: [] }
    case FILTER_APARTMENTS_SALE_SUCCESS:
      return { apartmentsSaleLoading: false, activeCategory: "sale", apartmentsSaleFilters: action.payload };
    case FILTER_APARTMENTS_SALE_FAIL:
      return { apartmentsSaleLoading: false, apartmentSaleError: action.payload }
    default:
      return state;
  }
};


export const residentialsFilterReducer = (state = { residentialsFilters: [] }, action) => {
  switch (action.type) {
    case FILTER_RESIDENTIAL_REQUEST:
      return { residentialLoading: true, residentialsFilters: [] }
    case FILTER_RESIDENTIAL_SUCCESS:
      console.log("rent_reducer1", action.payload)
      return { residentialLoading: false, activeCategory: "rent", residentialsFilters: action.payload };
    case FILTER_RESIDENTIAL_FAIL:
      return { residentialLoading: false, residentialError: action.payload }
    default:
      return state;
  }
};


export const residentialsFilterSaleReducer = (state = { residentialsSaleFilters: [] }, action) => {
  switch (action.type) {
    case FILTER_RESIDENTIAL_SALE_REQUEST:
      return { residentialSaleLoading: true, residentialsSaleFilters: [] }
    case FILTER_RESIDENTIAL_SALE_SUCCESS:
      // console.log("rent_reducer1", action.payload.data)
      return { residentialSaleLoading: false, activeCategory: "sale", residentialsSaleFilters: action.payload };
    case FILTER_RESIDENTIAL_SALE_FAIL:
      return { residentialSaleLoading: false, residentialSaleError: action.payload }
    default:
      return state;
  }
};



export const officesFilterReducer = (state = { officesFilters: [] }, action) => {
  switch (action.type) {
    case FILTER_OFFICE_REQUEST:
      return { officeLoading: true, officesFilters: [] }
    case FILTER_OFFICE_SUCCESS:
      return { officeLoading: false, activeCategory: "rent", officesFilters: action.payload };
    case FILTER_OFFICE_FAIL:
      return { officeLoading: false, officeError: action.payload }
    default:
      return state;
  }
};

export const officesFilterSaleReducer = (state = { officesSaleFilters: [] }, action) => {
  switch (action.type) {
    case FILTER_OFFICE_SALE_REQUEST:
      return { officeSaleLoading: true, officesSaleFilters: [] }
    case FILTER_OFFICE_SALE_SUCCESS:
      return { officeSaleLoading: false, activeCategory: "sale", officesSaleFilters: action.payload };
    case FILTER_OFFICE_SALE_FAIL:
      console.log(action.payload);
      return { officeSaleLoading: false, officeSaleError: action.payload }
    default:
      return state;
  }
};
