import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import {
  propertiesListReducer,
  propertiesDetailsReducer,
  createPropertyReducer,
  SpecialPropertiesListReducer,
  createSpecialPropertyReducer,
  getAllDataReducer,
  propertiesForRentListReducer,
  propertiesForSaleListReducer,
} from "./reducers/propertiesReducers";

import { activeCategoryReducer } from "./reducers/categoryReducer";
import {
  getAllChatReducers,
  getMessagesReducer,
  socketReducer,
  userReducer
} from "./reducers/socketReducer";

import {
  vacantPlotFilterReducer,
  vacantPlotFilterSaleReducer,
  warehouseFilterReducer,
  warehouseFilterSaleReducer,
  commercialFilterReducer,
  commercialFilterSaleReducer,
  apartmentsFilterReducer,
  apartmentsFilterSaleReducer,
  officesFilterReducer,
  officesFilterSaleReducer,
  residentialsFilterReducer,
  residentialsFilterSaleReducer,

} from "./reducers/propertiesFilterReducer";

import {
  AllUserReducer,
  forgotPasswordReducer,
  getUserReducer,
  resetPasswordReducer,
  userUpdateReducer,
  userDeleteReducer,
  userRoleReducer
} from "./reducers/userReducers";
import {
  createDealReducer,
  dealListReducer,
  getOneDealReducer,
  MyDealReducer
} from "./reducers/dealReducer";
import { createLikeReducer } from "./reducers/likeReducer";
import {
  getAnalyticsReducer,
  getLikeNumberReducer,
  getLikeReducer,
  getPostNumberReducer,
  getTotalLikeAnalyticsReducer,
  getTotalViewAnalyticsReducer,
  getViewsNumberReducer,
  getYearLikesReducer,
  getYearViewsReducer,
  houseNumberReducer,
  plotNumberReducer,
  rentNumberReducer,
  saleNumberReducer,
  totalPostReducer,
  totalViewsReducer,
  visitorAnalyticsReducer,
  visitorsTrackReducer
} from "./reducers/analyticsReducer";
import { getProfileReducer } from "./reducers/profileReducer";
import { 
  appMessageDetailsReducer,
  getAppMessageReducer,
  getOneUssdReducer, 
  getUssdReducer, 
  offerFilterReducer, 
  offerFilterSaleReducer, 
  requestFilterReducer, 
  requestFilterSaleReducer 
} from "./reducers/ussdReducer";
import { cashinReducer, cashoutReducer, checkPaymentStatusReducer, expenseReducer, getTransactionsReducer, getUserPaymentReducer, getUserRevenueReducer, publishedPropertyReducer, revenueReducer } from "./reducers/paymentReducer";


const reducer = combineReducers({
  propertyLists: propertiesListReducer,
  propertyDetails: propertiesDetailsReducer,
  createProperty: createPropertyReducer,
  createSpecialProperty: createSpecialPropertyReducer,
  specialPropertiesLists: SpecialPropertiesListReducer,
  allData: getAllDataReducer,
  forRent: propertiesForRentListReducer,
  forSale: propertiesForSaleListReducer,

  vacantplotsFilters: vacantPlotFilterReducer,
  vacantplotsSaleFilters: vacantPlotFilterSaleReducer,

  warehouseFilters: warehouseFilterReducer,
  warehouseSaleFilters: warehouseFilterSaleReducer,

  commercialFilters: commercialFilterReducer,
  commercialSaleFilters: commercialFilterSaleReducer,

  apartmentsFilters: apartmentsFilterReducer,
  apartmentsSaleFilters: apartmentsFilterSaleReducer,

  officesFilters: officesFilterReducer,
  officesSaleFilters: officesFilterSaleReducer,

  residentialFilters: residentialsFilterReducer,
  residentialSaleFilters: residentialsFilterSaleReducer,

  activeCategory: activeCategoryReducer,
  userUpdate: userUpdateReducer,

  createDeal: createDealReducer,
  dealList: dealListReducer,
  getOneDeal: getOneDealReducer,
  myDeal: MyDealReducer,

  createLike: createLikeReducer,
  getAnalytics: getAnalyticsReducer,
  getLikesAnalytics: getLikeReducer,
  getNumberLike: getLikeNumberReducer,
  getNumberPost: getPostNumberReducer,
  getNumberViews: getViewsNumberReducer,
  plotNumber: plotNumberReducer,
  houseNumber: houseNumberReducer,
  rentNumber: rentNumberReducer,
  saleNumber: saleNumberReducer,
  socketChat: socketReducer,
  getUser: getUserReducer,
  getMessages: getMessagesReducer,
  getAllChats: getAllChatReducers,
  userreducer: userReducer,
  getProfile: getProfileReducer,
  allUser: AllUserReducer,

  forgotPassword: forgotPasswordReducer,
  resetPassword:resetPasswordReducer,
  getUssdMessage: getUssdReducer,
  getUssd: getOneUssdReducer,

  offerFilter:offerFilterReducer,
  offerFilterSale:offerFilterSaleReducer,

  requestFilter: requestFilterReducer,
  requestFilterSale: requestFilterSaleReducer,
  userDelete: userDeleteReducer,
  userRole: userRoleReducer,
  appReducer:getAppMessageReducer,
  appDetails: appMessageDetailsReducer,
  yearLikes: getYearLikesReducer,
  yearViews: getYearViewsReducer,
  totalPost: totalPostReducer,
  totalViews: totalViewsReducer,
  visitorTrack: visitorsTrackReducer,
  visitorAnalytics: visitorAnalyticsReducer,
  getTotalViewAnalytics: getTotalViewAnalyticsReducer,
  getTotalLikeAnalytics: getTotalLikeAnalyticsReducer,
  cashinpayment: cashinReducer,
  cashoutpayment: cashoutReducer,
  publishedProperty:publishedPropertyReducer,
  checkPaymentStatus: checkPaymentStatusReducer,
  revenueAmount: revenueReducer,
  userPayment: getUserPaymentReducer,
  expenseAmount: expenseReducer,
  userRevenue: getUserRevenueReducer,
  getTransactions:getTransactionsReducer
});

const initialState = { activeCategory: "" };

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
