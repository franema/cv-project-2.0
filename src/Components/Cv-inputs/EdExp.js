import React from 'react'

function EdExp(props) {
    return (
        <div className='edExp-container'>
            <h2>Education</h2>
            <input type="text" className='info-input' id='university' placeholder='University' onChange={props.handleChange}></input>
            <input type="text" className='info-input' id='degree' placeholder='Degree' onChange={props.handleChange}></input>
            <input type="text" className='info-input' id='subject' placeholder='Subject' onChange={props.handleChange}></input>
            <input type="text" className='info-input' id='ed_from' placeholder='From' onChange={props.handleChange}></input>
            <input type="text" className='info-input' id='ed_to' placeholder='To' onChange={props.handleChange}></input>
            <button type="submit">Delete</button>
            <button type='reset'>Add</button>
        </div>)
}

export default EdExp