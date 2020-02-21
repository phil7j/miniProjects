import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      red: true,
      yellow: false,
      green: false,
    }
  }
     runLightProgram(){
      console.log("Switch")
      if(this.state.red === true){
        this.setState({ red: false,
          yellow: true,
          green: false})
        } else if( this.state.yellow === true) {
        this.setState({ red: false,
          yellow: false,
          green: true})
        } else if(this.state.green === true){
          this.setState({ red: true,
            yellow: false,
            green: false})
          }
        }
      componentDidMount(){
          this.interval = setInterval(()=> this.runLightProgram(), 3000);
      }
      componentWillUnmount() {
        clearInterval(this.interval);
      }
        render(){
    return (
      <div className="App">
        <header>
          <h1>React Stoplight</h1>
        </header>
        <div className="stoplight">
          <div className="redlight" style={this.state.red === true ? {background: "red"} : {background: "black"}} />
          <div className="yellowlight" style={this.state.yellow === true ? {background: "yellow"} : {background: "black"}} />
          <div className="greenlight" style={this.state.green === true ? {background: "green"} : {background: "black"}} />
        </div>
      </div>
    )};
}

export default App;
