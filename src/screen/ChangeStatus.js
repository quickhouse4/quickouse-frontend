import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { userRoleUpdate } from '../actions/userAction';

const ChangeStatus = ({ selectedUserId, closeModal }) => {
    const { loading } = useSelector((state) => state.userRole);
    const [role, setRole] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();
    const token = localStorage.getItem('token');

    const onRoleChange = (e) => {
        setRole(e.target.value);
    };

    const changeRole = async (e) => {
        e.preventDefault();
        const payload = {
            role: role
        };
        try {
            dispatch(userRoleUpdate(selectedUserId, payload, token, history));
            closeModal(); 
        } catch (error) {
            console.error("Error updating role:", error);
        }
    };

    return (
        <div className="modal fade" role="dialog" id="myModal">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <h4 className="modal-title text-center mt-2 fw-bold">Update Status</h4>
                    <form className="ml-1 mr-1">
                        <div className="form-row">
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label className='fs-4'>Role</label>
                                    <select
                                        className="form-control text-primary"
                                        id="sel1"
                                        onChange={onRoleChange}
                                        value={role}
                                    >
                                        <option value="">Select Role</option>
                                        <option value="requester">Requester</option>
                                        <option value="admin">Admin</option>
                                        <option value="manager">Manager</option>
                                    </select>
                                    {role === '' && <span className="text-danger">Please select a role</span>}
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            {loading ? (
                                <button
                                    className="btn btn-block login-btn"
                                    type="button"
                                >
                                    Loading...
                                </button>
                            ) : (
                                <button
                                    type="button"
                                    className="btn login-btn btn-lg btn-block"
                                    onClick={changeRole}
                                    // disabled={!role}
                                >
                                    Update
                                </button>
                            )}
                        </div>
                    </form>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn login-btn"
                            onClick={closeModal}
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChangeStatus;
