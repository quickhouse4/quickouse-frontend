import React, { useEffect, useState } from "react";
import { getDataAnalytic, getLikeAnalytic, getLikeNumber, getPostNumber, getPlotNumber, getHouseNumber, getSalePosts, getRentPosts, getViewsNumber } from "../actions/AnalyticsAction";
import { useDispatch, useSelector } from "react-redux";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Legend, Tooltip, ResponsiveContainer, AreaChart, Area } from "recharts";
import { listProperties } from "../actions/propertiesAction";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const Statistics = () => {
  const data = useSelector((state) => state.getAnalytics)
  const likeData = useSelector((state) => state.getLikesAnalytics)
  const numberPost = useSelector((state) => state.getNumberPost)
  const numberLike = useSelector((state) => state.getNumberLike)
  const numberView = useSelector((state) => state.getNumberViews)
  const commonProperties = useSelector((state) => state.propertyLists)
  const plot = useSelector((state) => state.plotNumber)
  const house = useSelector((state) => state.houseNumber)
  const rent = useSelector((state) => state.rentNumber)
  const sale = useSelector((state) => state.saleNumber)
  const { plotLoading, plotNumbers } = plot
  const { houseLoading, houseNumbers } = house
  const { likLoading, likeNumber } = numberLike
  const { loadingView, viewsNumber } = numberView
  const { postLoading, postNumber } = numberPost
  const { rentLoading, rentNumbers } = rent
  const { saleLoading, saleNumbers } = sale
  const [pageCount, setpageCount] = useState(1);
  const pageLimit = 25

  const dispatch = useDispatch()
  const { loading, analytics } = data
  const { likeLoading, analyticsLikes } = likeData
  const token = localStorage.getItem("token")
  const userToken = JSON.parse(atob(token.split('.')[1]));
  useEffect(() => {
    dispatch(getDataAnalytic(token))
    dispatch(getLikeAnalytic(token))
  }, [])

  useEffect(() => {
    dispatch(getViewsNumber(token))
    dispatch(getLikeNumber(token))
    dispatch(getPostNumber(token))
    dispatch(listProperties(pageCount, pageLimit))
    dispatch(getPlotNumber(token))
    dispatch(getHouseNumber(token))
    dispatch(getRentPosts(token))
    dispatch(getSalePosts(token))
  }, [])
  // const formattedViews = Object.entries(analytics).map(([month, corres]) => ({ month, views: corres.views }));
  // const formattedLikes = Object.entries(analyticsLikes).map(([month, corres]) => ({ month, likes: corres.likes }));

  // const combinedData = formattedViews.map((views, i) => ({
  //   month: views.month, // Helper function to get month name
  //   likes: formattedLikes[i] && formattedLikes[i].likes,
  //   views: views.views,
  //   year: views.year
  // }));
  const formattedViews = Object.entries(analytics).map(([month, { views }]) => ({ month, views }));
  const formattedLikes = Object.entries(analyticsLikes).map(([month, { likes }]) => ({ month, likes }));

  const combinedData = formattedViews.map((views, i) => ({
    month: views.month === "year" ? new Date().getFullYear() : views.month,  // Helper function to get month name
    likes: formattedLikes[i] && formattedLikes[i].likes,
    views: views.views,
    year: views
  }));
  // console.log("combinedData",combinedData);

  const [startDate, setStartDate] = useState(new Date());

  const handleYearchange = year => {
    setStartDate(year);
    
  }

  return (
    <>
      <div className="col-xl-10 col-md-12 col-sm-6 statistics" style={{ marginTop: "120px" }}>
        <div className="row mb-5 flex-wrap w-100" >
          <div className="col-md-2 mb-3" >
            <div
              className="card mt-3 analyticsField"
            >
              <div className="card-body">
                <div className="d-flex justify-content-evenly align-items-center flex-wrap ">
                  <h4 className="fs-1 text-light mr-2"> Likes</h4>
                  <span className="display-5 fs-2 text-light">{likeNumber}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-2 mb-3" >
            <div
              className="card mt-3 analyticsField"
            >
              <div className="card-body">
                <div className="d-flex justify-content-evenly align-items-center flex-wrap" >
                  <h4 className="fs-1 text-light mr-2">Views</h4>
                  <span className="display-5 fs-2 text-light">{viewsNumber}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-2 mb-3" >
            <div
              className="card mt-3 analyticsField"

            >
              <div className="card-body">
                <div className="d-flex justify-content-evenly align-items-center flex-wrap">
                  <h4 className="fs-1 mr-2" style={{ color: "#8884d8" }}> Post</h4>
                  <span className="display-5 fs-2 text-light">{postNumber}</span>
                </div>
              </div>
            </div>
          </div>
          {userToken.role === "admin" && <>
            <div className="col-md-2 mb-3" >
              <div
                className="card mt-3 analyticsField"
              >
                <div className="card-body">
                  <div className="d-flex justify-content-evenly align-items-center flex-wrap">
                    <h4 className="fs-1 mr-2" style={{ color: "#8884d8" }}>Plot</h4>
                    <span className="display-5 fs-2 text-light">{plotNumbers}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-2 mb-3" >
              <div
                className="card mt-3 analyticsField"
              >
                <div className="card-body">
                  <div className="d-flex justify-content-evenly align-items-center flex-wrap">
                    <h4 className="fs-1 mr-2" style={{ color: "#8884d8" }}>House</h4>
                    <span className="display-5 fs-2 text-light">{houseNumbers}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-2 mb-3" >
              <div
                className="card mt-3 analyticsField"
              >
                <div className="card-body">
                  <div className="d-flex justify-content-evenly align-items-center flex-wrap">
                    <h4 className="fs-1 mr-2" style={{ color: "#8884d8" }}>Rent</h4>
                    <span className="display-5 fs-2 text-light">{rentNumbers}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-2 mb-3" >
              <div
                className="card mt-3 analyticsField"
              >
                <div className="card-body">
                  <div className="d-flex justify-content-evenly align-items-center flex-wrap">
                    <h4 className="fs-1 mr-2" style={{ color: "#8884d8" }}>Sales</h4>
                    <span className="display-5 fs-2 text-light">{saleNumbers}</span>
                  </div>
                </div>
              </div>
            </div>
          </>
          }
        </div>
        <div className="mainstatstics" style={{marginBottom:"100px"}} >
          {/* style={{ display: 'flex', flexDirection: 'row', height: '500px' }} */}
          <div style={{ flex: 1, backgroundColor: "#071c36" }} className=" rounded-2 shadow mt-5 mb-5 pb-5 analytics">
            <div className="d-flex justify-content-between mt-2 mr-4 ml-4">
              <h3 className="w-100"><span className="display-6 fs-3 text-light">Views and Likes</span></h3>
              {/* <DatePicker 
                selected={startDate}
                showYearPicker
                onChange={(date) => handleYearchange(date.getFullYear)}
                maxDate={new Date()}
                dateFormat="yyyy"
                className="fs-4 text-center mt-2"
               /> */}
            </div>
            <ResponsiveContainer >
              <AreaChart width={730} height={250} data={combinedData}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="views" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="likes" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="month" />
                <YAxis dataKey="views" axisLine={{ strokeWidth: "0" }} />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Legend />
                <Area dot={true} type="monotone" dataKey="views" stroke="#8884d8" fillOpacity={1} fill="url(#views)" />
                <Area dot={true} type="monotone" dataKey="likes" stroke="#82ca9d" fillOpacity={1} fill="url(#likes)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="recenthitpost" >
            {/* style={{ flex: 1, width: "20%", marginTop: "40px", marginLeft: "25px" }} */}
            <h3>Recent Hit Posts</h3>
            <hr className="hr" />
            <div className="recent shadow card ">
              <div className="card-body">
                {
                  commonProperties.properties.sort((a, b) => b.likes - a.likes).slice(0, 4).map(property => (
                    <div className="d-flex align-items-center" style={{marginBottom:"12px"}}>
                      <img src={property.mainPhoto} alt="prop_image" className="img-thumb rounded-circle me-2" style={{ width: "30px", height: '30px' }} />
                      <div className="d-flex flex-column">
                        <h5 className="card-title text-light">{property.propertyName}</h5>
                        <span className="text-light"><i class="fs-6 bi bi-hand-thumbs-up"></i>: {property.likes}</span>
                        <i className="text-light">{new Date(property.publishedOn).toLocaleDateString()}</i>
                      </div>
                      <hr />
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Statistics;
