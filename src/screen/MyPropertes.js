import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Sidebar from './Sidebar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getClientUssd } from '../actions/ussdAction';
import DataTable from '../components/DataTable';
import { formatPrice } from '../priceFormated';
import { MdDelete } from "react-icons/md";
import { FaRegEye } from "react-icons/fa6";
import { myProperties } from '../actions/propertiesAction';
import moment from 'moment';

const MyProperties = () => {
    const [label, setLabel] = useState('');
    const token = localStorage.getItem("token")
    const { myProperty, loadingMyProperties } = useSelector((state) => state.myPropertiesList)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getClientUssd())
        dispatch(myProperties(token))
    }, [dispatch, token])

    const columns = [
        {
            Header: 'Published On',
            accessor: 'publishedOn',
            Cell: ({ value }) => moment(value).format("MMM Do YY")
        },
        {
            Header: 'Image',
            accessor: 'mainPhoto',
            Cell: ({ value }) => value ? <img src={value} alt="Image" style={{width: '50px', height: '50px', borderRadius: '50%'}} /> : null,
        },
        {
            Header: 'Status',
            accessor: 'businessStatus',
        },
        {
            Header: 'Name',
            accessor: 'propertyName',
        },
        {
            Header: 'Type',
            accessor: 'type',
        },
        {
            Header: 'Price',
            accessor: 'price',
            Cell: ({ value }) => formatPrice(value) + ' RWF',
        },
        {
            Header: 'Province',
            accessor: 'city',
        },
        {
            Header: 'District',
            accessor: 'district',
        },
        {
            Header: 'Sector',
            accessor: 'sector',
        },
        {
            Header: 'Views',
            accessor: 'views',
        },
    ];

    return (
        <>
            <Header setLabel={setLabel} />
            <div className="w-100 pt-2">
                <div className="d-flex position-relative flex-nowrap">
                    <Sidebar />
                    <div className="mb-4" style={{ marginTop: '117px' }}>
                        {loadingMyProperties ? (
                            <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh', marginLeft:"500px" }}>
                                <div className="spinner-border" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </div>
                        ) : myProperty && myProperty.length > 0 ? (
                            <DataTable
                                data={myProperty}
                                columns={columns}
                                title="My Properties"
                                placeholder=""
                            />
                        ) : (
                            <div className="d-flex justify-content-center align-items-center">
                                <h2>No properties available</h2>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default MyProperties;
