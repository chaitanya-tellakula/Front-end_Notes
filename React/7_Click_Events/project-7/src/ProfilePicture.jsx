import friends from "./assets/friends.jpeg";

// in jsx we can import the image directly
// and

//Onclick automatically here givens event object 

function ProfilePicture() {
  const handleClick5 = (e) => (e.target.style.display = "none");
  const styles = {
    height: "400px",
    width: "800px",
  };
  return (
    <img src={friends} onClick={(e) => handleClick5(e)} style={styles}></img>
  );
}

export default ProfilePicture;

// In Js :

// button.addEventListener("click", function (event) {
//   console.log(event.target);
// });