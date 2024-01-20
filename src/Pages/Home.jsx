import React, { useEffect, useState } from 'react'

import Img1 from '../Assets/homeimg1.png';

import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

import axios from 'axios';

import { Link } from 'react-router-dom';

import { MDBTooltip } from 'mdb-react-ui-kit';

function Home() {

    const base_url = 'http://localhost:8000';

    const fetchData = async () => {
        const result = await axios.get(`${base_url}/get-all-contacts`);
        setAllContacts(result.data.contacts);
    }

    useEffect(() => {
        fetchData()
    }, [])

    const [allContacts, setAllContacts] = useState([]);

    const deleteContact = async (id) => {
        const result = await axios.delete(`${base_url}/delete-contact/${id}`);
        alert(result.data.message)
        fetchData()
    }

    return (
        <div className="container" style={{ paddingTop: '67px' }}>
            <div className='row align-items-center justify-content-center m-5'>
                <div className='col-sm-6'>
                    <h2>Hey there!<br />Welcome to <span style={{ color: "#FB7423" }}><b>Nexus Calls.</b></span></h2>
                    <p style={{ textAlign: "justify" }}><span style={{ color: "#FB7423" }}>Nexus Calls</span> is your go-to destination for easily accessible and up-to-date contact information. Whether you're trying to connect with friends, family, colleagues, or businesses, our platform simplifies the process of finding and sharing contact details.</p>
                </div>
                <div className='col-sm-6 text-center'>
                    <img src={Img1} width={'90%'} style={{ borderRadius: '25px' }} alt="" />
                </div>
            </div>
            <h2 className='text-center text-danger mt-5 mb-4'><span className='border-3 border-bottom border-danger pb-1'><b>All Contacts</b></span></h2>

            <div className="table-responsive mb-5">
                <div className='mt-0 mb-0' style={{ float: 'right' }}>
                    <span className='border-success border-bottom pb-1'>
                        <a href="/" className='border-success'>
                            <Link to={'/add-contact'}>
                                <i className="fa-solid fa-user-plus fs-5 pe-2" style={{ color: "#14A44C" }}></i>
                                <span className='text-decoration-none text-success'>Add New Contact</span>
                            </Link>
                        </a>
                    </span>
                </div>
                <MDBTable className='text-white' align='middle'>
                    <MDBTableHead>
                        <tr>
                            <th scope='col'><b>ID</b></th>
                            <th scope='col'><b>Name</b></th>
                            <th scope='col'><b>Email</b></th>
                            <th scope='col'><b>Phone</b></th>
                            <th scope='col'><b>Actions</b></th>
                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                        {
                            allContacts.map((item) => (
                                <tr>
                                    <td>
                                        <p className='fw-bold mb-1'>{item.id}</p>
                                    </td>
                                    <td>
                                        <p className='fw-normal mb-1'><i className="fa-solid fa-user pe-2" style={{ color: "#00eeff" }}></i>{item.name && item.name.firstname ? item.name.firstname : 'N/A'} {item.name && item.name.lastname ? item.name.lastname : 'N/A'}</p>
                                    </td>
                                    <td>
                                        <p className='fw-normal mb-1'><i className="fa-solid fa-envelope pe-2" style={{ color: "#f9761f" }}></i>{item.email}</p>
                                    </td>
                                    <td>
                                        <p className='fw-normal mb-1'><i className="fa-solid fa-phone pe-2" style={{ color: "#63E6BE" }}></i>{item.phone}</p>
                                    </td>
                                    <td>
                                        <MDBTooltip tag='i' placement='left' title="View Contact">
                                            <Link to={`/view-contact/${item.id}`}>
                                                <i className="fa-solid fa-eye me-3" style={{ color: "#74C0FC", cursor: "pointer" }}></i>
                                            </Link>
                                        </MDBTooltip>
                                        <MDBTooltip tag='i' placement='left' title="Update Contact">
                                            <Link to={`/update-contact/${item.id}`}>
                                                <i className="fa-solid fa-pen-to-square me-3" style={{ color: "#FFD43B", cursor: "pointer" }}></i>
                                            </Link>
                                        </MDBTooltip>
                                        <MDBTooltip tag='i' placement='left' title="Delete Contact">
                                            <i onClick={() => deleteContact(item.id)} className="fa-solid fa-trash" style={{ color: "#ff0000", cursor: "pointer" }}></i>
                                        </MDBTooltip>
                                    </td>
                                </tr>
                            ))
                        }
                    </MDBTableBody>
                </MDBTable>

            </div>
        </div>
    )
}

export default Home