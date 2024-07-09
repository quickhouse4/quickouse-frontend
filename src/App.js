import React, { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import PropertyDetail from "./screen/PropertyDetail";
import About from "./screen/About";
import Contact from "./screen/Contact";
import Properties from "./screen/Properties";
import Dashboard from "./screen/Dashboard";
import CreateProperty from "./screen/CreateProperty";
import Message from './screen/MessageScreen'
import Login from './screen/Login'
import Register from "./components/Register";
import Profile from './screen/Profile'
import Deal from "./screen/Deal";
import CreateSpecialPropertyScreen from "./screen/CreateSpecialPropertyScreen";
import DealDeatail from "./screen/dealDeatail";
import MyDeals from "./screen/MyDeals";
import AllDeal from "./screen/AllDeal";
import Chat from "./screen/Chat";
import AllUser from "./screen/AllUser";
import ForgotPassword from "./screen/ForgotPassword";
import UssdDetail from "./screen/UssdDetail";
import ResetPassword from "./screen/ResetPassword";
import UssdMessage from "./components/UssdMessage"
import AppMessageDetails from "./screen/AppMessageDetails";
import PaymentScreen from "./screen/paymentScreen";
import { useDispatch, useSelector } from "react-redux";
import { visitorsTrack } from "./actions/AnalyticsAction"
import Transactions from "./screen/Transactions";
import Expenses from "./screen/Expenses";
import MyLists from "./screen/MyLists";
import MyPropertes from "./screen/MyPropertes";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(visitorsTrack())
  }, [dispatch]);


  return (
    <Router>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/property/:id">
        <PropertyDetail />
      </Route>
      <Route path="/aboutUs">
        <About />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
      <Route path="/properties">
        <Properties />
      </Route>
      <Route path="/dashboard">
        <Dashboard />
      </Route>
      <Route path="/profile">
        <Profile />
      </Route>
      <Route path="/createproperty">
        <CreateProperty />
      </Route>
      <Route path="/createSpecialProperty">
        <CreateSpecialPropertyScreen />
      </Route>
      <Route path="/messages">
        <Message />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/type/:slug">
        <Home />
      </Route>
      <Route path="/deal">
        <Deal />
      </Route>
      <Route path="/dealProperty/:id">
        <DealDeatail />
      </Route>
      <Route path="/myDeals">
        <MyDeals />
      </Route>
      {/* <Route path="/allRequest">
        <AllDeal />
      </Route> */}
      <Route path="/allUser">
        <AllUser />
      </Route>
      <Route path="/chat/:userid">
        <Chat />
      </Route>
      <Route path="/forgot-password">
        <ForgotPassword />
      </Route>
      <Route path="/reset/:emailToken">
        <ResetPassword />
      </Route>
      <Route path="/ussdSms/:id">
        <UssdDetail />
      </Route>
      <Route path="/quickDeals">
        <UssdMessage />
      </Route>
      <Route path="/detailsMessage/:id">
        <AppMessageDetails />
      </Route>
      <Route path="/payment">
        <PaymentScreen />
      </Route>
      <Route path="/transactions">
        <Transactions />
      </Route>
      <Route path="/expenses">
        <Expenses />
      </Route>
      <Route path="/myLists">
        <MyLists />
      </Route>
      <Route path="/myProperties">
        <MyPropertes />
      </Route>
    </Router>
  );
}

export default App;
