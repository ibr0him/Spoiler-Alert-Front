import { useNavigate } from "react-router";

const ErrorPage = () => {
    
    let Nav =useNavigate();
    let BackToHome=()=>{
        Nav('/');
    }
    let ClassName ={
        ErrorContanier : "my-[100px] mx-auto flex flex-col items-center justify-center",
        Butn: `text-[25px] bg-[#e3e5e8] text-black 
        font-bold border-none px-5 py-3 rounded-md mt-6`,
        label : "text-[150px]",
        SubTitle1: "text-[50px] m-0 font-bold",
        SubTitle2: "text-lg text-center"
    };
    return (
        <>
            <div className={ClassName.ErrorContanier}>
                <label className={ClassName.label}>404</label>
                <p className={ClassName.SubTitle1}>Page Not Found</p>
                <p className={ClassName.SubTitle2}>Oops!,The Page You're Looking For Doesn't Exist Or Has Been Moved</p>
                <button onClick={BackToHome} className={ClassName.Butn}>Back To Home</button>
            </div>
        </>
    );
}

export default ErrorPage;
