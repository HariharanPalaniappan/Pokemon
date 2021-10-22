import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Pokemon from './Components/pokemonList/pokemonList'
import Pagination from './Components/pagination/pagination';
const App = () => {
  const [result ,setResult] = useState([]);
  const [currentPageURL ,setCurrentPageURL] = useState("https://pokeapi.co/api/v2/pokemon");
  const [nextPageURL ,setNextPageURL] = useState();
  const [prevPageURL ,setPrevPageURL] = useState();
  const [loading ,setLoading] = useState(true);
  useEffect(()=>{
    setLoading(true);
    let cancel;
    axios.get(currentPageURL,{
      cancelToken: new axios.CancelToken(c => cancel =c)
      }).then(response => {
      setLoading(false);
      setNextPageURL(response.data.next);
      setPrevPageURL(response.data.previous);
      setResult(response.data.results.map(pokemon => pokemon.name)); 
    })
    return () => cancel()
  },[currentPageURL]);
  if(loading) return 'loading...';
  const getNxtPage = () => {
    setCurrentPageURL(nextPageURL);
  }
  const getPrevPage = () => {
    setCurrentPageURL(prevPageURL);
  }
  return (
    <div className="pokemon-container">
      <Pokemon pokemon={result}/>
      <div className="pagination-container">
        {prevPageURL && <Pagination clickEvent = {getPrevPage} name="Prev"/>}
        {nextPageURL && <Pagination clickEvent = {getNxtPage} name="Next"/>}
      </div>
    </div>
  );
}

export default App;
