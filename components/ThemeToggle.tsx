import { useState, useEffect } from "react";
import React from "react";
import style from "../styles/Components/themeToggle.module.css"

const Toggle = () => {
    const [activeTheme, setActiveTheme] = useState(document.body.dataset.theme);
    const inactiveTheme = activeTheme === "light" ? "dark" : "light";

    useEffect(() => {
        document.body.dataset.theme = activeTheme;
        window.localStorage.setItem("theme", activeTheme != undefined ? activeTheme : 'dark');
    }, [activeTheme]);

    return (

        <div className={style.switch}>
            <label >
                <input id={style.toggle} className={style.toggle_switch} type="checkbox" onClick={() => setActiveTheme(inactiveTheme)} />
                <div className={style.sun_moon}><div className={style.dots}></div></div>
                <div className={style.background}><div className={style.stars1}></div><div className={style.stars2}></div></div>
                <div className={style.fill}></div>
            </label>
        </div>
    );
}

export default Toggle;