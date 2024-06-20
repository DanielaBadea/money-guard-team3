import React from "react";
import RegistrationForm from "../Components/RegistrationForm";
import css from '../../sass/Module/RegistrationPage.module.css';

const RegistrationPage = () => {
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
            
        <RegistrationForm/>
        </main>
    )
}

export default RegistrationPage;