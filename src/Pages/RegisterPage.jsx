import { useNavigate } from "react-router";
import Photo from "../assets/Images/Register.jpg";

const RegisterPage = () => {
    let Nav=useNavigate()
    let Register=()=>{
        Nav('/Login');
    }
    let ClassName={
        MainCon:"flex w-full gap-x-[100px] gap-y-[50px] justify-center items-center mt-20 px-[5%] flex-wrap xl:flex-nowrap",
        ImgStyle:"h-[70vw] xl:h-[35vw] xl:w-[60%] object-cover rounded-2xl",
        Form:"flex flex-col gap-4  w-full items-center",
        Title:"font-bold text-[40px] w-fit mb-[2vw]",
        TField:"px-4 py-3 w-full outline-none bg-black/15 rounded-sm",
        RegBtn:"bg-[#24b1bf] rounded-md text-white font-bold text-xl lg:text-3xl w-full xl:w-[70%] py-4 mt-[3vw] mb-[50px] xl:mb-0 cursor-pointer"
    };
    return (
        <>
            <div className={ClassName.MainCon}>
                <img src={Photo} alt="Login Photo" className={ClassName.ImgStyle} style={{boxShadow:"#000000bf 0px 0px 15px 0.5px"}}/>
                <div className={ClassName.Form}>
                    <label className={ClassName.Title}>Join Our Familly</label>
                    <input className={ClassName.TField} type="text" placeholder="Full Name"/>
                    <input className={ClassName.TField} type="text" placeholder="Email Address"/>
                    <input className={ClassName.TField} type="password" placeholder="Password"/>
                    <input className={ClassName.TField} type="password" placeholder="Confirm Password"/>
                    <button className={ClassName.RegBtn} onClick={Register}>Sign Up</button>
                </div>

            </div>
        </>
    );
}

export default RegisterPage;
