// on click acutomatically provides the event(e) parameter
//
function Button4() {
  const handleClick4 = (e) => {
    console.log(e);
    e.target.textContent = "OOUCH! 🤕";
  };

  return <button onClick={(event) => handleClick4(event)}>Click Me🤣</button>;
}

export default Button4;

//  when we print the event e many info where u clicked that clicked
//SyntheticBaseEvent {_reactName: 'onClick', _targetInst: null, type: 'click', nativeEvent: PointerEvent, target: button, …}
// altKey
// :
// false
// bubbles
// :
// true
// button
// :
// 0
// buttons
// :
// 0
// cancelable
// :
// true
// clientX
// :
// 62
// clientY
// :
// 17
// ctrlKey
// :
// false
// currentTarget
// :
// null
// defaultPrevented
// :
// false
// detail
// :
// 1
// eventPhase
// :
// 3
// getModifierState
// :
// ƒ modifierStateGetter(keyArg)
// isDefaultPrevented
// :
// ƒ functionThatReturnsFalse()
// isPropagationStopped
// :
// ƒ functionThatReturnsFalse()
// isTrusted
// :
// true
// metaKey
// :
// false
// movementX
// :
// 0
// movementY
// :
// 0
// nativeEvent
// :
// PointerEvent {isTrusted: true, pointerId: 1, width: 1, height: 1, pressure: 0, …}
// pageX
// :
// 62
// pageY
// :
// 17
// relatedTarget
// :
// null
// screenX
// :
// 701
// screenY
// :
// 130
// shiftKey
// :
// false
// target
// :
// button
// timeStamp
// :
// 1076.199999988079
// type
// :
// "click"
// view
// :
// Window {window: Window, self: Window, document: document, name: '', location: Location, …}
// _reactName
// :
// "onClick"
// _targetInst
// :
// null
// [[Prototype]]
// :
// Object
