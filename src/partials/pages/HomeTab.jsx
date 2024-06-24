import React, { useEffect } from "react";
import css from '../../sass/Module/HomeTab.module.css';
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import Header from "../Components/Header";
import TransactionsList from "../Components/TransactionsList";
import Navigation from "../Components/Navigation";

const HomeTab = () => {
    const {isLoggedIn} = useAuth()
  
    const navigate = useNavigate();

    useEffect(()=>{
        if(!isLoggedIn){
            navigate('/login')
        }
    }, [isLoggedIn, navigate])

    return(
        <>
{isLoggedIn ? (
    
<div className={css.wrapper}>
    <Header/> 
    <div className={css.wrapperPosition}>
    <div className={`${css.responsivePic} ${css.elip14}`}></div>
       <div className={`${css.responsivePic} ${css.elip19}`}></div>
       <div className={`${css.responsivePic} ${css.elip16}`}></div>
       <div className={`${css.responsivePic} ${css.elip17}`}></div>
    <div className={css.container}>  
    <Navigation />
    <TransactionsList />
    </div>
    </div>
    </div>
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
        </>
    )
    
}

export default HomeTab;