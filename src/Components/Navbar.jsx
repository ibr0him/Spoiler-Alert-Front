import '../Styles/Navbar.css'
function Navbar(){

    return(
        <div id='Container'>
            <h1>Movies Time</h1>
            <div id='NvContainer'>
                <label className='NvLabel'>Home</label>
                <label className='NvLabel'>Browse</label>
                <label className='NvLabel'>Trending Movies</label>
            </div>
        </div>
    )
}
export default Navbar;