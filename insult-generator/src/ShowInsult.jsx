function ShowInsult({ insult }) {
    return (
      <div className="insult-card">
        <p><strong>Insult:</strong> "{insult.insult}"</p>
        <p><em>- {insult.play}</em></p>
      </div>
    );
  }
  
  export default ShowInsult;