import { useContext } from 'react';
import '../Styles/Navbar.css'
import { Link } from 'react-router';
import { MoviesContext } from '../Context/MoviesProvider';
function Navbar(){
    let {Signin,SetSignin}=useContext(MoviesContext);
    let Logout =()=>{
        SetSignin(false);
    }
    if(!Signin)
        return(
            <div id='Container'>
                <h1>Movies Time</h1>
                <div id='NvContainer'>
                    <Link className='NvLabel'to="/">Home</Link>
                    <Link className='NvLabel'to="/Browse">Browse</Link>
                    <Link className='NvLabel'to="/Login">Login</Link>
                    <Link className='NvLabel'to="/Register">Register</Link>
                </div>
            </div>
        )

    return(
        <div id='Container'>
            <h1>Movies Time</h1>
            <div id='NvContainer'>
                <Link className='NvLabel'to="/">Home</Link>
                <Link className='NvLabel'to="/Browse">Browse</Link>
                <Link className='NvLabel'to="/Add">Add</Link>
                <Link className='NvLabel'onClick={Logout}>Logout</Link>
            </div>
        </div>
    )
        
}
export default Navbar;