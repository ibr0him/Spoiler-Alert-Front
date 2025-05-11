import { useNavigate } from "react-router";
import Styling from "../Styles/ErrorPage.module.css"

const ErrorPage = () => {
    
    let Nav =useNavigate();
    let BackToHome=()=>{
        Nav('/');
    }
    return (
        <>
            <div id={Styling.ErrorContanier}>
                <label>404</label>
                <p id={Styling.SubTitle1}>Page Not Found</p>
                <p id={Styling.SubTitle2}>Oops!,The Page You're Looking For Doesn't Exist Or Has Been Moved</p>
                <button onClick={BackToHome}>Back To Home</button>
            </div>
        </>
    );
}

export default ErrorPage;
