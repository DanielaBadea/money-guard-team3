import React from "react";
import RegistrationForm from "../Components/RegistrationForm";
import css from '../../sass/Module/RegistrationPage.module.css';

const RegistrationPage = () => {
    return(
        <main className={css.background}>
            <div className={css.containerBg}>
            <div className={css.bgRight}>
                <div className={`${css.responsiveImg} ${css.e17}`}></div>
                <div className={`${css.responsiveImg} ${css.e15}`}></div>
                <div className={`${css.responsiveImg} ${css.e19}`}></div>
                <div className={`${css.responsiveImg} ${css.e16}`}></div>
                {/* <img 
                srcSet={`${e17_1x} 1x, ${e17_2x} 2x`}
                src={e17_1x} 
                alt="Elipse 17"
                className={`${css.responsiveImg} ${css.e17}`} />
                 <img 
                srcSet={`${e15_1x} 1x, ${e15_2x} 2x`}
                src={e15_1x} 
                alt="Elipse 15"
                className={`${css.responsiveImg} ${css.e15}`} />
                 <img 
                srcSet={`${e19_1x} 1x, ${e19_2x} 2x`}
                src={e19_1x} 
                alt="Elipse 19"
                className={`${css.responsiveImg} ${css.e19}`} />
                <img 
                srcSet={`${e16_1x} 1x, ${e16_2x} 2x`}
                src={e16_1x} 
                alt="Elipse 16"
                className={`${css.responsiveImg} ${css.e16}`} /> */}


            </div>
            <div className={css.bgLeft}>
                <div className={`${css.responsiveImg} ${css.e14}`}></div>
                <div className={`${css.responsiveImg} ${css.e18}`}></div>
            {/* <img 
                srcSet={`${e14_1x} 1x, ${e14_2x} 2x`}
                src={e14_1x} 
                alt="Elipse 14"
                className={`${css.responsiveImg} ${css.e14}`} />
                <img 
                srcSet={`${e18_1x} 1x, ${e18_2x} 2x`}
                src={e18_1x} 
                alt="Elipse 18"
                className={`${css.responsiveImg} ${css.e18}`} /> */}
            </div>
            </div>  
        <RegistrationForm/>
        </main>
    )
}

export default RegistrationPage;