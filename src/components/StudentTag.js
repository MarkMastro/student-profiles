import React from "react"
import css from './StudentTag.css'

export default function StudentTag(props){
    const {tag, onDelete} = props;

    const onDeleteTag=(e)=>{
        e.preventDefault();
        onDelete(e.target.value)
    }
    return(
        <button className="student-tag" onClick={onDeleteTag} value={tag}>
            {tag}
        </button>

    )
}