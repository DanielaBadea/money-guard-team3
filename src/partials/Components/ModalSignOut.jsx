import React from "react";
import css from "../../sass/Module/ModalSignOut.module.css"
import logo from '../../images/logo.png';

const ModalSignOut = ({ logOut, closeModal }) => {
    return (
        <div className={css.overlay} onClick={closeModal}>
            <div className={css.content} onClick={(e) => e.stopPropagation()}>
                <img src={logo} alt="Logo" />
                <div>Are you sure you want to log out?</div>
                <div className={css.btns}>
                    <button className={css.btnLogOut} onClick={logOut}>Logout</button>
                    <button className={css.btnCancel} onClick={closeModal}>Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default ModalSignOut;
