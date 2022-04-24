import { Link } from "react-router-dom"
import "./Navbar.css";
export const Nav = () => {
    return(
        <div className="navbar_div">
            <Link to="/"><h2>Home</h2></Link>
            {/* <Link to="/listing/:id"><h2>page1</h2></Link> */}
            <Link to="listing/create"><h2>Register your Pet</h2></Link>
        </div>
    )
}