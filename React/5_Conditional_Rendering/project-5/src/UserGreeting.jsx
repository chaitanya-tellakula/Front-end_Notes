// UserGreeting.defaultProps not working properly so instead
// for assigning default values do at the starting it self
// Assign the values like i given
// It is object deconstructing as we recive a object
// the property names matched and assign them respectly

import PropTypes from "prop-types";

function UserGreeting({ isLoggedIn = false, username = "Guest" }) {
  const welcomeMessage = (
    <h2 className="welcome-message"> Welcome {username}</h2>
  );
  const logInPrompt = <h2> Please Login In to continue </h2>;

  return isLoggedIn ? welcomeMessage : logInPrompt;
}
export default UserGreeting;

UserGreeting.propTypes = {
  isLoggedIn: PropTypes.bool,
  username: PropTypes.string,
};

// UserGreeting.defaultProps = {
//   isLoggedIn: false,
//   username: "Guest",
// };

// if it is inside the html code we write
// the js means we use the {}

// Method -1

// return  ( props.loggedIn ?   <h2> Wlecome {props.username} </h2> :
//                              <h2> Please Login In to continue </h2> );

// Method -2

// const welcomeMessage =  <h2 className="welcome-message"> Welcome {props.username}</h2>;
// const logInPrompt =    <h2> Please Login In to continue </h2>
//
//
//  return isLoggedin? : welcomeMessage : logInPrompt
//

// Method -3

// if (props.isLoggedIn) {
//   return <h2 className="welcome-message"> Welcome {props.username}</h2>;
// } else {
//   return <h2 className="login-prompt">Please Log In to continue</h2>;
// }
