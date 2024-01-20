import React, { useEffect, useState } from 'react'

import { MDBInput } from 'mdb-react-ui-kit';

import {
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane
} from 'mdb-react-ui-kit';

import { useNavigate, useParams } from 'react-router-dom';

import axios from 'axios';

function UpdateContact() {

    const [fillActive, setFillActive] = useState('tab1');

    const handleFillClick = (value) => {
        if (value === fillActive) {
            return;
        }
        setFillActive(value);
    };

    const [conid, setId] = useState('');
    const [confirstname, setFirstname] = useState('');
    const [conlastname, setLastname] = useState('');
    const [conemail, setEmail] = useState('');
    const [conphone, setPhone] = useState('');
    const [conusername, setUsername] = useState('');
    const [conpassword, setPassword] = useState('');
    const [conlatitude, setLatitude] = useState('');
    const [conlongitude, setLongitude] = useState('');
    const [concity, setCity] = useState('');
    const [constreet, setStreet] = useState('');
    const [connumber, setNumber] = useState('');
    const [conzipcode, setZipcode] = useState('');

    const { id } = useParams()

    const base_url = 'http://localhost:8000';

    const fetchData = async (id) => {
        const result = await axios.get(`${base_url}/view-contact/${id}`);

        setId(result.data.contacts.id);
        setFirstname(result.data.contacts.name.firstname);
        setLastname(result.data.contacts.name.lastname);
        setEmail(result.data.contacts.email);
        setPhone(result.data.contacts.phone);
        setUsername(result.data.contacts.username);
        setPassword(result.data.contacts.password);
        setLatitude(result.data.contacts.address.geolocation.lat);
        setLongitude(result.data.contacts.address.geolocation.long);
        setCity(result.data.contacts.address.city);
        setStreet(result.data.contacts.address.street);
        setNumber(result.data.contacts.address.number);
        setZipcode(result.data.contacts.address.zipcode);
    }

    useEffect(() => {
        fetchData(id)
    }, [])

    const location = useNavigate()

    const updateContact = async (e) => {
        e.preventDefault()
        const body = {
            urlid: id,
            id: conid,
            firstname: confirstname,
            lastname: conlastname,
            email: conemail,
            phone: conphone,
            username: conusername,
            password: conpassword,
            lat: conlatitude,
            long: conlongitude,
            city: concity,
            street: constreet,
            number: connumber,
            zipcode: conzipcode
        };

        const result = await axios.post(`${base_url}/update-contact/${id}`, body).then((response) => {
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
                <h2 className='text-center text-danger mt-5 mb-4'><span className='border-3 border-bottom border-danger pb-1'><b>UPDATE CONTACT</b></span></h2>

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
                                    <MDBInput className='bg-dark' value={conid} onChange={(e) => setId(e.target.value)} label='ID' type='number' contrast /><br />
                                    <div className="d-flex">
                                        <MDBInput className='bg-dark' value={confirstname} onChange={(e) => setFirstname(e.target.value)} label='First Name' type='text' contrast />
                                        &nbsp;&nbsp;
                                        <MDBInput className='bg-dark' value={conlastname} onChange={(e) => setLastname(e.target.value)} label='Last Name' type='text' contrast />
                                    </div><br />
                                    <MDBInput className='bg-dark' value={conemail} onChange={(e) => setEmail(e.target.value)} label='Email' type='email' contrast /><br />
                                    <MDBInput className='bg-dark' value={conphone} onChange={(e) => setPhone(e.target.value)} label='Phone Number' type='text' contrast /><br />
                                    <MDBInput className='bg-dark' value={conusername} onChange={(e) => setUsername(e.target.value)} label='Username' type='text' contrast /><br />
                                    <MDBInput className='bg-dark' value={conpassword} onChange={(e) => setPassword(e.target.value)} label='Password' type='password' contrast />
                                </div>
                            </MDBTabsPane>
                            <MDBTabsPane open={fillActive === 'tab2'}>
                                <div className="p-4" style={{ backgroundColor: '#171717' }}>
                                    <div className="d-flex">
                                        <MDBInput className='bg-dark' value={conlatitude} onChange={(e) => setLatitude(e.target.value)} label='Latitude' type='text' contrast />
                                        &nbsp;&nbsp;
                                        <MDBInput className='bg-dark' value={conlongitude} onChange={(e) => setLongitude(e.target.value)} label='Longitude' type='text' contrast />
                                    </div><br />
                                    <MDBInput className='bg-dark' value={concity} onChange={(e) => setCity(e.target.value)} label='City' type='text' contrast /><br />
                                    <MDBInput className='bg-dark' value={constreet} onChange={(e) => setStreet(e.target.value)} label='Street' type='text' contrast /><br />
                                    <MDBInput className='bg-dark' value={connumber} onChange={(e) => setNumber(e.target.value)} label='Number' type='number' contrast /><br />
                                    <MDBInput className='bg-dark' value={conzipcode} onChange={(e) => setZipcode(e.target.value)} label='Zip Code' type='text' contrast />
                                </div>
                            </MDBTabsPane>
                        </MDBTabsContent>
                        <div className="mx-4 d-flex flex-sm-row flex-column justify-content-center">
                            <a onClick={e => updateContact(e)} style={{ backgroundColor: '#FB7423', cursor: "pointer" }} className='rounded-pill text-dark px-3 py-2 m-2'><b>Update Contact</b></a>
                            <a onClick={e => homeClick(e)} style={{ backgroundColor: '#FB7423', cursor: "pointer" }} className='rounded-pill text-dark px-3 py-2 m-2'><b>Cancel</b></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpdateContact