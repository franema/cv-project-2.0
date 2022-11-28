import React from 'react'

function GeneralInfo(props) {
  return (
    <div className='generalInfo-container'>
          <h2>Personal Information</h2>
          <input type="text" className='info-input' id='firstName' placeholder='First Name' onChange={props.handleChange}></input>
          <input type="text" className='info-input' id='lastName' placeholder='Last Name' onChange={props.handleChange}></input>
          <input type="text" className='info-input' id='title' placeholder='Title' onChange={props.handleChange}></input>
          <input type="text" className='info-input' id='adress' placeholder='Adress' onChange={props.handleChange}></input>
          <input type="text" className='info-input' id='phone' placeholder='Phone' onChange={props.handleChange}></input>
          <input type="text" className='info-input' id='email' placeholder='Email' onChange={props.handleChange}></input>
          <input type="text" className='info-input' id='description' placeholder='Description' onChange={props.handleChange}></input>
      </div>
  )
}

export default GeneralInfo