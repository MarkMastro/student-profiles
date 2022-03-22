/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// eslint-disable-next-line no-unused-vars
import css from './Student.css'

import StudentTag from '../StudentTag/StudentTag'

library.add(fas, fab)

export default function Student (props) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [tagInput, setTagInput] = useState('')
  const {
    company,
    email,
    firstName,
    grades,
    id,
    lastName,
    pic,
    skill,
    addTag,
    deleteTag,
    tags
  } = props

  const onDeleteTag = (tag) => {
    deleteTag(tag, id)
  }

  // get the students average grade
  const avg = grades.reduce((a, b) => parseInt(a) + parseInt(b)) / grades.length

  // add all grades to an array
  const gradesObj = grades.map((grade, index) => (
    <p className="student-grades" key={index}>
      Test
      {index}
      {' '}
      {grade}
      %
    </p>
  ))

  // get all student tags to an array
  const studentTags = tags.map((tag, index) => (<StudentTag tag={tag} key={index} onDelete={onDeleteTag} />))

  // change expanded state when button is pressed
  const onExpand = () => {
    setIsExpanded(!isExpanded)
  }

  // handle tag for submission, calls addTag from Application component
  const onTagSubmit = (e) => {
    e.preventDefault()
    addTag(tagInput, id)
    setTagInput('')
  }

  return (

    <div className="student-card">
      <div className="student">
        <img className="student-picture" src={pic} alt="Student" />
        <div className="student-information">
          <h1 className="student-name">
            {firstName}
            {' '}
            {lastName}
          </h1>
          <div data-testid="student" className="student-profile">
            <p>
              Email:
              {email}
            </p>
            <p>
              Company:
              {company}
            </p>
            <p>
              Skill:
              {skill}
            </p>
            <p>
              Average:
              {avg}
            </p>

            {isExpanded ? gradesObj : null}
            {studentTags}
            <form onSubmit={onTagSubmit}>
              <input
                placeholder="Add tag"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
              />
            </form>

          </div>
        </div>
      </div>

      <button data-testid="expand-button" aria-label="Expand Grades" className="student-expand-button" onClick={onExpand}>
        {isExpanded ? <FontAwesomeIcon icon="fa-minus" /> : <FontAwesomeIcon icon="fa-plus" />}

      </button>

    </div>

  )
}
