import "./Meals-navbar.css";
import {Link, useResolvedPath, useMatch} from "react-router-dom";
export default function Mealsnav(props){
    return(
        <div className="article">
            <div className="menu-bar">
                <ul>
                   <CustomeLink to="Salad">Salad</CustomeLink>
                   <CustomeLink to="Soup">Soup</CustomeLink>
                   <CustomeLink to="Herbs">Herbs</CustomeLink>
                   <CustomeLink to="Fish">Fish</CustomeLink>
                   <CustomeLink to="Burger">Burger</CustomeLink>
                   <CustomeLink to="Noodles">Noodles</CustomeLink>
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