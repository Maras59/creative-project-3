import { useState } from 'react';
import axios from 'axios';
import '../App.css';

//define vars here
//define 
  
function Characters() {
  
  const [chars, setChars] = useState();
  const [error, setError] = useState("");
  let [charId, setCharId] = useState("");

  const fetchCharacter = async() => {
    try {
      const response = await axios.get("https://www.breakingbadapi.com/api/characters?name=" + charId);
      setChars(response.data);
    } catch(error) {
      setError("error retrieving tasks: " + error);
    }
  }
  
  const getChar = async(e) => {
    e.preventDefault();
    await fetchCharacter();
    setCharId("");
  }
  
    return (
        <div>
        {error}
        <h1>Characters</h1>
        <form onSubmit={getChar}>
        <div>
          <label>
            Search For Characters:
            <input type="text" value={charId} onChange={e => setCharId(e.target.value)} />
          </label>
          <input type="submit" value="Submit" />
        </div>
        
      </form>
            
        {chars?.map(char => 
        <div id="results">
            <img id="jsonimg" alt="" src={char.img}></img>
            
            <div class="jsonText">
            <h1><strong>{char.name}</strong></h1>
            <p><strong>Occupation: </strong>{char.occupation}</p>
            <p><strong>Birthday:</strong>{char.birthday}</p>
            </div>
        </div>
        )}
        <button id="button" type="button">GitHub Repo</button>
        </div>
    );
}; 

export default Characters;