import { useState } from "react";

function AddInsult({ onAddInsult }) {
  const [insult, setInsult] = useState("");
  const [play, setPlay] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (insult && play) {
      onAddInsult({ insult, play });
      setInsult("");
      setPlay("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Lägg till ny förolämpning</h2>
      <input
        type="text"
        placeholder="Förolämpning"
        value={insult}
        onChange={(e) => setInsult(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Pjäs"
        value={play}
        onChange={(e) => setPlay(e.target.value)}
        required
      />
      <button type="submit">Lägg till</button>
    </form>
  );
}

export default AddInsult;