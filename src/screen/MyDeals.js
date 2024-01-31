import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { personDeal } from '../actions/dealAction'
import Spinner from "react-bootstrap/Spinner";
import Sidebar from './Sidebar';
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';


const MyDeals = () => {
  const [label, setLabel] = useState('');
  const token = localStorage.getItem("token")
  const requesterId = JSON.parse(atob(token.split('.')[1]));
  const myPost = useSelector((state) => state.myDeal)
  const { myPosts, loading } = myPost
  const dispatch = useDispatch()

  console.log("mypost" ,myPosts )
  useEffect(() => {
    dispatch(personDeal(requesterId.id, token))
  }, [])
  return (
    <>
      <Header setLabel={setLabel} />
      <div class="w-100 pt-2">
        <div class="d-flex position-relative flex-nowrap">
          <Sidebar />
          <div class="col-md-10 col-xl-10" style={{marginTop:"120px"}}>
            <div class="row">
              <div class="col-md-12">
                {!myPosts ? "" : <h3>My Requests/Orders</h3>}
                <div class="row">
                  {loading ? (
                    <h2 class="text-center mt-5 pt-5">
                      {" "}
                      <Spinner
                        animation="border"
                        variant="dak"
                        class="text-center mt-5 pt-5"
                      />
                    </h2>
                  ) : (
                    !myPosts ?
                      (
                        <h1 class="fs-2" style={{ color: "#071c36",textAlign: 'center' }}>
                          you don't have any deal yet!
                        </h1>
                      ) : (
                        myPosts && myPosts.map((item, index) => (

                          <div class="col-md-4" key={index}>
                            {/* <Link to={`/dealProperty/${item._id}`} class="text-decoration-none"> */}
                            <div
                              class="card mt-3"
                              style={{
                                color: "black"
                              }}
                              key={item._id}
                            >
                              <div class="card-body">
                                <div class="">
                                  <h4>Title : <span class="display-5 fs-2">{item.title}</span></h4>
                                  <h5>Province : <span >{item.province}</span></h5>
                                </div>
                              </div>
                            </div>
                            {/* </Link> */}
                          </div>
                        ))
                      ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default MyDeals