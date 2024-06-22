import React from "react";
import { useDispatch } from "react-redux";
import { useAuth } from "../../hooks/useAuth";
import css from '../../sass/Module/Header.module.css';
import { IoIosLogOut } from "react-icons/io";
import { signOut } from "../../redux/auth/operations";
import logo from '../../images/logo.png';
import { useNavigate } from "react-router-dom";
import useModal from "../../hooks/useModal";
import ModalSignOut from "./ModalSignOut";
import Notiflix from "notiflix";

Notiflix.Notify.init({
    width: '280px',
    position: 'center-center',
    distance: '10px',
    opacity: 1,
});

const Header = () => {
    const dispatch = useDispatch();
    const { user } = useAuth();
    const navigate = useNavigate();
    const { isOpen, openModal, closeModal } = useModal();

    const extractUsername = (email) => {
        return email.split('@')[0];
    }

    const handleLogout = () => {
        dispatch(signOut())
            .then(() => {
                localStorage.clear();
                navigate('/login');
            })
            .catch(error => {
                Notiflix.Notify.error('Logout failed:', error);
            });
    }


    return (
        <div className={css.wrapper}>
            <div className={css.containerHeader}>
                <img src={logo} alt="Logo" />
                <div className={css.content}>
                    <p className={css.user}>{extractUsername(user.email)}</p>
                    <button type="button" onClick={openModal} className={css.btnExit}>
                        <span><IoIosLogOut /></span>
                        <span>Exit</span>
                    </button>
                    {isOpen && <ModalSignOut logOut={handleLogout} closeModal={closeModal} />}
                </div>
            </div>
        </div>
    );
}

export default Header;