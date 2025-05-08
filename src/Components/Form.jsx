import { useState } from "react"
import Styling from "../Styles/Form.module.css"

let Movie={};

const Form = (props) => {
    let temp="https://i.ebayimg.com/images/g/4xYAAOSwCGZiwSv8/s-l1200.jpg"
    const [Image, setImage] = useState(temp);
    let {PSubmit} = props;
    let Submit = ()=>{
        PSubmit(Movie);
    };
    let HandleAction = (e)=>{
        Movie[e.target.name]=e.target.value;
        
        if(e.target.name == "Image")
            if(e.target.value)
                setImage(e.target.value);
            else
                setImage(temp);
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
                    <input className={Styling.FormInput} placeholder="Image URL" name="Image" onBlur={HandleAction}></input>
                    <button id={Styling.FormBtn} onClick={Submit}>ADD</button>
                </div>
            </div>
        </>
    );
}

export default Form;
