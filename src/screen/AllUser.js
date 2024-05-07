import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getAllUser, deletedUser } from '../actions/userAction';
import Sidebar from './Sidebar';
import './alluser.css';
import ChangeStatus from './ChangeStatus';
import DataTable from '../components/DataTable';
import { MdDelete } from "react-icons/md";
import { MdOutlineModeEditOutline } from "react-icons/md";
import Spinner from "react-bootstrap/Spinner";

const AllUser = () => {
    const [selectedUserId, setSelectedUserId] = useState(null);
    const [label, setLabel] = useState('');
    const [model, setModel] = useState(false);
    let pageLimit = 25;
    const token = localStorage.getItem('token');
    const { allUsers, userSLoading } = useSelector((state) => state.allUser);
    const [pageCount, setpageCount] = useState(1);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllUser(token, pageCount, pageLimit));
    }, []);

    const deleteHandler = (id) => {
        dispatch(deletedUser(id, token))
            .then(() => {
                window.location.reload();
            })
            .catch((error) => {
                console.error('Error deleting user:', error);
            });
    };

    const openChangeStatusModal = (userId) => {
        setSelectedUserId(userId);
        setModel(true);
    };

    const closeChangeStatusModal = () => {
        setModel(false);
    };

    const columns = [
        {
            Header: 'First Name',
            accessor: 'firstname',
        },

        {
            Header: 'Last Name',
            accessor: 'lastname',
        },
        {
            Header: 'Email',
            accessor: 'email',
        },
        {
            Header: 'Phone Number',
            accessor: 'phoneNumber',
        },
        {
            Header: 'Role',
            accessor: 'role',
        },
        {
            Header: 'Action',
            accessor: '',
            Cell: ({ row }) => (
                <div className="d-flex gap-3">
                    <div className="w-25">
                        <MdOutlineModeEditOutline
                            onClick={() => openChangeStatusModal(row.original._id)}
                            cursor="pointer"
                            data-toggle="modal"
                            data-target="#myModal"
                            className="btn-primary text-white rounded-circle p-1 w-100 h-100"
                        />
                    </div>

                    <div className="w-25">
                        <MdDelete
                            onClick={() => deleteHandler(row.original._id)}
                            cursor="pointer"
                            className="bg-danger text-white rounded-circle p-1 w-100 h-100"
                        />
                    </div>

                </div>
            ),
        },
    ];

    return (
        <>
            <Header setLabel={setLabel} />
            <div className="w-100 pt-2">
                <div className="d-flex position-relative flex-nowrap">
                    <Sidebar />
                    {userSLoading ? (
                        <div className="d-flex justify-content-center align-items-center flex-grow-1">
                            <Spinner animation="border" variant="dark" />
                        </div>
                    ) : (
                        <div className="mb-4" style={{ marginTop: '117px' }}>
                            {allUsers.length > 0 && (
                                <DataTable
                                    data={allUsers}
                                    columns={columns}
                                    title="All Users"
                                    placeholder=""
                                />
                            )}
                        </div>
                    )}
                </div>
                {selectedUserId && (
                    <ChangeStatus
                        selectedUserId={selectedUserId}
                        closeModal={closeChangeStatusModal}
                    />
                )}
            </div>
            <Footer />
        </>
    );
};

export default AllUser;
