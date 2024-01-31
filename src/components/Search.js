import React from 'react'

function Search() {
  return (
    <div class="container-fluid p-5 m-2 bg-light">
	<div class="row">
	    <div class='col-md-4'>	        
	        <select class="form-control select2">
	           <option>Property type </option> 
	           <option>commercial</option> 
	           <option>Resedential</option> 
	           <option>Plot</option> 
	        </select>
	    </div>
        <div class="col-md-4">	        
	        <select class="form-control select2">
	           <option>Property Status </option> 
	           <option>Rent</option> 
	           <option>Sale</option> 	          
	        </select>
	    </div>
 	</div>
</div>
  )
}

export default Search