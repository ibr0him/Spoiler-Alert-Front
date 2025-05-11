import { memo } from 'react'
import Styling from '../Styles/MovieStyle.module.css'
function Movie(props){
    return(
        <div id={Styling.MovieContainer}>
            <div id={Styling.ImageContainer}>
                <img id={Styling.Mimg} src={props.uData.Image}></img>  
            </div>
          <label className={Styling.Mlabel}>{props.uData.Title}</label>        
          <label className={Styling.Mlabel} style={{fontWeight:"lighter",opacity:"0.6"}}>{props.uData.Type}</label>  
          <div id={Styling.Rating}>{props.uData.Rating}</div>
        </div>
    )
}
export default memo(Movie);