import React from 'react';
import App from '../App';
import { BrowserRouter as Router, Route , Switch,Link } from "react-router-dom";
import IndividualPokemon from '../Components/IndividualPokemon/individualPokemon';
const HomeScreen = () => {
return(
    <Router>
    <div className="container">
        <Switch>
            <Route path="/" exact component={viewPokemons}/>
            <Route path="/App" component={App}/>
            <Route path="/IndividualPokemon"  component={IndividualPokemon}/>
        </Switch>
    </div>
    </Router>
);
}
const viewPokemons = () => {
    return(
        <div className="view-all-pokemon">
            <Link to="App">
            <button>View All Pokemons</button>
            </Link>
        </div>
    );
}
export default HomeScreen;