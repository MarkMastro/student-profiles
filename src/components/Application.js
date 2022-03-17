import './Application.css';
import {useState, useEffect} from "react";
import axios from "axios"
import Student from './Student';

function App() {

  const [studentData, setStudentData] = useState([]);

  const getData = async()=>{
    const res = await axios.get("https://api.hatchways.io/assessment/students")
    setStudentData(res.data.students)
  }

useEffect(()=>{
  getData();
},[])

const studentsArray = studentData.map((student)=>{
 return <Student {...student} key={student.id}/>
})
  return (
    <div className="application" >
      {studentsArray}
    </div>
  );
}

export default App;