import React from 'react';
import css from './Student.css'
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {useState} from "react";


library.add(fas, fab);


export default function Student(props){

const [isExpanded, setIsExpanded] = useState(false);

    const {
        city,
        company,
        email,
        firstName,
        grades,
        id,
        lastName,
        pic,
        skill
    } = props;
    const avg = grades.reduce((a, b) => parseInt(a) + parseInt(b)) / grades.length;
    const gradesObj = grades.map((grade, index)=>(<p className="student-grades" key={index}>Test {index} {grade}%</p>))
    
    const onExpand=()=>{
        setIsExpanded(!isExpanded)
    }
    return(
        
            <div className="student-card">
                <div className="student">
                    <img className="student-picture" src={pic} alt="Student"/>
                    <div className='student-information'>
                        <h1 className="student-name">{firstName} {lastName}</h1> 
                        <div className="student-profile">
                            <p>Email: {email}</p>
                            <p>Company: {company}</p>
                            <p>Skill: {skill}</p>
                            <p>Average: {avg} </p>
                        
                            {isExpanded ? gradesObj : null}

                        </div>

                    </div>
                </div>
               
                <button className="student-expand-button" onClick={onExpand}>
                    {isExpanded ? <FontAwesomeIcon icon="fa-minus" /> : <FontAwesomeIcon icon="fa-plus" />}
                    
                </button>
            
                
            </div>
    

    )

}
