import React from 'react';
import css from './Student.css'
export default function Student(props){
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
    return(
        <div className="student-profile">
            <img className="student-picture" src={pic} alt="Student"/>
            <h1 className="name">{firstName} {lastName}</h1> 
            <div className="student-information">
                <p >Email: {email}</p>
                <p>Company: {company}</p>
                <p>Skill: {skill}</p>
                <p>Average: {avg} </p>
            </div>
            
        </div>


    )

}
