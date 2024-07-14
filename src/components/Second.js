import React from "react";
import UssdMessage from "./UssdMessage";
import CommonList from "./CommonList";
import PrimeList from './PrimeList'
import AppMessage from "./AppMessage";

function Second({label,setLoading}) {
  return (
    <div class="container-fluid mt-3 mt-4">
      <div class="row">
        <UssdMessage />
        <CommonList label={label} setLoading={setLoading}/>
        <AppMessage/>
        
        {/* <UssdMessage /> */}
        {/* <PrimeList/> */}
      </div>
    </div>
  );
}

export default Second;
