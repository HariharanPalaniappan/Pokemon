import React from 'react';
import axios from 'axios';
import './pokemonList.css'
import { useHistory } from "react-router-dom";
const PokemonList = (props) => {
  let History = useHistory();
    const getIndividualPokemon = (value) => {
        value = parseInt(value) + 1;
        let cancel;
        axios.get("https://pokeapi.co/api/v2/pokemon/"+value,{
            cancelToken: new axios.CancelToken((c)=> cancel = c)
        }).then((response) => {
            History.push({
                pathname: "IndividualPokemon",
                individualData: response.data,
            })
        })
        return () => cancel();
    }
    return(
        <div className="List">
            {props.pokemon.map((p,x) => 
                <p key={p} id={x} onClick={(e) => getIndividualPokemon(e.target.id)}>{p}</p>
            )}
        </div>
    );
}

export default PokemonList;