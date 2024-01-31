import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from './Sidebar';
import CreateSpecialProperty from '../components/CreateSpecialProperty'

function CreateSpecialPropertyScreen() {
  return (
    <>
      <Header />
      <div class="w-100 pt-2">
        <div class="d-flex position-relative flex-nowrap">
          <Sidebar />
          <CreateSpecialProperty />
        </div>
      </div>
      <Footer />

    </>
  )
}

export default CreateSpecialPropertyScreen
