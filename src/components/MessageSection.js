import React from 'react'
import Image from "../components/images/passport.png";


function MessageSection() {
  return (
    <>
      <div class="col-md-10">
        <div class="row">
          <div class="col-md-12" style={{marginTop:"120px"}}>

            <h3>Messages</h3>

            <ul class="list-group">
              <li class="list-group-item mb-1">
                <div class="media">
                  <div class="media-left media-top">
                    <img src={Image} class="media-object" style={{ width: "60px" }} />
                  </div>
                  <div class="media-body">
                    <h5 class="media-heading">Innocent Tuy</h5>
                    <h6>22 Minutes ago</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit ridiculus sodales gravida cum ultrices</p>

                  </div>
                </div>
              </li>

              <li class="list-group-item mb-1">
                <div class="media">
                  <div class="media-left media-top">
                    <img src={Image} class="media-object" style={{ width: "60px" }} />
                  </div>
                  <div class="media-body">
                    <h5 class="media-heading">Innocent Tuy</h5>
                    <h6>22 Minutes ago</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit ridiculus sodales gravida cum ultrices</p>

                  </div>
                </div>
              </li>
              <li class="list-group-item mb-1">
                <div class="media">
                  <div class="media-left media-top">
                    <img src={Image} class="media-object" style={{ width: "60px" }} />
                  </div>
                  <div class="media-body">
                    <h5 class="media-heading text-bold">Innocent Tuy</h5>
                    <h6>22 Minutes ago</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit ridiculus sodales gravida cum ultrices</p>

                  </div>
                </div>
              </li>
              <li class="list-group-item mb-1">
                <div class="media">
                  <div class="media-left media-top">
                    <img src={Image} class="media-object" style={{ width: "60px" }} />
                  </div>
                  <div class="media-body">
                    <h5 class="media-heading">Innocent Tuy</h5>
                    <h6>22 Minutes ago</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit ridiculus sodales gravida cum ultrices</p>

                  </div>
                </div>
              </li>
              <li class="list-group-item mb-1">
                <div class="media">
                  <div class="media-left media-top">
                    <img src={Image} class="media-object" style={{ width: "60px" }} />
                  </div>
                  <div class="media-body">
                    <h5 class="media-heading">Innocent Tuy</h5>
                    <h6>22 Minutes ago</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit ridiculus sodales gravida cum ultrices</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default MessageSection
