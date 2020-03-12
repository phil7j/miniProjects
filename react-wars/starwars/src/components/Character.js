import React from 'react'
import './StarWars.css'
function Character(props) {
    return (
        <div className="card">
            <h1 className="header">{props.data.name}</h1>
    <h4>Height: {props.data.height}</h4>
    <h4>Mass: {props.data.mass}</h4>
    <h4>Born: {props.data.birth_year}</h4>
        </div>
    )
}

export default Character
