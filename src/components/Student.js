import React from 'react';
import css from './Student.css'
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {useState} from "react";
import StudentTag from "./StudentTag";


library.add(fas, fab);


export default function Student(props){

    const [isExpanded, setIsExpanded] = useState(false);
    const [tagInput, setTagInput] = useState("");
    const [studentTags, setStudentTags] = useState([]);

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

    const onDelete=(e)=>{
        e.preventDefault();
        setStudentTags(
            studentTags.filter(tag=>tag!==e.target.value)
        )
    }

    const avg = grades.reduce((a, b) => parseInt(a) + parseInt(b)) / grades.length;
    const gradesObj = grades.map((grade, index)=>(<p className="student-grades" key={index}>Test {index} {grade}%</p>))
    const tags = studentTags.map((tag, index)=>(<StudentTag tag={tag} key={index} onDelete={onDelete}/>))
    
    const onExpand=()=>{
        setIsExpanded(!isExpanded)
    }
    const addTag=(e)=>{
        e.preventDefault();
        setStudentTags([...studentTags, tagInput])
        setTagInput("")
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
                            {tags}
                            <form onSubmit={e=>addTag(e)}>
                                <input
                                placeholder='Add tag'
                                value= {tagInput}
                                onChange={e=>setTagInput(e.target.value)}
                                ></input>
                            </form>

                        </div>
                    </div>
                </div>
               
                <button className="student-expand-button" onClick={onExpand}>
                    {isExpanded ? <FontAwesomeIcon icon="fa-minus" /> : <FontAwesomeIcon icon="fa-plus" />}
                    
                </button>
            
                
            </div>
    

    )

}
