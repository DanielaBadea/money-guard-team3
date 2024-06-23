import React from "react";
import css from '../../sass/Module/HomeTab.module.css';
import { NavLink } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import Header from "../Components/Header";
import TransactionsList from "../Components/TransactionsList";
import { FaHome } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa6";
const HomeTab = () => {
    const {isLoggedIn} = useAuth()
    return(
        <div>
{isLoggedIn ? (
    <>
    <Header/>     
    <div className={css.wrapper}>
        <div className={css.containerPage}>
        <ul className={css.list}>
        <li >
            <NavLink to = '/' className={css.link}> 
            <span><FaHome/></span>
            <span>Home</span>
            </NavLink>
        </li>
        <li>
            <NavLink to = '/statistics' className={css.link}>
                <span><FaChartLine/></span>
            <span>Statistics</span>
            </NavLink>
        </li>
    </ul>
    <div className={css.table}>
        <TransactionsList/>
        </div>
        </div>
    
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