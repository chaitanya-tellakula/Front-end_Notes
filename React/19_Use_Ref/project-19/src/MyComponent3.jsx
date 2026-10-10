import { useRef } from "react";

function MyComponent3() {
  const inputRef = useRef(null);

  // now input ref is directly refering to the input
  // element we can access it directly instead of doing
  // document.getElementById  so it is useful for accessing
  // the elements directly

  //we can use this if we want to dont want to update ui
  //as it will not re-render the ui



  //Before to get what user types we maintained a state
  // on change we update the stte when user types
  // But every time when user types rendering the 
  // component is heavy 
  // insted we can we can us the useRef 
  // it can directly point to the DOM elements 
  // in js we do document.getElementById
  // here we can use  ref property to dirrectly to that
  // so when user click a button at that time we can
  //just see vaue inside it as browerser already 
  // updates its current value when user types 
  // we can just get that value
  function handleClick() {
    inputRef.current.focus();
    inputRef.current.value = "chaitanya";
    inputRef.current.style.backgroundColor = "pink";
  }

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
      <input type="text" ref={inputRef} />
    </div>
  );
}

export default MyComponent3;
