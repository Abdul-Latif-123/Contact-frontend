import React, { useEffect, useState } from 'react'

import { MDBTable, MDBTableBody } from 'mdb-react-ui-kit';

import { MDBCollapse } from 'mdb-react-ui-kit';

import './ViewContact.css';

import UserPic from '../Assets/userimg.png'

import { Link, useNavigate, useParams } from 'react-router-dom';

import axios from 'axios';

function ViewContact() {

  const { id } = useParams()

  const base_url = 'http://localhost:8000';

  const fetchData = async (id) => {
    const result = await axios.get(`${base_url}/view-contact/${id}`);
    setContactData(result.data.contacts);
  }

  useEffect(() => {
    fetchData(id)
  }, [])

  const [contactData, setContactData] = useState([]);

  const [isGeneralOpen, setIsGeneralOpen] = useState(false);
  const toggleGeneralOpen = () => setIsGeneralOpen(!isGeneralOpen);

  const [isContactOpen, setIsContactOpen] = useState(false);
  const toggleContactOpen = () => setIsContactOpen(!isContactOpen);

  const [isAddressOpen, setIsAddressOpen] = useState(false);
  const toggleAddressOpen = () => setIsAddressOpen(!isAddressOpen);

  const [isGeolocationOpen, setIsGeolocationOpen] = useState(false);
  const toggleGeolocationOpen = () => setIsGeolocationOpen(!isGeolocationOpen);

  const location = useNavigate();

  const homeClick = (e) => {
    e.preventDefault();
    location('/')
  }

  const deleteContact = async (id) => {
    const result = await axios.delete(`${base_url}/delete-contact/${id}`);
    alert(result.data.message)
    location('/')
  }

  return (
    <div style={{ paddingTop: '67px' }}>
      <div className="d-flex justify-content-center">
        <div className="m-5 w-50 px-5 pt-5 pb-4 border border-danger rounded-5">

          <div className="text-center">
            <img width={'120px'} src={UserPic} alt="" />
          </div>

          <div className='border border-danger mt-4 mb-5'></div>

          <div style={{ cursor: "pointer" }} className={`addresstabhovselhighlight border border-danger rounded-top text-center ${isGeneralOpen ? 'active' : ''}`} onClick={toggleGeneralOpen}>
            <b>General</b>
          </div>
          <MDBCollapse open={isGeneralOpen}>
            <div className='border border-danger mt-0 px-3 pt-3 table-responsive'>
              <MDBTable className='text-white' borderless>
                <MDBTableBody>
                  <tr>
                    <td className='w-50'>
                      <p className='fw-bold mb-1'>ID</p>
                    </td>
                    <td className='w-50'>
                      <p className='fw-normal mb-1'><span className='me-3'>:</span>{contactData.id}</p>
                    </td>
                  </tr>
                  <tr>
                    <td className='w-50'>
                      <p className='fw-bold mb-1'>Name</p>
                    </td>
                    <td className='w-50'>
                      <p className='fw-normal mb-1'><span className='me-3'>:</span>
                        {contactData.name && contactData.name.firstname ? contactData.name.firstname : 'N/A'} {contactData.name && contactData.name.lastname ? contactData.name.lastname : 'N/A'}
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className='w-50'>
                      <p className='fw-bold mb-1'>Username</p>
                    </td>
                    <td className='w-50'>
                      <p className='fw-normal mb-1'><span className='me-3'>:</span>{contactData.username}</p>
                    </td>
                  </tr>
                  <tr>
                    <td className='w-50'>
                      <p className='fw-bold mb-1'>Password</p>
                    </td>
                    <td className='w-50'>
                      <p className='fw-normal mb-1'><span className='me-3'>:</span>{contactData.password}</p>
                    </td>
                  </tr>
                </MDBTableBody>
              </MDBTable>
            </div>
          </MDBCollapse>

          <br />

          <div style={{ cursor: "pointer" }} className={`addresstabhovselhighlight border border-danger rounded-top text-center ${isContactOpen ? 'active' : ''}`} onClick={toggleContactOpen}>
            <b>Contact</b>
          </div>
          <MDBCollapse open={isContactOpen}>
            <div className='border border-danger mt-0 px-3 pt-3 table-responsive'>
              <MDBTable className='text-white' borderless>
                <MDBTableBody>
                  <tr>
                    <td className='w-50'>
                      <p className='fw-bold mb-1'>Email</p>
                    </td>
                    <td className='w-50'>
                      <p className='fw-normal mb-1'><span className='me-3'>:</span>{contactData.email}</p>
                    </td>
                  </tr>
                  <tr>
                    <td className='w-50'>
                      <p className='fw-bold mb-1'>Phone</p>
                    </td>
                    <td className='w-50'>
                      <p className='fw-normal mb-1'><span className='me-3'>:</span>{contactData.phone}</p>
                    </td>
                  </tr>
                </MDBTableBody>
              </MDBTable>
            </div>
          </MDBCollapse>

          <br />

          <div style={{ cursor: "pointer" }} className={`addresstabhovselhighlight border border-danger rounded-top text-center ${isAddressOpen ? 'active' : ''}`} onClick={toggleAddressOpen}>
            <b>Address</b>
          </div>
          <MDBCollapse open={isAddressOpen}>
            <div className='border border-danger mt-0 px-3 pt-3 table-responsive'>
              <MDBTable className='text-white' borderless>
                <MDBTableBody>
                  <tr>
                    <td className='w-50'>
                      <p className='fw-bold mb-1'>Number</p>
                    </td>
                    <td className='w-50'>
                      <p className='fw-normal mb-1'><span className='me-3'>:</span>{contactData.address && contactData.address.number ? contactData.address.number : 'N/A'}</p>
                    </td>
                  </tr>
                  <tr>
                    <td className='w-50'>
                      <p className='fw-bold mb-1'>City</p>
                    </td>
                    <td className='w-50'>
                      <p className='fw-normal mb-1'><span className='me-3'>:</span>{contactData.address && contactData.address.city ? contactData.address.city : 'N/A'}</p>
                    </td>
                  </tr>
                  <tr>
                    <td className='w-50'>
                      <p className='fw-bold mb-1'>Street</p>
                    </td>
                    <td className='w-50'>
                      <p className='fw-normal mb-1'><span className='me-3'>:</span>{contactData.address && contactData.address.street ? contactData.address.street : 'N/A'}</p>
                    </td>
                  </tr>
                  <tr>
                    <td className='w-50'>
                      <p className='fw-bold mb-1'>Zip Code</p>
                    </td>
                    <td className='w-50'>
                      <p className='fw-normal mb-1'><span className='me-3'>:</span>{contactData.address && contactData.address.zipcode ? contactData.address.zipcode : 'N/A'}</p>
                    </td>
                  </tr>
                </MDBTableBody>
              </MDBTable>
            </div>
          </MDBCollapse>

          <br />

          <div style={{ cursor: "pointer" }} className={`addresstabhovselhighlight border border-danger rounded-top text-center ${isGeolocationOpen ? 'active' : ''}`} onClick={toggleGeolocationOpen}>
            <b>Geolocation</b>
          </div>
          <MDBCollapse open={isGeolocationOpen}>
            <div className='border border-danger mt-0 px-3 pt-3 table-responsive'>
              <MDBTable className='text-white' borderless>
                <MDBTableBody>
                  <tr>
                    <td className='w-50'>
                      <p className='fw-bold mb-1'>Latitude</p>
                    </td>
                    <td className='w-50'>
                      <p className='fw-normal mb-1'><span className='me-3'>:</span>{contactData.address && contactData.address.geolocation.lat ? contactData.address.geolocation.lat : 'N/A'}</p>
                    </td>
                  </tr>
                  <tr>
                    <td className='w-50'>
                      <p className='fw-bold mb-1'>Longitude </p>
                    </td>
                    <td className='w-50'>
                      <p className='fw-normal mb-1'><span className='me-3'>:</span>{contactData.address && contactData.address.geolocation.long ? contactData.address.geolocation.long : 'N/A'}</p>
                    </td>
                  </tr>
                </MDBTableBody>
              </MDBTable>
            </div>
          </MDBCollapse>

          <div className="mt-4 d-flex flex-sm-row flex-column justify-content-center">
            <a style={{ backgroundColor: '#FB7423' }} className='rounded-pill text-center px-3 py-2 m-1'>
              <Link className='text-dark' to={`/update-contact/${contactData.id}`}>
                <b>Update Contact</b>
              </Link>
            </a>
            <a onClick={() => deleteContact(contactData.id)} style={{ backgroundColor: '#FB7423', cursor: "pointer" }} className='rounded-pill text-center text-dark px-3 py-2 m-1'><b>Remove Contact</b></a>
            <a onClick={e => homeClick(e)} style={{ backgroundColor: '#FB7423', cursor: "pointer" }} className='rounded-pill text-center text-dark px-3 py-2 m-1'><b>Home</b></a>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ViewContact