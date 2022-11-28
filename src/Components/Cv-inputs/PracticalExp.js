import React from 'react'

function PracticalExp(props) {
  return (
    <div className='practical-container'>
                <h2>Experience</h2>
                <input type="text" className='info-input' id='position' placeholder='Position' onChange={props.handleChange}></input>
                <input type="text" className='info-input' id='company' placeholder='Company' onChange={props.handleChange}></input>
                <input type="text" className='info-input' id='pr_from' placeholder='From' onChange={props.handleChange}></input>
                <input type="text" className='info-input' id='pr_to' placeholder='To' onChange={props.handleChange}></input>
                <button type="submit">Delete</button>
                <button type='reset'>Add</button>
            </div>
  )
}

export default PracticalExp