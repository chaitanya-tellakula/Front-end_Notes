import { useState } from "react";

// we i now click setName now value is updated
// as compared before even if i click

function MyComponent2() {
  const [ug, setUg] = useState(2);
  const [school, setSchool] = useState("Narayana");

  const updateName = () => {
    setUg(3);
    setSchool("Sri Chaitanya");
  };

  return (
    <div>
      <p>
        UG:{ug} school :{school}
      </p>
      <button onClick={() => updateName()}> Update </button>
    </div>
  );
}

export default MyComponent2;
