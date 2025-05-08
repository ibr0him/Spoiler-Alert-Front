import { memo } from 'react'
import '../Styles/MoviesStyles.css'
function Movie(props){
    return(
        <div id="MovieContainer">
            <div id='ImageContainer'>
                <img src={props.uData.Image}></img>  
            </div>
          <label>{props.uData.Title}</label>        
          <label style={{fontWeight:"lighter",opacity:"0.6"}}>{props.uData.Type}</label>  
          <div id='Rating'>{props.uData.Rating}</div>
        </div>
    )
}
export default memo(Movie);