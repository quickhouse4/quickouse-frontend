import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "./Sidebar";
import Messages from '../components/MessageSection'
function MessageScreen() {
  return (
    <>
      <Header />
      <div class="w-100 pt-2">
        <div class="d-flex position-relative flex-nowrap">
          <Sidebar />
          <Messages />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default MessageScreen;
