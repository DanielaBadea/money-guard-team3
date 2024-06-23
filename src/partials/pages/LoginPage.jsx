import React from "react";
import LoginForm from "../Components/LoginForm";
import css from '../../sass/Module/LoginPage.module.css'

const LoginPage = () => {
    return(
        <main className={css.background}>
        <div className={css.containerBg}>
            <div className={css.bgRight}>
                <div className={`${css.responsiveImg} ${css.e17}`}></div>
                <div className={`${css.responsiveImg} ${css.e15}`}></div>
                <div className={`${css.responsiveImg} ${css.e19}`}></div>
                <div className={`${css.responsiveImg} ${css.e16}`}></div>
            </div>
            <div className={css.bgLeft}>
                <div className={`${css.responsiveImg} ${css.e14}`}></div>
                <div className={`${css.responsiveImg} ${css.e18}`}></div>
            </div>
            </div>  
        <LoginForm/>
        </main>
    )
}

export default LoginPage;