// Profile component receiving scientist info via props
function Profile(props) {
  return (
    <div>
      <img alt={props.name} width="100%" height="160" />
      <h2>{props.name}</h2>
      <p>{props.description}</p>
    </div>
  );
}

function App() {
  return (
    <div style={{ display: "flex" }}>
      <Profile
        name="Albert Einstein"
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Albert_Einstein_Head.jpg/440px-Albert_Einstein_Head.jpg"
        description="Developed the theory of relativity."
      />
      <Profile
        name="Marie Curie"
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Marie_Curie_c._1920s.jpg/440px-Marie_Curie_c._1920s.jpg"
        description="Pioneered research on radioactivity."
      />
      <Profile
        name="Isaac Newton"
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/GodfreyKneller-IsaacNewton-1689.jpg/440px-GodfreyKneller-IsaacNewton-1689.jpg"
        description="Formulated laws of motion and gravity."
      />
    </div>
  );
}

export default App;
