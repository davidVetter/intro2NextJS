import { useState } from "react";

function Header({ title }) {
  return <h1>{title ? title : "Default title"}</h1>;
}

function HomePage() {
  const names = ["Ada Lovelace", "Grace Hopper", "Margaret Hamilton"];

  const [likes, setLikes] = useState(0);

  function HandleClicks() {
    setLikes(likes + 1);
  }

  return (
    <div>
      <Header title="Develop. Preview. Ship. 🚀" />
      <p>
        <strong>Welcome to the next steps in Javascript!</strong>
      </p>
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <button onClick={HandleClicks}>Like ({likes})</button>
    </div>
  );
}

export default HomePage;
