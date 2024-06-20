import React from "react";
import LoginForm from "../Components/LoginForm";
import css from '../../sass/Module/LoginPage.module.css'

const LoginPage = () => {
    return(
        <main className={css.background}>
             <div className={css.containerBg}>
            <div className={css.bgRight}>
                <div className={css.circleRight}></div>

            </div>
            <div className={css.bgLeft}>
            <div className={css.circleTop}></div>
            <div className={css.circleTopR}></div>
            <div className={css.circleLeft}></div>

            </div>
            </div>
        <LoginForm/>
        </main>
    )
}

export default LoginPage;