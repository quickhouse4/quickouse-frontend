import React, { useEffect, useState } from "react";
import {
  getDataAnalytic,
  getLikeAnalytic,
  getLikeNumber,
  getPostNumber,
  getPlotNumber,
  getHouseNumber,
  getSalePosts,
  getRentPosts,
  getViewsNumber,
  getYearLikes,
  getYearViews,
  getTotalPosts,
  getTotalViews,
  getVisitorAnalytics,
  getTotalViewAnalytics,
  getTotalLikeAnalytics
} from "../actions/AnalyticsAction";
import { useDispatch, useSelector } from "react-redux";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Legend, Tooltip, ResponsiveContainer, AreaChart, Area } from "recharts";
import { listProperties } from "../actions/propertiesAction";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { BsBarChart, BsBuildings } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { getAllUser } from "../actions/userAction";
import { GiReceiveMoney } from "react-icons/gi";
import { GiPayMoney } from "react-icons/gi";
import { MdPostAdd } from "react-icons/md";
import { revenueAction, userAmountAction, expenseAction, userRevenueAction } from "../actions/paymentAction";


const Statistics = () => {
  const data = useSelector((state) => state.getAnalytics)
  const likeData = useSelector((state) => state.getLikesAnalytics)
  const numberPost = useSelector((state) => state.getNumberPost)
  const numberLike = useSelector((state) => state.getNumberLike)
  const numberView = useSelector((state) => state.getNumberViews)
  const commonProperties = useSelector((state) => state.propertyLists)
  const { totalPost } = useSelector((state) => state.totalPost)
  const { totalViews } = useSelector((state) => state.totalViews)
  const plot = useSelector((state) => state.plotNumber)
  const house = useSelector((state) => state.houseNumber)
  const rent = useSelector((state) => state.rentNumber)
  const sale = useSelector((state) => state.saleNumber)
  const { plotNumbers } = plot
  const { houseNumbers } = house
  const { likeNumber } = numberLike
  const { viewsNumber } = numberView
  const { postNumber } = numberPost
  const { rentNumbers } = rent
  const { saleNumbers } = sale
  const { yearViews } = useSelector((state) => state.yearViews)
  const { yearLikes } = useSelector((state) => state.yearLikes)
  const { visitorAnalytics } = useSelector((state) => state.visitorAnalytics)
  const { totalViewAnalytics } = useSelector((state) => state.getTotalViewAnalytics)
  const { totalLikeAnalytics } = useSelector((state) => state.getTotalLikeAnalytics)
  const myUser = useSelector((state) => state.allUser)
  const { allUsers } = myUser
  const { revenue } = useSelector((state) => state.revenueAmount)
  const { userPayment } = useSelector((state) => state.userPayment)
  const { expense } = useSelector((state) => state.expenseAmount)
  const { userRevenue } = useSelector((state) => state.userRevenue)
  const [pageCount, setpageCount] = useState(1);
  const pageLimit = 25

  const dispatch = useDispatch()
  const { analytics } = data
  const { analyticsLikes } = likeData
  const token = localStorage.getItem("token")
  const userToken = JSON.parse(atob(token.split('.')[1]));
  const [startDate, setStartDate] = useState(new Date());
  const [year, setYear] = useState(new Date());
  const [yrDate, setYrDate] = useState(new Date());

  useEffect(() => {
    dispatch(getViewsNumber(token))
    dispatch(getLikeNumber(token))
    dispatch(getPostNumber(token))
    dispatch(listProperties(pageCount, pageLimit))
    dispatch(getPlotNumber(token))
    dispatch(getHouseNumber(token))
    dispatch(getRentPosts(token))
    dispatch(getSalePosts(token))
    dispatch(getTotalPosts(token))
    dispatch(getTotalViews(token))
    dispatch(revenueAction(token))
    dispatch(userAmountAction(token))
    dispatch(expenseAction(token))
    dispatch(userRevenueAction(token))
  }, [])


  useEffect(() => {
    dispatch(getAllUser(token, pageCount, pageLimit))
  }, [])

  const handleYearchange = year => {
    setStartDate(year);
  }

  const handleAnalyticsYear = yr => {
    setYear(yr);
  }

  const handleTotalYear = yrs => {
    setYrDate(yrs);

  }

  useEffect(() => {
    dispatch(getDataAnalytic(token))
    dispatch(getLikeAnalytic(token))
  }, [])

  useEffect(() => {
    if (yrDate) {
      dispatch(getTotalViewAnalytics(yrDate.getFullYear()))
      dispatch(getTotalLikeAnalytics(yrDate.getFullYear()))
    }
  }, [yrDate])

  useEffect(() => {
    if (startDate) {
      dispatch(getYearLikes(token, startDate.getFullYear()))
      dispatch(getYearViews(token, startDate.getFullYear()))
    }
  }, [startDate])

  useEffect(() => {
    dispatch(getVisitorAnalytics(token, year.getFullYear()))
  }, [year])

  const formattedTotalLikes = Object.entries(totalLikeAnalytics).map(([month, { likes }]) => ({ month, likes }));
  const formattedTotalViews = Object.entries(totalViewAnalytics).map(([month, { views }]) => ({ month, views }));
  const formattedViews = Object.entries(analytics).map(([month, { views }]) => ({ month, views }));
  const formattedLikes = Object.entries(analyticsLikes).map(([month, { likes }]) => ({ month, likes }));
  const formattedYearLikes = Object.entries(yearLikes).map(([month, { likes }]) => ({ month, likes }));
  const formattedYearViews = Object.entries(yearViews).map(([month, { views }]) => ({ month, views }));

  const formatAnalytics = Object.entries(visitorAnalytics).map(([month, { visits }]) => ({ month, visits }));

  const Data = formatAnalytics.map((data) => {
    return {
      month: data.month == "year" ? new Date().getFullYear() : data.month,
      visits: data.visits
    }
  })

  const combineTotalData = formattedTotalViews.map((view, i) => {
    const month = view.month === "year" ? new Date().getFullYear() : view.month;
    let likes, views;

    if (yrDate) {
      // Use data for the selected year
      likes = formattedTotalLikes.find(data => data.month === month) ? formattedTotalLikes.find(data => data.month === month).likes : undefined;
      views = formattedTotalViews.find(data => data.month === month) ? formattedTotalViews.find(data => data.month === month).views : undefined;
    } else {
      // Use data for the current year
      likes = formattedTotalLikes[i] ? formattedTotalLikes[i].likes : undefined;
      views = view.views;
    }
    return {
      month,
      likes,
      views
    };
  })
  const combinedData = formattedViews.map((view, i) => {
    const month = view.month === "year" ? new Date().getFullYear() : view.month;
    let likes, views;

    if (startDate) {
      // Use data for the selected year
      likes = formattedYearLikes.find(data => data.month === month) ? formattedYearLikes.find(data => data.month === month).likes : undefined;
      views = formattedYearViews.find(data => data.month === month) ? formattedYearViews.find(data => data.month === month).views : undefined;
    } else {
      // Use data for the current year
      likes = formattedLikes[i] ? formattedLikes[i].likes : undefined;
      views = view.views;
    }
    return {
      month,
      likes,
      views
    };
  });

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  console.log("user",userPayment)
  return (
    <>
      <div className="col-xl-12 col-md-12 statistics" style={{ marginTop: "120px" }}>
        <div className="container-post mb-5">
          <div className="mt-5 box "  >
            <div className="col-md-4 col-sm-6 mb-3" >
              <div className="mt-3">
                <div className="rounded-2 p-3 totalHouse" >
                  <div className="d-flex justify-content-around align-items-center flex-wrap">
                    <BsBarChart className="fs-1 mr-2" style={{ color: "#8884d8" }} />
                    <div className="text-end">
                      <h4 className="fs-5 mt-3" style={{ color: "#8884d8" }}>My Views</h4>
                      <span className="fs-4 text-style" >{viewsNumber ? viewsNumber : 0}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 mb-3" >
              <div className="mt-3">
                <div className="rounded-2 p-3 totalHouse" >
                  <div className="d-flex justify-content-around  align-items-center flex-wrap">
                    <MdPostAdd className="fs-1 mr-2" style={{ color: "#8884d8" }} />
                    <div className="text-end">
                      <h4 className="fs-5 mt-3" style={{ color: "#8884d8" }}>My Post</h4>
                      <span className="fs-4 text-style">{postNumber ? postNumber : 0}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 mb-3" >
              <div className="mt-3">
                <div className="rounded-2 p-3 totalHouse" >
                  <div className="d-flex justify-content-around align-items-center flex-wrap">
                    <GiReceiveMoney className="fs-1 mr-2" style={{ color: "#8884d8" }} />
                    <div className="text-end">
                      <h4 className="fs-5 mt-3" style={{ color: "#8884d8" }}>Revenue</h4>
                      <span className="fs-4 text-style">Rwf{" "}{userToken.role === "admin" ? `${revenue[0]?.totalAmount ? revenue[0]?.totalAmount : 0}` : `${userRevenue ? userRevenue : 0}`}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 mb-3" >
              <div className="mt-3">
                <div className="rounded-2 p-3 totalHouse" >
                  <div className="d-flex justify-content-around align-items-center flex-wrap">
                    <GiPayMoney className="fs-1 mr-2" style={{ color: "#8884d8" }} />
                    <div className="text-end">
                      <h4 className="fs-5 mt-3" style={{ color: "#8884d8" }}>Expense</h4>
                      <span className="fs-4 text-style">Rwf{" "}{userToken.role === "admin" ? `${expense ? expense : 0}` : `${userPayment[0]?.totalAmount ? userPayment[0]?.totalAmount : 0}`}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {userToken.role === "admin" && <>
              {/* <div className="col-md-4 col-sm-6 mb-3" >
                <div className="mt-3">
                  <div className="rounded-2 p-3 totalHouse" >
                    <div className="d-flex justify-content-around align-items-center flex-wrap">
                      <GiPayMoney className="fs-1 mr-2" style={{ color: "#8884d8" }} />
                      <div className="text-end">
                        <h4 className="fs-5 mt-3" style={{ color: "#8884d8" }}>Expense</h4>
                        <span className="fs-4 text-style">$559</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
              <div className="col-md-4 col-sm-6 mb-3" >
                <div className="mt-3">
                  <div className="rounded-2 p-3 totalHouse" >
                    <div className="d-flex justify-content-around  align-items-center flex-wrap">
                      <BsBarChart className="fs-1 mr-2" style={{ color: "#8884d8" }} />
                      <div className="text-end">
                        <h4 className="fs-5 mt-3" style={{ color: "#8884d8" }}>Total Views</h4>
                        <span className="fs-4 text-style">{totalViews || 0}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-sm-6 mb-3" >
                <div className="mt-3">
                  <div className="rounded-2 p-3 totalHouse" >
                    <div className="d-flex justify-content-around  align-items-center flex-wrap">
                      <MdPostAdd className="fs-1 mr-2" style={{ color: "#8884d8" }} />
                      <div className="text-end">
                        <h4 className="fs-5 mt-3" style={{ color: "#8884d8" }}>Total Posts</h4>
                        <span className="fs-4 text-style">{totalPost}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-sm-6 mb-3" >
                <div className="mt-3">
                  <div className="rounded-2 p-3 totalHouse" >
                    <div className="d-flex justify-content-around  align-items-center flex-wrap">
                      <BsBarChart className="fs-1 mr-2" style={{ color: "#8884d8" }} />
                      <div className="text-end">
                        <h4 className="fs-5 mt-3" style={{ color: "#8884d8" }}>Total Plot</h4>
                        <span className="fs-4 text-style">{plotNumbers}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 mb-3" >
                <div className="mt-3">
                  <div className="rounded-2 p-3 totalHouse" >
                    <div className="d-flex justify-content-around  align-items-center flex-wrap">
                      <BsBuildings className="fs-1 mr-2" style={{ color: "#8884d8" }} />
                      <div className="text-end">
                        <h4 className="fs-5 mt-3" style={{ color: "#8884d8" }}>Total House</h4>
                        <span className="fs-4 text-style">{houseNumbers}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 mb-3" >
                <div className="mt-3">
                  <div className="rounded-2 p-3 totalHouse" >
                    <div className="d-flex justify-content-around  align-items-center flex-wrap">
                      {/* <BsBuildings className="fs-1 mr-2" style={{ color: "#8884d8" }} /> */}
                      <div className="text-end">
                        <h4 className="fs-5 mt-3" style={{ color: "#8884d8" }}>Property for Rent</h4>
                        <span className="fs-4 text-style">{rentNumbers}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 mb-3" >
                <div className="mt-3">
                  <div className="rounded-2 p-3 totalHouse " >
                    <div className="d-flex justify-content-around  align-items-center flex-wrap">
                      {/* <BsBuildings className="fs-1 mr-2" style={{ color: "#8884d8" }} /> */}
                      <div className="text-end">
                        <h4 className="fs-5 mt-3" style={{ color: "#8884d8" }}>Property for Sale</h4>
                        <span className="fs-4 text-style">{saleNumbers}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 mb-3" >
                <div className="mt-3">
                  <div className="rounded-2 p-3 totalHouse" >
                    <div className="d-flex justify-content-around align-items-center flex-wrap">
                      <FaUsers className="fs-1 mr-2" style={{ color: "#8884d8" }} />
                      <div className="text-end">
                        <h4 className="fs-5 mt-3" style={{ color: "#8884d8" }}>Total Users</h4>
                        <span className="fs-4 text-style">{allUsers.length}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
            }
          </div>
          < div className="recenthit" >
            <div className="w-100">
              < h3 className="recent-title"> Recent Hit Posts</h3 >
              <hr className="hr" />
            </div>
            <div className="recentii shadow card ">
              <div className="card-body">
                {
                  commonProperties.properties.sort((a, b) => b.views - a.views).slice(0, 4).map(property => (
                    <div className="d-flex align-items-center" style={{ marginBottom: "12px" }}>
                      <img src={property.mainPhoto} alt="prop_image" className="img-thumb rounded-circle me-2" style={{ width: "30px", height: '30px' }} />
                      <div className="d-flex flex-column">
                        <h5 className="card-title text-style">{capitalizeFirstLetter(property.propertyName)}</h5>
                        <span className="text-style">
                          <BsBarChart />
                          {/* <i class="fs-6 bi bi-hand-thumbs-up"></i> */}
                          : {property.views}</span>
                        <i className="text-style">{new Date(property.publishedOn).toLocaleDateString()}</i>
                      </div>
                      <hr />
                    </div>
                  ))
                }
              </div>
            </div>
          </div >
        </div>
        {userToken.role === "admin" &&
          <div className="mainflex">
            <div style={{ flex: 1, backgroundColor: "white" }} className="mainstatstics rounded-2 shadow  mb-5 pb-5 ">
              <div className="d-flex justify-content-between mt-2 mr-4 ml-4">
                <h3 className="w-100"><span className="display-6 fs-3" style={{ color: "#443dc2", fontWeight: 500 }} >Total Views</span></h3>
                <DatePicker
                  selected={yrDate}
                  showYearPicker
                  onChange={(date) => handleTotalYear(date)}
                  maxDate={new Date()}
                  dateFormat="yyyy"
                  className="fs-4 text-center mt-2 border"
                />
              </div>
              <ResponsiveContainer >
                <AreaChart width={730} height={250} data={combineTotalData}
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="views" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#443dc2" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#443dc2" stopOpacity={0} />
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
                  <Area dot={true} type="monotone" dataKey="views" stroke="#443dc2" fillOpacity={1} fill="url(#views)" />
                  <Area dot={true} type="monotone" dataKey="likes" stroke="#82ca9d" fillOpacity={1} fill="url(#likes)" />
                </AreaChart>
              </ResponsiveContainer>
              {/* </div> */}
            </div>
            <div style={{ flex: 1, backgroundColor: "white" }} className=" rounded-2 shadow mb-5 pb-5 visitAnalytics">
              <div className="d-flex justify-content-between mt-2 mr-4 ml-4">
                <h3 className="w-100"><span className="display-6 fs-3" style={{ color: "#009933", fontWeight: 500 }}>Revenue and expenses</span></h3>
                <DatePicker
                  selected={year}
                  showYearPicker
                  onChange={(date) => handleAnalyticsYear(date)}
                  maxDate={new Date()}
                  dateFormat="yyyy"
                  className="fs-4 text-center mt-2 border"
                />
              </div>
              <ResponsiveContainer>
                <AreaChart width={730} height={250} data={Data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="revenue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#009933" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#009933" stopOpacity={0.2} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="month" />
                  <YAxis dataKey="revenue" axisLine={{ strokeWidth: "0" }} />
                  <CartesianGrid strokeDasharray="3 3" />
                  <Tooltip />
                  <Legend />
                  <Area dot={true} type="monotone" dataKey="revenue" stroke="#009933" fillOpacity={1} fill="url(#revenue)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>

          </div>
        }
        <div className="mainflex">
          <div style={{ flex: 1, backgroundColor: "white" }} className="mainstatstics rounded-2 shadow  mb-5 pb-5 ">
            <div className="d-flex justify-content-between mt-2 mr-4 ml-4">
              <h3 className="w-100"><span className="display-6 fs-3" style={{ color: "#8884d8", fontWeight: 500 }} >Views and Likes</span></h3>
              <DatePicker
                selected={startDate}
                showYearPicker
                onChange={(date) => handleYearchange(date)}
                maxDate={new Date()}
                dateFormat="yyyy"
                className="fs-4 text-center mt-2 border"
              />
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
            {/* </div> */}
          </div>
          {
            userToken.role === "admin" &&
            <>
              <div style={{ flex: 1, backgroundColor: "white" }} className=" rounded-2 shadow mb-5 pb-5 visitAnalytics">
                <div className="d-flex justify-content-between mt-2 mr-4 ml-4">
                  <h3 className="w-100"><span className="display-6 fs-3" style={{ color: "#071c36", fontWeight: 500 }}>Visitors</span></h3>
                  <DatePicker
                    selected={year}
                    showYearPicker
                    onChange={(date) => handleAnalyticsYear(date)}
                    maxDate={new Date()}
                    dateFormat="yyyy"
                    className="fs-4 text-center mt-2 border"
                  />
                </div>
                <ResponsiveContainer>
                  <AreaChart width={730} height={250} data={Data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                      <linearGradient id="visits" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#071c36" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#071c36" stopOpacity={0.2} />
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="month" />
                    <YAxis dataKey="visits" axisLine={{ strokeWidth: "0" }} />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Legend />
                    <Area dot={true} type="monotone" dataKey="visits" stroke="#071c36" fillOpacity={1} fill="url(#visits)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </>
          }
        </div>
      </div>
    </>
  );
}

export default Statistics;
