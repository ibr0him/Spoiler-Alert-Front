import { useContext,useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { MoviesContext } from '../Context/MoviesProvider';

function Navbar(){

    let {Signin,SetSignin,IsAdmin,setIsAdmin}=useContext(MoviesContext);
    const [menuOpen, setMenuOpen] = useState(false);
    let nav = useNavigate();

    let Logout =()=>{
        SetSignin(false);
        setIsAdmin(null);
        nav('/');    
        ToggleMenu();
    }
    let ToggleMenu = ()=>{
        setMenuOpen(!menuOpen);
    };
    //Tailwind Styling
    let ClassName={
        Container:"relative w-full flex items-center px-[20px] sm:px-[50px] mr-[50px] mt-[30px] justify-between z-4",
        Title:"text-[40px] lg:text-[50px] font-bold w-fit",
        NvContainer:"hidden md:flex gap-[40px] items-center z-2 w-fit",
        NvLabel:"text-xl font-bold hover:bg-[#24b1bf] hover:px-4 hover:py-3 hover:rounded-md hover:shadow-sm cursor-pointer",

        //Hamburger Icon
        HamCon:"flex md:hidden flex-col gap-3 w-[60px] cursor-pointer",
        Line:"w-full h-[5px] bg-white rounded-full",

        // Mobile NavLinks
        MobileNvCon:"flex md:hidden relative flex-col gap-4 z-2 f-[100vw] bg-black/40 pl-[20px] mt-[20px] py-[20px]"
    };
        const NavLinks = (
        <>
            <Link className={ClassName.NvLabel} to="/" onClick={ToggleMenu}>Home</Link>
            <Link className={ClassName.NvLabel} to="/Browse" onClick={ToggleMenu}>Browse</Link>
            {!Signin && <>
                <Link className={ClassName.NvLabel} to="/Login" onClick={ToggleMenu}>Login</Link>
                <Link className={ClassName.NvLabel} to="/Register" onClick={ToggleMenu}>Register</Link>
            </>}
            {Signin && IsAdmin && <>
                <Link className={ClassName.NvLabel} to="/Add" onClick={ToggleMenu}>Add</Link>
                <span className={ClassName.NvLabel} onClick={Logout}>Logout</span>
            </>}
            {Signin && !IsAdmin && <>
                <Link className={ClassName.NvLabel} to="/MyReviews" onClick={ToggleMenu}>My Reviews</Link>
                <span className={ClassName.NvLabel} onClick={Logout}>Logout</span>
            </>}
        </>
    );
    return(
        <>
            <div className={ClassName.Container}>
                <Link className={ClassName.Title} to="/">Spoiler <span className='text-[#22ebff]'>Alert</span> </Link>
                <div className={ClassName.NvContainer}>
                    {NavLinks}
                </div>
                {/* Hamburger Icon */}
                <div className={ClassName.HamCon} onClick={ToggleMenu}>
                    <div className={ClassName.Line}></div>
                    <div className={ClassName.Line}></div>
                    <div className={ClassName.Line}></div>
                </div>
            </div>

            <div className={`${ClassName.MobileNvCon} ${menuOpen ? "flex" : "hidden"}`}>
                {NavLinks}
            </div>
        </>
    )
        
}
export default Navbar;
    