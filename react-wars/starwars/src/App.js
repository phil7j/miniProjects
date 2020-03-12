import React,{useState, useEffect} from 'react';
import './App.css';
import Character from "./components/Character"
const App = () => {

  let [characters, setCharacters] = useState([])
  let [next, setNext] = useState('')
  let [previous, setPrevious] = useState('')

  let fetchCharacters =()=> {
    fetch('https://swapi.co/api/people/')
    .then(response => response.json())
    .then(data => {
      console.log("Data sent to second .then", data)
      setNext(data.next)
      setPrevious(data.previous)
      setCharacters(data.results)})
  }

  let changePage = (url) => {
    fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log("Data sent to second .then", data)
      setNext(data.next)
      setPrevious(data.previous)
      setCharacters(data.results)})
  }

  useEffect(()=>{
    fetchCharacters()
  },[])

  if(characters.length > 0){
    return (
      <div className="App">
        <h1 className="Header">There is Data!</h1>
        <button onClick={()=> changePage(previous)}>Previous</button><button onClick={()=> changePage(next)}>Next</button>
        <div className="container">
        {characters.map((item,index) => <Character data={item}key={index}/>)}
        </div>
      </div>
    )
  } else {

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <h1>No Data :(</h1>
    </div>
  );
  }
}

export default App;
