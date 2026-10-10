import { useState } from "react";

function Attendance() {
  const [presentCount, setPresentCount] = useState(0);
  const [absentCount, setAbsentCount] = useState(50);

  function increase() {
    setPresentCount(presentCount + 1);
    setAbsentCount(absentCount - 1);
  }

  return (
    <div>
      <h1>Present: {presentCount}</h1>
      <h1>Absent: {absentCount}</h1>

      <button onClick={increase}>Mark Present</button>
    </div>
  );
}

export default Attendance;
