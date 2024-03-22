import React from 'react';
import Footer from '../components/Footer';
import Header from "../components/Header";
import Sidebar from './Sidebar';
import CreateProperties from '../components/CreateProperties'


const CreateProperty = () => {
  return (
    <>
      <Header />
      <div class="w-100 pt-2">
        <div class="d-flex position-relative flex-nowrap">
          <Sidebar />
          <CreateProperties />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default CreateProperty