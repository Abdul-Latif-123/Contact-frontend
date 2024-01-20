import React, { useState } from 'react'

import { MDBInput } from 'mdb-react-ui-kit';

import axios from 'axios';

import { useNavigate } from 'react-router-dom';

import {
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane
} from 'mdb-react-ui-kit';

function AddContact() {

    const base_url = "http://localhost:8000";

    const location = useNavigate();

    const [fillActive, setFillActive] = useState('tab1');

    const handleFillClick = (value) => {
        if (value === fillActive) {
            return;
        }
        setFillActive(value);
    };

    const [id, setId] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [lat, setLatitude] = useState('');
    const [long, setLongitude] = useState('');
    const [city, setCity] = useState('');
    const [street, setStreet] = useState('');
    const [number, setNumber] = useState('');
    const [zipcode, setZipcode] = useState('');

    const addContact = (e) => {
        e.preventDefault();
        const body = { id, firstname, lastname, email, phone, username, password, lat, long, city, street, number, zipcode }
        const result = axios.post(`${base_url}/add-contact`, body).then((response) => {
            alert(response.data.message);
            location(`/`)
        }).catch((error) => {
            alert("Please enter a unique contact id");
        })
    }

    const homeClick = (e) => {
        e.preventDefault();
        location('/')
    }

    return (
        <div>
            <div className="" style={{ paddingTop: '67px' }}>
                <h2 className='text-center text-danger mt-5 mb-4'><span className='border-3 border-bottom border-danger pb-1'><b>ADD NEW CONTACT</b></span></h2>

                <div className="d-flex justify-content-center">
                    <div className="m-4 w-50 p-3">
                        <MDBTabs fill className='mb-3'>
                            <MDBTabsItem>
                                <MDBTabsLink className='rounded-top' onClick={() => handleFillClick('tab1')} active={fillActive === 'tab1'} style={{
                                    color: 'white',
                                    backgroundColor: fillActive === 'tab1' ? '#333' : 'transparent',
                                    border: '1px solid red',
                                    borderBottomColor: fillActive === 'tab1' ? 'transparent' : 'red'
                                }}>
                                    <b>General</b>
                                </MDBTabsLink>
                            </MDBTabsItem>
                            <MDBTabsItem>
                                <MDBTabsLink className='rounded-top' onClick={() => handleFillClick('tab2')} active={fillActive === 'tab2'} style={{
                                    color: 'white',
                                    backgroundColor: fillActive === 'tab2' ? '#333' : 'transparent',
                                    border: '1px solid red',
                                    borderBottomColor: fillActive === 'tab2' ? 'transparent' : 'red'
                                }}>
                                    <b>Address</b>
                                </MDBTabsLink>
                            </MDBTabsItem>
                        </MDBTabs>

                        <MDBTabsContent>
                            <MDBTabsPane open={fillActive === 'tab1'}>
                                <div className="p-4" style={{ backgroundColor: '#171717' }}>
                                    <MDBInput className='bg-dark' onChange={(e) => setId(e.target.value)} label='ID' type='number' contrast /><br />
                                    <div className="d-flex">
                                        <MDBInput className='bg-dark' onChange={(e) => setFirstname(e.target.value)} label='First Name' type='text' contrast />
                                        &nbsp;&nbsp;
                                        <MDBInput className='bg-dark' onChange={(e) => setLastname(e.target.value)} label='Last Name' type='text' contrast />
                                    </div><br />
                                    <MDBInput className='bg-dark' onChange={(e) => setEmail(e.target.value)} label='Email' type='email' contrast /><br />
                                    <MDBInput className='bg-dark' onChange={(e) => setPhone(e.target.value)} label='Phone Number' type='text' contrast /><br />
                                    <MDBInput className='bg-dark' onChange={(e) => setUsername(e.target.value)} label='Username' type='text' contrast /><br />
                                    <MDBInput className='bg-dark' onChange={(e) => setPassword(e.target.value)} label='Password' type='password' contrast />
                                </div>
                            </MDBTabsPane>
                            <MDBTabsPane open={fillActive === 'tab2'}>
                                <div className="p-4" style={{ backgroundColor: '#171717' }}>
                                    <div className="d-flex">
                                        <MDBInput className='bg-dark' onChange={(e) => setLatitude(e.target.value)} label='Latitude' type='text' contrast />
                                        &nbsp;&nbsp;
                                        <MDBInput className='bg-dark' onChange={(e) => setLongitude(e.target.value)} label='Longitude' type='text' contrast />
                                    </div><br />
                                    <MDBInput className='bg-dark' onChange={(e) => setCity(e.target.value)} label='City' type='text' contrast /><br />
                                    <MDBInput className='bg-dark' onChange={(e) => setStreet(e.target.value)} label='Street' type='text' contrast /><br />
                                    <MDBInput className='bg-dark' onChange={(e) => setNumber(e.target.value)} label='Number' type='number' contrast /><br />
                                    <MDBInput className='bg-dark' onChange={(e) => setZipcode(e.target.value)} label='Zip Code' type='text' contrast />
                                </div>
                            </MDBTabsPane>
                        </MDBTabsContent>
                        <div className="mx-4 d-flex flex-sm-row flex-column justify-content-center">
                            <a onClick={e => addContact(e)} style={{ backgroundColor: '#FB7423', cursor: "pointer" }} className='rounded-pill text-dark px-3 py-2 m-2'><b>Add Contact</b></a>
                            <a onClick={e => homeClick(e)} style={{ backgroundColor: '#FB7423', cursor: "pointer" }} className='rounded-pill text-dark px-3 py-2 m-2'><b>Cancel</b></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddContact