//props = read-only properties that are shared blw
//        the components

// A parent component can send data to a child component
//    < Component propertname=value />

//when u pass the data other than the string
// you have to pass the data using { } brackets

import Student from "./Student.jsx";

function App() {
  return (
    <>
      <Student name="Chaitanya" age={21} isStudent={true} />
      <Student name="Jaswanth" age={20} isStudent={true} />
      <Student name="Rutwik" age={20} isStudent={false} />
      <Student name="Sudeep" age={22} isStudent={false} />
      <Student name="keerthi" />
    </>
  );
}

export default App;
