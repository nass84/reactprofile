


const Navbar = () => {
    const twitter = "https://twitter.com/boredinbrum";
    return ( 
        <nav className="navbar">
            <h1> Portfolio Page </h1>
         
            <div className="links">
                <a href={twitter}> Twitter </a>
                <a href="https://github.com/nass84"> Github </a>
            </div>
        </nav>
     );
}
 
export default Navbar;