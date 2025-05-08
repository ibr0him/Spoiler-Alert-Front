import { Component } from "react";
import APIMovie from "./APIMovie"
import '../Styles/MovieStyle.css'

class APIMovies extends Component{
    constructor(){
        super()
        this.state = {
          APIData: null
        }
        console.log("constructor (1)");
      }
      
    componentDidMount(){
        fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9813ce01a72ca1bd2ae25f091898b1c7")
        .then((res)=> res.json())
        .then((data)=> this.setState({APIData: data}));
      }
    render(){
       
        //Conditional Rendering

        if(!this.state.APIData) return (<div style={{fontSize:"30px" ,textAlign:"center"}}>Looding</div>)
        
        return(
            <div id="MoviesContainer">
                {this.state.APIData.results.map((Mov) => <APIMovie uData={Mov} key={Mov.id} />)}
            </div>
        )
    }   
    
};
export default APIMovies;