import React, { useState } from "react";

function MyComponent1() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [comment, setComment] = useState("");
  const [payment, setPayment] = useState("");
  const [shipping, setShipping] = useState("");

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleQuantityChange(e) {
    setQuantity(e.target.value);
  }

  function handleCommentChange(e) {
    setComment(e.target.value);
  }
  function handlePaymentChange(e) {
    setPayment(e.target.value);
  }
  function handleShippingChange(e) {
    setShipping(e.target.value);
  }

  return (
    <div>
      <input type="text" onChange={(event) => handleNameChange(event)} />
      <p>Name : {name}</p>
      <input type="number" onChange={handleQuantityChange} />
      <p>Quantity : {quantity}</p>
      <hr />
      <textarea
        onChange={handleCommentChange}
        placeholder="Enter delivery Instructions"
      ></textarea>
      <p>Comment : {comment}</p>
      <hr />
      <select onChange={handlePaymentChange}>
        <option value=""> Select a Value</option> //displays ""
        <option value="recievedVisa">Visa</option>
        <option>MasterCard</option> //displays MasterCard
        <option>GiftCard</option> // if u not kept anything like value the text side the value considered as value
      </select>
      <p>payement Method : {payment}</p>
      <hr />
      <input
        id="1"
        type="radio"
        onChange={handleShippingChange}
        value="Pick Up"
        name="shipping"
      />
      <label htmlFor="1">Pick Up</label>
      <input
        id="2"
        type="radio"
        onChange={handleShippingChange}
        value="Delivery"
        name="shipping" //name is used for grouping the radio buttons
      />
      <label htmlFor="2">Delivery</label>
      <p>Shipping : {shipping}</p>
    </div>
  );
}

export default MyComponent1;

//  <input type="text" onChange={(event) => handleNameChange(event)} />;
//
//  instead of this u can directly use
//
//    <input type="text" onChange={handleNameChange} />
//
// This automatically calls the function
//  with the event parameter passing

// So: if u dont write value the text presnt inside it
// treasted as value=""

// if u want specifically some text display text wanted
//when selected then u can use the value=""
//other wise brower conside text inside it as value

// Note :

// <option>MasterCard</option>

// is roughly equivalent to:
// <option value="MasterCard">MasterCard</option>
