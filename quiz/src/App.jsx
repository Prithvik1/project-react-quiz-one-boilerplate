import { Component } from 'react';
import HomeComponent from "./componenets/HomeComponent"
import QuizComponent from "./componenets/QuizComponent"
import ResultComponent from "./componenets/ResultComponent" 


export default class App extends Component{
  render(){
    return(
      <div>
        <QuizComponent/>
      </div>
    )
  }
}