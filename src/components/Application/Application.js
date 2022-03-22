import './Application.css';
import {useState, useEffect} from "react";
import axios from "axios"
import Student from '../Student/Student';



function App() {

  const [studentData, setStudentData] = useState([]);
  const [studentDataDisplay, setStudentDataDisplay] = useState([]);
  const [studentSearch, setStudentSearch] = useState("");
  const [studentTagSearch, setStudentTagSearch] = useState("");


const addTags=(students)=>{
  const studentsWithTags = [];
  students.forEach(student => {
    Object.assign(student, { tags:[]})
    studentsWithTags.push(student)
  });
  setStudentData(studentsWithTags);
}

useEffect(()=>{
    axios.get("https://api.hatchways.io/assessment/students")
    .then(response=>{
        addTags(response.data.students)
        setStudentDataDisplay(response.data.students)
    })

},[])

useEffect(()=>{
    let filteredStudents =  studentData.filter(student => {
      let flag = false;
      student.tags.forEach(tag => {
        if(tag.toLowerCase().includes(studentTagSearch.toLowerCase().trim())){
          flag = true;
        }
      });
      return flag;
    });
    if(studentTagSearch===""){
      filteredStudents=studentData;
    }
    filteredStudents = filteredStudents.filter( student => student.firstName.concat(student.lastName).toLowerCase().includes(studentSearch.toLowerCase().trim()))
    setStudentDataDisplay(filteredStudents)

},[studentTagSearch, studentSearch, studentData])


const addTag=(tagInput, studentId)=>{
  const studentArray = [...studentData]

  studentArray.forEach(student => {
    if(student.id === studentId){
      student.tags.push(tagInput.trim());
      setStudentDataDisplay(studentArray)
    }
  });

}

const deleteTag=(tag, studentId)=>{
  const studentArray = [...studentData];
  const index = studentArray[studentId-1].tags.indexOf(tag);
  studentArray[studentId-1].tags.splice(index,1)
  setStudentDataDisplay(studentArray)
  
}

const studentsArray = studentDataDisplay.map((student)=>{
 return <Student {...student} key={student.id} addTag={addTag} deleteTag={deleteTag}/>
})
  return (
    <div className="application" data-testid = "application">
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