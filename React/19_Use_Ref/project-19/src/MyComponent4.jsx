import { useRef } from "react";

function MyComponent4() {
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);

  function handleClick1() {
    inputRef1.current.focus();
    inputRef1.current.value = "chaitanya";
    inputRef1.current.style.backgroundColor = "pink";
    inputRef2.current.style.backgroundColor = "";
    inputRef3.current.style.backgroundColor = "";
  }

  function handleClick2() {
    inputRef2.current.focus();
    inputRef2.current.value = "chaitanya";
    inputRef1.current.style.backgroundColor = "";
    inputRef2.current.style.backgroundColor = "pink";
    inputRef3.current.style.backgroundColor = "";
  }
  function handleClick3() {
    inputRef3.current.focus();
    inputRef3.current.value = "chaitanya";
    inputRef1.current.style.backgroundColor = "";
    inputRef2.current.style.backgroundColor = "";
    inputRef3.current.style.backgroundColor = "pink";
  }

  return (
    <div>
      <button onClick={handleClick1}>Click me 1</button>
      <input type="text" ref={inputRef1} />
      <button onClick={handleClick2}>Click me 2</button>
      <input type="text" ref={inputRef2} />
      <button onClick={handleClick3}>Click me 3</button>
      <input type="text" ref={inputRef3} />
    </div>
  );
}

export default MyComponent4;
