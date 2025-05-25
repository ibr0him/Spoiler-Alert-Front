import { useContext, useState } from "react";
import {v4 as uuid} from "uuid"
import Styling from "../Styles/AddingPage.module.css"
import { MoviesContext } from "../Context/MoviesProvider";
import { useNavigate } from "react-router";

let Movie={};

const AddingPage = () => {

let {MoviesData,SetMoviesData}=useContext(MoviesContext);
let temp="https://i.ebayimg.com/images/g/4xYAAOSwCGZiwSv8/s-l1200.jpg";
const [Image, setImage] = useState(temp);
let nav =useNavigate();

    let HandleAction = (e)=>{
        Movie[e.target.name]=e.target.value;
        
        if(e.target.name == "Image")
            if(e.target.value)
                setImage(e.target.value);
            else
                setImage(temp);
    };

    let Submit= ()=>{
        SetMoviesData([...MoviesData,{...Movie,id:uuid()}]);
        nav('/Browse', { state: { fromAddMovie: true } });
    }
    let ClassName ={
        SubTitle: "text-center my-[150px] mx-auto mb-[50px]",
        FormContainer: "w-[50vw] h-[60vh] mx-auto my-[80px] bg-[rgb(43,49,64) ]",
        FormInput: "",
        FormInputsCon: ""
    };
    return (
        <>
            <div id={Styling.FormContainer} >
                <img id={Styling.FormImage} src={Image}></img>
                <div id={Styling.FormInputsCon}>
                    <label>Adding Movie</label>
                    <input className={Styling.FormInput} placeholder="Title" name="Title"onBlur={HandleAction}></input>
                    <input className={Styling.FormInput} placeholder="Type" name="Type"onBlur={HandleAction}></input>
                    <input className={Styling.FormInput} placeholder="Rating" name="Rating"onBlur={HandleAction}></input>
                    <input className={Styling.FormInput} placeholder="Image" name="Image" onBlur={HandleAction}></input>
                    <button id={Styling.FormBtn} onClick={Submit}>ADD</button>
                </div>
            </div>
        </>
    );
}

export default AddingPage;
