import React, { useState  } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { userRoleUpdate } from '../actions/userAction'


const ChangeStatus = ({selectedUserId}) => {

    const { loading } = useSelector((state) => state.userRole)
    const [role, setRole] = useState({});
    const dispatch = useDispatch()
    const history = useHistory()
    let token = localStorage.getItem("token");

    const onRoleChange = (e) => {
        var em = e.target.value;
        if (em != "") {
            setRole({ value: em });
        } else {
            setRole({ value: em, message: "set role" });
        }
    };

    const changeRole = async (e) => {
        e.preventDefault();
        const payload = {
            role: role.value
        };
        try {
            dispatch(userRoleUpdate(selectedUserId, payload, token ,history));
        } catch (error) {
            console.error("Error updating role:", error);
        }
    };
    return (
        <div >
            <div class="modal fade" id="myModal" >
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <h4 class="modal-title text-center mt-2 fw-bold">Update Status</h4>
                        <form class="ml-1 mr-1">
                            <div class="form-row">
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <label class="">
                                            Role
                                        </label>
                                        <select
                                            class="form-control text-primary"
                                            id="sel1"
                                            onChange={onRoleChange}
                                        >
                                            <option>Select Role</option>
                                            <option>requester</option>
                                            <option>admin</option>
                                            <option>manager</option>
                                        </select>
                                        <span class="text-danger">{role.message}</span>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                {loading ? (
                                    <button
                                        class="btn btn-block  login-btn"
                                        type="button"
                                        disabled
                                    >
                                        <span
                                            class="spinner-grow spinner-grow-sm"
                                            role="status"
                                            aria-hidden="true"
                                        ></span>
                                        Loading...
                                    </button>
                                ) : (
                                    <button
                                        type="submit"
                                        class="btn login-btn btn-lg btn-block"
                                        onClick={changeRole}
                                    >
                                        Update
                                    </button>
                                )}
                            </div>
                        </form>
                        <div class="modal-footer">
                            <button type="button" class="btn login-btn" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChangeStatus