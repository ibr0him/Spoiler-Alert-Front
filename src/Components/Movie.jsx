import { memo } from 'react'
import { useNavigate } from 'react-router';

function Movie(props){
    
    let nav = useNavigate();

    let NaviageToMoviePage=()=>{
        nav('/Movie/'+props.uData.id);
    }

    let ClassName={
        MovieContainer:"flex flex-col gap-[10px] items-start w-[250px] h-[470px] my-0 mx-[50px] hover:scale-[1.2]",
        ImageContainer: "flex flex-col items-center w-full h-[70%] overflow-hidden cursor-pointer",
        Rating: "relative self-end flex justify-center items-center w-[60px] h-[60px] rounded-full text-[20px] font-bold bg-[#24b1bf] left-[32px] bottom-[200px]",
        Mimg: "w-full",
        Mlabel: "pl-[5px] font-bold"
    };
    return(
        <div className={ClassName.MovieContainer} >
            <div className={ClassName.ImageContainer} style={{boxShadow:"2px 2px 15px 1px black"}} onClick={NaviageToMoviePage}>
                <img className={ClassName.Mimg} src={props.uData.posterImage}></img>  
            </div>
          <label className={ClassName.Mlabel}>{props.uData.title}</label>        
          <label className={ClassName.Mlabel} style={{fontWeight:"lighter",opacity:"0.6"}}>{props.uData.genres}</label>  
          <div className={ClassName.Rating}>{props.uData.rating}</div>
        </div>
    )
}
export default memo(Movie);