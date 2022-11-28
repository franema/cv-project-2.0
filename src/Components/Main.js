import React, { useState } from 'react'
import GeneralInfo from './Cv-inputs/GeneralInfo'
import PracticalExp from './Cv-inputs/PracticalExp'
import EdExp from './Cv-inputs/EdExp'
import ContentDisplay from './ContentDisplay'


function Main() {

    const [cvInfo, setCvInfo] = useState({
        firstName: "",
        lastName: "",
        title: "",
        adress: "",
        phone: "",
        email: "",
        description: "",
        university: "",
        degree: "",
        subject: "",
        ed_from: "",
        ed_to: "",
        position: "",
        company: "",
        pr_from: "",
        pr_to: ""
    })


    const handleChange = (e) => {
        setCvInfo({ ...cvInfo, [e.target.id]: (e.target.value) })
    }

    return (
        <div className='main-container'>
            <div className="inputs-container">
                <GeneralInfo handleChange={handleChange}></GeneralInfo>
                <PracticalExp handleChange={handleChange}></PracticalExp>
                <EdExp handleChange={handleChange}></EdExp>
            </div>
            <div className="display-container">
                <ContentDisplay cvInfo={cvInfo}></ContentDisplay>
            </div>
        </div>)
}

export default Main