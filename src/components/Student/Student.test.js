import React from 'react'
import {
  fireEvent, render, screen
} from '@testing-library/react'

/*
  We import the component that we are testing
*/
import Student from './Student'

/*
  A test that renders a React Component
*/
describe('Student Component', () => {
  const student = {
    city: 'Fushë-Muhurr',
    company: 'Yadel',
    email: 'iorton0@imdb.com',
    firstName: 'Ingaberg',
    grades: [
      '78',
      '100',
      '92',
      '86',
      '89',
      '88',
      '91',
      '87'
    ],
    id: '1',
    lastName: 'Orton',
    pic: 'https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/voluptasdictablanditiis.jpg',
    skill: 'Oracle',
    tags: [],
    addTag: 'ƒ addTag() {}',
    deleteTag: 'ƒ deleteTag() {}',
    average: 88.875
  }

  it('renders Student component with email', () => {
    render(<Student {...student} key={student.id} addTag={student.addTag} deleteTag={student.deleteTag} />)
    expect(screen.getByText('Email: iorton0@imdb.com')).toBeInTheDocument()
  })
  it('renders Student component with name correctly', () => {
    render(<Student {...student} key={student.id} addTag={student.addTag} deleteTag={student.deleteTag} />)
    expect(screen.getByText('Ingaberg Orton')).toBeInTheDocument()
  })
  it('renders Student component with company', () => {
    render(<Student {...student} key={student.id} addTag={student.addTag} deleteTag={student.deleteTag} />)
    expect(screen.getByText('Company: Yadel')).toBeInTheDocument()
  })
  it('renders Student component with correct average', () => {
    render(<Student {...student} key={student.id} addTag={student.addTag} deleteTag={student.deleteTag} />)
    expect(screen.getByText('Company: Yadel')).toBeInTheDocument()
  })

  it('Clicking the expand button should reveal grades', () => {
    render(<Student {...student} key={student.id} addTag={student.addTag} deleteTag={student.deleteTag} />)
    fireEvent.click(screen.getByTestId('expand-button'))
    expect(screen.getByText('Test 0 78%')).toBeInTheDocument()
  })
  it('Clicking the expand button twice should reveal grades then hide', () => {
    render(<Student {...student} key={student.id} addTag={student.addTag} deleteTag={student.deleteTag} />)
    fireEvent.click(screen.getByTestId('expand-button'))
    expect(screen.getByText('Test 0 78%')).toBeInTheDocument()
    fireEvent.click(screen.getByTestId('expand-button'))
    expect(screen.queryByText('Test 0 78%')).toBeNull()
  })
})
