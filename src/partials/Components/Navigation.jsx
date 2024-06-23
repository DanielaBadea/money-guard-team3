import React from "react";
import css from '../../sass/Module/Navigation.module.css';
import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa6";
const Navigation = () => {
    return(
        <div className={css.containerPage}>
        <ul className={css.list}>
        <li >
            <NavLink to = '/' className={css.link}> 
            <span className={css.iconHome}><FaHome/></span>
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
        </div>
    )
}
export default Navigation;