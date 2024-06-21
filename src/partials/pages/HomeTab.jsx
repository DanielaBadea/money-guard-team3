import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { RiH1 } from "react-icons/ri";
import Header from "../Components/Header";

const HomeTab = () => {
    const {isLoggedIn} = useAuth()
    return(
        <div>
{isLoggedIn ? (
    <>
    <Header/>
<h1>Bun venit pe pagina!</h1>
    </>
) : (
    <ul>
                <li>
                    <NavLink to='/register'>
                    Registration
                    </NavLink>
                
                </li>
                <li>
                    <NavLink to='/login'>
                    Login
                    </NavLink>
                    
                </li>
            </ul>
)}
        </div>
    )
}

export default HomeTab;