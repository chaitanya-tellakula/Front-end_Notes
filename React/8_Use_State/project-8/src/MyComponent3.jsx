import React, { useState } from "react";
function MyComponent3() {
  const [name, setName] = useState("Guest");
  const [age, setAge] = useState(0);
  const [isEmployed, setIsEmployed] = useState(false);

  const updateName = () => setName("Chaitanya");
  const incrementAge = () => setAge(age + 1); // age=age+1
  const updateisEmployed = () => setIsEmployed(!isEmployed); //isEmployed= !=isEmployed

  return (
    <div>
      <p> Name : {name}</p>
      <button onClick={updateName}> SetName</button>

      <p> Age : {age}</p>
      <button onClick={incrementAge}>Incremnt Age</button>

      <p> isEmployed : {isEmployed ? "Yes" : "No"}</p>
      <button onClick={updateisEmployed}>Toggle Status</button>
    </div>
  );
}

export default MyComponent3;
