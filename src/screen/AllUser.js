import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Spinner from "react-bootstrap/Spinner";
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getAllUser, deletedUser } from '../actions/userAction';
import Sidebar from './Sidebar';
import ReactPaginate from 'react-paginate';
import "./alluser.css"
import ChangeStatus from './ChangeStatus';

const AllUser = () => {
    const [selectedUserId, setSelectedUserId] = useState(null);
    const [label, setLabel] = useState('');
    let pageLimit = 25;
    const token = localStorage.getItem("token")
    const myUser = useSelector((state) => state.allUser)
    const { allUsers, userSLoading, totalPages } = myUser
    const [pageCount, setpageCount] = useState(1);
    let pages = totalPages;
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllUser(token, pageCount, pageLimit))
    }, [])

    const deleteHandler = (id) => {
        dispatch(deletedUser(id, token))
            .then(() => {
                window.location.reload();
            })
            .catch((error) => {
                console.error("Error deleting user:", error);
            });
    };

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "/assets/js/script.js";
        script.async = true;
        document.body.appendChild(script);
    }, [])

    let handlePageClick = (data) => {
        let currentPage = data.selected + 1;
        setpageCount(currentPage);
        dispatch(getAllUser(token, pageCount, pageLimit))

    };
    const openChangeStatusModal = (userId) => {
        setSelectedUserId(userId);
    };

    return (
        <>
            <Header setLabel={setLabel} />
            <div class="w-100 pt-2">
                <div class="d-flex position-relative flex-nowrap">
                    <Sidebar />
                    <main class="cd__main" style={{ marginTop: "120px" }}>
                        <table id="example" class="table table-striped" style={{ width: "100%" }}>
                            <thead>
                                <tr>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Email</th>
                                    <th>Phone Number</th>
                                    <th>Role</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {allUsers && allUsers.map((user, index) => (
                                    <tr key={index}>
                                        <td>{user.firstname}</td>
                                        <td>{user.lastname}</td>
                                        <td>{user.email}</td>
                                        <td>{user.phoneNumber}</td>
                                        <td>{user.role}</td>
                                        <td>
                                            <button
                                                type="button"
                                                class="btn login-btn mr-2"
                                                data-toggle="modal"
                                                data-target="#myModal"
                                                onClick={() => openChangeStatusModal(user._id)}
                                            >Change
                                            </button>
                                            <button onClick={() => deleteHandler(user._id)} className="btn btn-danger">Delete</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </main>
                    {/* <div class="col-md-10 col-xl-10 user-list" style={{ marginTop: "120px", marginBottom: "20px" }}>
                        <div class="row user-scroll">
                            <div class="col-md-12">
                                <div class="row">
                                    {userSLoading ? (
                                        <h2 class="text-center mt-5 pt-5">
                                            {" "}
                                            <Spinner
                                                animation="border"
                                                variant="dak"
                                                class="text-center mt-5 pt-5"
                                            />
                                        </h2>
                                    ) : (
                                        allUsers && allUsers.map((user, index) => (
                                            <div class="col-md-4" key={index}>
                                                <div
                                                    class="card mt-3"
                                                    style={{
                                                        color: "black"
                                                    }}
                                                    key={user._id}
                                                >
                                                    <div class="card-body">
                                                        <div class="">
                                                            <h4>Name:{" "}<span class="display-5 fs-3">{user.firstname}{" "}{user.lastname}</span></h4>
                                                            <h5>Email:{" "}<span className="display-6 fs-4">{user.email}</span></h5>
                                                            <h5>Role:{" "}<span className="display-6 fs-4">{user.role}</span></h5>
                                                            <h5>PhoneNumber:{" "}<span className="display-6 fs-4">{user.phoneNumber}</span></h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    )}
                                    <ReactPaginate
                                        previousLabel={"previous"}
                                        nextLabel={"next"}
                                        breakLabel={"..."}
                                        pageCount={pages}
                                        onPageChange={handlePageClick}
                                        containerClassName={"pagination justify-content-center"}
                                        pageClassName={"page-item"}
                                        pageLinkClassName={"page-link"}
                                        previousClassName={"page-item"}
                                        previousLinkClassName={"page-link"}
                                        nextClassName={"page-item"}
                                        nextLinkClassName={"page-link"}
                                        breakClassName={"page-item"}
                                        breakLinkClassName={"page-link"}
                                        activeClassName={"active"}
                                    />
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
                <ChangeStatus selectedUserId={selectedUserId} />
            </div>
            <Footer />
        </>
    )
}

export default AllUser