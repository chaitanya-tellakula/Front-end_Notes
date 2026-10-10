//we getting data from the parent as a js object
// to access the data we wriiteen props

// props= js object

// we know to use js code anything we write inside {}
//  inside return statement

// propTypes = Mechanism that ensures that the
// passed value is of the correct datatype

// It is presnt in the node modules

import PropTypes from "prop-types";

function Student(props) {
  return (
    <div className="student">
      <p>Name : {props.name} </p>
      <p> Age : {props.age}</p>
      <p>isStudent : {props.isStudent ? "Yes" : "No"}</p>
    </div>
  );
}

Student.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isStudent: PropTypes.bool,
};

Student.defaultProps = {
  name: "Guest",
  isStudent: false,
  age: 0,
};

export default Student;
