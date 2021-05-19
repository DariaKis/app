import React from "react";
import classes from "./nav.module.css";
import {NavLink} from "react-router-dom";
//
// let classes = {
//     "nav":"nav_nav__22PbU",
//     "item":"nav_item__16saH",
//     "active": "fbbbgrbe"
// } Мы обращаемся к свойству объекта classes ({classes.nav}),подтягиваются истинные значения (nav_nav__22PbU).

//
// let c1 = "item";
// let c2 = "active";
// // "item active"
// let classes =c1 + " " + c2;
// let classesNew = `${classes.item} ${classes.active}`; //шаблонная строка, в строку внедряем JS-код,



const Navbar = () => {
    return <nav className={classes.nav}>
        <div className={classes.item}>
            <NavLink to="/profile" activeClassName={classes.activeLink}>Profile</NavLink>
        </div>

        <div className={classes.item}>
            <NavLink to="/dialogues" activeClassName={classes.activeLink}>Messages</NavLink>
        </div>

        <div className={classes.item}>
            <NavLink to="/users" activeClassName={classes.activeLink}>Users</NavLink>
        </div>

        <div className={classes.item}>
            <NavLink to="/news" activeClassName={classes.activeLink}>News</NavLink>
        </div>

        <div className={classes.item}>
            <NavLink to="/music" activeClassName={classes.activeLink}>Music</NavLink>
        </div>

        <div className={classes.item}>
            <NavLink to="/settings" activeClassName={classes.activeLink}>Settings</NavLink>
        </div>
    </nav>;
}

export default Navbar;