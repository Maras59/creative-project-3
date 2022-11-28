import { useState } from 'react';
import axios from 'axios';
import '../App.css';

//define vars here
//define 
  
function Quotes() {
  const [quotes, setQuotes] = useState();
  const [error, setError] = useState("");


  const fetchQuote = async() => {
    try {
      const [request1] = await Promise.all([axios.get("https://www.breakingbadapi.com/api/quote/random")]);
      setQuotes(request1.data);
       
    } catch(error) {
      setError("error retrieving tasks: " + error);
    }
  }
  
  const getQuote = async(e) => {
    e.preventDefault();
    await fetchQuote();
  }
  
    return (
        <div>
        {error}
        <h1>Get a Quote</h1>
        <form onSubmit={getQuote}>
        <input id="qButton" type="submit" value="Generate a Quote" />
      </form>
        {quotes?.map(quote => 
        <div id="quote">
            <div id="quoteDiv">
            <h2 id="qtext">{quote.quote}</h2>
            <p id="qa"><em>--{quote.author}</em></p>
            </div>
        </div>
        )}
        <button id="button" type="button">GitHub Repo</button>
        </div>
    );
}; 

export default Quotes;