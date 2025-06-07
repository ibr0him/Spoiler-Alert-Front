import { useNavigate } from "react-router";
import { useContext } from "react";
import { MoviesContext } from "../Context/MoviesProvider";
import Photo from "../assets/Images/Login.png";

const LoginPage = () => {
    let {Signin,SetSignin}=useContext(MoviesContext);
    let Nav =useNavigate();
    
    let Login=()=>{
        SetSignin(true);
        Nav('/');
    }
    let ClassName={
        MainCon:"flex w-full gap-x-[100px] gap-y-[50px] justify-center items-center mt-20 px-[5%] flex-wrap xl:flex-nowrap",
        ImgStyle:"h-[70vw] xl:h-[35vw] rounded-2xl",
        Form:"flex flex-col gap-4  w-full items-center",
        Title:"font-bold text-[40px] w-fit mb-[2vw]",
        TField:"px-4 py-4 w-full outline-none bg-black/15 rounded-sm",
        RemField:"ml-2 flex gap-2 self-start",
        LogBtn:"bg-[#24b1bf] rounded-md text-white font-bold text-xl lg:text-3xl w-full xl:w-[70%] py-4 mt-[3vw] mb-[50px] xl:mb-0 cursor-pointer"
    };
    return (
        <>
            <div className={ClassName.MainCon}>
                <img src={Photo} alt="Login Photo" className={ClassName.ImgStyle} style={{boxShadow:"#000000bf 0px 0px 15px 0.5px"}}/>
                <div className={ClassName.Form}>
                    <label className={ClassName.Title}>Welcome</label>
                    <input className={ClassName.TField} type="text" placeholder="Enter Your Email Address"/>
                    <input className={ClassName.TField} type="password" placeholder="Enter Your Password"/>
                    <div className={ClassName.RemField}>
                        <input type="checkbox" id="Remeber"style={{border:"none"}}/>
                        <label htmlFor="Remeber">Remeber Me</label>
                    </div>
                    <button className={ClassName.LogBtn} onClick={Login}>Login</button>
                </div>

            </div>
        </>
    );
}

export default LoginPage;
