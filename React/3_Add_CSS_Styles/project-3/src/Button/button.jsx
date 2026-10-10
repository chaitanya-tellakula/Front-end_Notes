import style from "./button.module.css";

//.button is class name in the css file

function Button() {
  return <button className={style.button}>click me</button>;
}

export default Button;
