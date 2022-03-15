import './App.css';
import {useState, useEffect} from "react";
import axios from "axios"


function App() {

  const [students, setStudents] = useState([]);

  const getData = async()=>{
    const res = await axios.get("https://api.hatchways.io/assessment/students")
    setStudents(res.data.students)
  }

useEffect(()=>{
  getData();
},[])
  return (
    <div className="App">
     
    </div>
  );
}

export default App;
