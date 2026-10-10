import profilepic from "./assets/hero.png";

//importing something from another file it is javascript code
// so u can keep that in brackets
function Card() {
  return (
    <div className="card">
      <img className="card-img" src={profilepic} alt="profile-picture" />
      <h2 className="card-title">Bro Code</h2>
      <p className="card-text">I make vedios and play games</p>
    </div>
  );
}
export default Card;
