import { useNavigate } from "react-router";
import Styling from "../Styles/LoginPage.module.css"
import { useContext } from "react";
import { MoviesContext } from "../Context/MoviesProvider";
const LoginPage = () => {
    let {Signin,SetSignin}=useContext(MoviesContext);
    let Nav =useNavigate();
    
    let Login=()=>{
        SetSignin(true);
        Nav('/');
    }
    return (
        <>
            <div id={Styling.LoginMain}>
                <img src="https://m.media-amazon.com/images/M/MV5BMTUwNjUxMTM4NV5BMl5BanBnXkFtZTgwODExMDQzMTI@._V1_.jpg"></img>
                <div id={Styling.RContainer}>
                    <label id={Styling.Head}>Welcome Back</label>
                    <label id={Styling.SubHead}>Sign in To Your Account</label>
                    <input type="text" placeholder="Email Address" ></input>
                    <input type="password" placeholder="Password" ></input>
                    <div>
                        <input type="checkbox" name="Remeber" id="Rem" />
                        <label htmlFor="Rem">Remeber Me</label>
                    </div>
                    <button onClick={Login}>Login</button>
                </div>
            </div>            
        </>
    );
}

export default LoginPage;
