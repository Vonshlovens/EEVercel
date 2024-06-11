import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import styles from "../styles/Components/navbar.module.css"
//import ThemeToggle from "./ThemeToggle";
const ThemeToggle = dynamic(() => import("./ThemeToggle"), {
    ssr: false,
  });
import JordanButton from "./Button";
import clsx from 'clsx';
import { X, List, Github, Youtube, Linkedin, Instagram,Envelope } from 'react-bootstrap-icons';
import BackButton from "./BackButton";
import Link from "next/link";

const Navbar = () => {
    const [navActive, SetnavActive] = useState(false);
    const [show, setShow] = useState(true);
    const [thebackButton, setBackButton] = useState(false)

    useEffect(() => setBackButton(true), []);

    var button;
    if (navActive) {
        button = <X size={40} />
    } else {
        button = <List size={40} />
    }
    const backButton = () => {
        if (thebackButton) {
            if (typeof window === "undefined")
                return <div ></div>
            if (window.location.pathname != "/") {
                return <BackButton />
            }
        }
        return <div></div>;
    }

    return (
        <nav className={clsx(styles.nav__container, show ? styles.hide_nav : styles.show_nav)}>
            {backButton()}
            <div className={styles.nav_top}>
                <h1><Link href={"/"}>J<span>.</span>S<span>.</span></Link></h1>
                <ThemeToggle />
            </div>
            <div className={styles.mobile_menu} onClick={() => SetnavActive(!navActive)}>
                {button}
            </div>
            <div className={clsx(styles.nav_side, navActive ? styles.active : styles.inactive)}>
                <JordanButton title="CV" link={"../Resume.pdf"} />
                <ThemeToggle />
                <div className={styles.socialMedia}>
                    <a href="https://github.com/smuthbudda?tab=repositories" target="_blank">
                        <Github size={40} />
                    </a>
                    <a href="https://www.youtube.com/channel/UCACRIvYPVdscGnHulrqfZoQ">
                        <Youtube size={40} />
                    </a>
                    <a href="https://www.linkedin.com/in/jordan-samson-51a800231/" target="_blank">
                        <Linkedin size={40} />
                    </a>
                    <a href="https://github.com/smuthbudda?tab=repositories" target="_blank">
                        <Instagram size={40} />
                    </a>
                    <Link href={"/contact-me"}>
                        <Envelope size={40} />
                    </Link>
                </div>
            </div>
        </nav>
    );
};
export default Navbar;
