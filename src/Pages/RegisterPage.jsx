import { useNavigate } from "react-router";
import Styling from "../Styles/LoginPage.module.css"

const RegisterPage = () => {
    let Nav=useNavigate()
    let Register=()=>{
        Nav('/Login');
    }
    return (
        <>
            <div id={Styling.LoginMain}>
                <img src="https://xl.movieposterdb.com/24_06/2021/9777666/xl_the-tomorrow-war-movie-poster_72a009e4.jpg"></img>
                <div id={Styling.RContainer}>
                    <label style={{alignSelf:"center"}} id={Styling.Head}>Resister Form</label>
                    <input style={{marginTop:"0px"}} type="text" placeholder="Name" ></input>
                    <input type="Email" placeholder="Email Address" ></input>
                    <input type="password" placeholder="Password" ></input>
                    <input style={{marginBottom:"20px"}} type="password" placeholder="Confirm Password" ></input>
                    <button  onClick={Register}>Register</button>
                </div>
            </div>            
        </>
    );
}

export default RegisterPage;
