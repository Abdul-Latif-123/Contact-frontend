import React from 'react'

import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';

import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <MDBNavbar light bgColor='black' className='fixed-top'>
        <MDBContainer fluid>
          <MDBNavbarBrand>
            <i className="fa-regular fs-1 fa-address-book mx-3" style={{ color: "#F52B69" }}></i>
            <Link to={'/'}>
              <span style={{ color: "#ffffff" }}><b>Nexus Calls</b></span>
            </Link>
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default Header