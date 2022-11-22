import "./Navbar.css"
import Homepage from "./Hompage";
import {Link, useMatch, useResolvedPath} from 'react-router-dom';
export default function Navbar(props){
    return(
        <div className="body">
            <div className="navbar">
                <ul>
                    <CustomeLink to="Homepage">Homepage</CustomeLink>
                    <CustomeLink to="/Membership">Membership</CustomeLink>
                    <CustomeLink to="/Meals">Meals</CustomeLink>
                    <CustomeLink to="/ContactUs">Contact Us</CustomeLink>
                </ul>
            </div>
        </div>
    )
}
function CustomeLink({to, children, ...props}){
   const resolvedPath = useResolvedPath(to)
   const isActive = useMatch({path: resolvedPath.pathname, end: true})
    return(
        
        <li className={isActive === to ? "active":""}>
        <Link to={to} {...props}>
            {children}
        </Link>
    </li>
    )
  }
  