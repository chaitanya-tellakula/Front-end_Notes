import { useRef, useState } from "react";


//In this example we can clearly see that useRef
//used to point to the input variable 
// insted of using state we used the useRef


function MyComponent5() {
 
  const nameElement = useRef();
  const ageElement = useRef();


  const [students, setStudents] = useState([]);

  const handleAdd = () => {
   
    const name = nameElement.current.value;
    const age = ageElement.current.value;

    const newStudent = {
      name: name,
      age: age,
    };

    // Update state
    setStudents([...students, newStudent]);

    // Clear inputs
    nameElement.current.value = "";
    ageElement.current.value = "";
  };

  return (
    <>
      <input type="text" placeholder="Enter name" ref={nameElement} />

      <input type="number" placeholder="Enter age" ref={ageElement} />

      <button onClick={handleAdd}>Add</button>

      <h2>Students</h2>

      {students.map((student, index) => (
        <p key={index}>
          {student.name} - {student.age}
        </p>
      ))}
    </>
  );
}

export default MyComponent5;
