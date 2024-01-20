import React from 'react'

function PageNotFound() {
  return (
    <div className='m-5 p-5'>
      <div className='d-flex flex-column justify-content-center align-items-center m-5 p-5'>
        <h1 className='text-danger mt-3 mb-3'><strong>404 : ERROR</strong></h1>
        <p><strong>Page Not Found <span style={{ fontSize: '18px' }}>&#128532;</span></strong></p>
        <p>Nexus Calls could not find the requested page.</p>
      </div>
    </div>
  )
}

export default PageNotFound