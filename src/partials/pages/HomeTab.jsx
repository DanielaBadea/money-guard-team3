import React from "react";
import css from '../../sass/Module/HomeTab.module.css';
import { NavLink } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import Header from "../Components/Header";
import TransactionsList from "../Components/TransactionsList";
import Navigation from "../Components/Navigation";
const HomeTab = () => {
    const {isLoggedIn} = useAuth()
    return(
        <div className={css.wrapper}>
{isLoggedIn ? (
    <>
    <Header/> 
    <div className={css.container}>  
    <Navigation />
    <TransactionsList />
    </div>
    </>
) : (
    <ul>
        <li>
            <NavLink to='/register' className={css.logUser}>
                <span>Registration</span>
            </NavLink>
                
        </li>
        <li>
        <NavLink to='/login'className={css.logUser}>
            <span>Login</span>
        </NavLink>
                    
        </li>
            </ul>
)}
        </div>
    )
}

export default HomeTab;