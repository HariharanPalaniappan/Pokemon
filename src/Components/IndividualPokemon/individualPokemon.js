import React from 'react';
import './individualPokemon.css'

const IndividualPokemon = (props) => {
    if(props.location.individualData !== undefined){
        // props.location.individualData = props.location.individualData.data
        localStorage.setItem('CurrentUrl', JSON.stringify(props.location.individualData) );
    }
    else {
        props.location.individualData = JSON.parse(localStorage.getItem('CurrentUrl'));
    }
    return(
        <div className="individual-card-container">
                    <div className="individual-details">
            <img src={props.location.individualData.sprites.front_default} alt={props.location.individualData.name +".png"}/>
            <div className="individual-name">
                <p>Name</p>
                <p>{props.location.individualData.name}</p>
            </div>
            <div className="height">
                <p>Height</p>
                <p>{props.location.individualData.height}</p>
            </div>
            <div className="weight">
                <p>Weight</p>
                <p>{props.location.individualData.weight}</p>
            </div>
            <div className="order">
                <p>Order</p>
                <p>{props.location.individualData.order}</p>
            </div>
            <div className="base-experience">
                <p>Base Experience</p>
                <p>{props.location.individualData.base_experience}</p>
            </div>
            <div className="id">
                <p>Id</p>
                <p>{props.location.individualData.id}</p>
            </div>
        </div>
        </div>
    );
}
export default IndividualPokemon;