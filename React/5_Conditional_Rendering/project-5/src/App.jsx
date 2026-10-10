//conditional-rendering = allows you to control what gets
//           in your application based on certain
//           conditions
//    (show,hide or change components)
//
import UserGreeting from "./UserGreeting";

function App() {
  return (
    <>
      <UserGreeting isLoggedIn={true} username="Teja"></UserGreeting>
      <UserGreeting isLoggedIn={true}></UserGreeting>
    </>
  );
}

export default App;
