import React from "react"
import css from './StudentTag.css'

export default function StudentTag(props){
    const {tag, onDelete} = props;
    return(
        <button className="student-tag" onClick={onDelete} value={tag}>
            {tag}
        </button>

    )
}