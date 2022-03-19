import './Application.css';
import {useState, useEffect} from "react";
import axios from "axios"
import Student from './Student';



function App() {

  const [studentData, setStudentData] = useState([]);
  const [studentDataDisplay, setStudentDataDisplay] = useState([]);
  const [studentSearch, setStudentSearch] = useState("");
  const [studentTagSearch, setStudentTagSearch] = useState("");




useEffect(()=>{
    axios.get("https://api.hatchways.io/assessment/students")
    .then(response=>{
        setStudentData(response.data.students)
        setStudentDataDisplay(response.data.students)
    })

},[])

useEffect(()=>{

    const filteredStudents = studentData.filter( student => student.firstName.concat(student.lastName).toLowerCase().includes(studentSearch.toLowerCase()))
    setStudentDataDisplay(filteredStudents)

},[studentSearch])

const studentsArray = studentDataDisplay.map((student)=>{
 return <Student {...student} key={student.id}/>
})
  return (
    <div className="application" >
        <input
        className='student-name-search' 
        type="text"
        onChange={(e)=>{setStudentSearch(e.target.value)}}
        value={studentSearch}
        placeholder="Search for a students name"
        >
        </input>
        <input
        className='student-tags-search' 
        type="text"
        onChange={(e)=>{setStudentTagSearch(e.target.value)}}
        value={studentTagSearch}
        placeholder="Search for students' tags"
        >
        </input>
      {studentsArray}
    </div>
  );
}

export default App;