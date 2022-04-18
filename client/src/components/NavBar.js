import React from "react"
import {Link} from "react-router-dom"
function NavBar({ setUser }){

    function handleLogout() {
        fetch("/logout", {
          method: "DELETE",
        }).then(() => setUser(null));
      }

    return(
        <nav id="navbar">
            <Link to = "/">Home</Link>
            <Link to = "/modules">Modules</Link>
            <Link to = "/loginpage">Login</Link>
            <Link to = "/loginpage" onClick={handleLogout}>Logout</Link>
        </nav>
    );
}
export default NavBar