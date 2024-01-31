import React, { useState } from "react";
import Header from "../components/Header";
import BottomHeader from "../components/Header";
import sidebar from "./Sidebar";
import Footer from "../components/Footer";
import Sidebar from "./Sidebar";
import Statistics from './Statistics';
// import HeaderDashboard from '../components/HeaderDashboard'

function Dashboard() {
  const [label, setLabel] = useState('');
  return (
    <>
      <Header setLabel={setLabel} />
      <div class="w-100 pt-2" >
        <div class="d-flex position-relative flex-nowrap" >
          <Sidebar />
          <Statistics />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Dashboard;
