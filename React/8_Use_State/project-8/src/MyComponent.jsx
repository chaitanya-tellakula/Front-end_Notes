import React, { useState } from "react";
// from whole react we import my required function "useState"

//Array deconstructing means :

// const [first, second] = fruits;
// This automatically means:

// first  ← fruits[0] ← "Apple"
// second ← fruits[1] ← "Banana"

// use state = is  [ "John" , functionThatUpdateName]
//     1. variable and function
//
//

// The real issue is react components if we update the
// normal varaiable it will not update

//Because changing a normal JavaScript variable
//doesn't tell React to render the component again.
//
// As now we did onclick we changed normal js variable
//it not updated in the webpage it is issue

// so we need to say react u need to update
// when we change the

function MyComponent() {
  // if we see the console value of name changed but
  // the Browerser (VDOM) displaying nothing
  // value sponge bob not updated

  let ug = 3;
  let school = "narayana";

  const updateName = () => {
    school = "sri chaitanya";
    ug = 1;

    // but these values not shown in broweser
    console.log(school);
    console.log(ug);
  };

  return (
    <div>
      <p>
        UG:{ug} school :{school}
      </p>
      <button onClick={updateName}>Update</button>
    </div>
  );
}
export default MyComponent;
