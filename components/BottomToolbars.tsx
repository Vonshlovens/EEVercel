import styles from "../styles/Components/toolbars.module.css"
import React, { useEffect, useState } from "react";
import { Github, Youtube, Linkedin, Instagram, FileEarmark} from 'react-bootstrap-icons';
import clsx from "clsx";
import Link from "next/link";


function Toolbars() {
    
    return (
        <>
            <div className={clsx(styles.toolbar, styles.left)}>
                <div className={styles.toolbar__icons} >
                    <a href={"../Resume.pdf"} target="_blank">
                        <FileEarmark size={24} />
                    </a>
                    <a href="https://github.com/smuthbudda?tab=repositories" target="_blank">
                        <Github size={24} />
                    </a>
                    <a href="https://www.youtube.com/channel/UCACRIvYPVdscGnHulrqfZoQ" target="_blank">
                        <Youtube size={24} />
                    </a>
                    <a href="https://www.linkedin.com/in/jordan-samson-51a800231/" target="_blank">
                        <Linkedin size={24} />
                    </a>
                    <a href="https://github.com/smuthbudda?tab=repositories" target="_blank">
                        <Instagram size={24} />
                    </a>
                </div>
            </div>

            <div className={clsx(styles.toolbar, styles.right)}>
                <div className={styles.toolbar__contact} >
                    <a href="mailto: jkdsamson@outlook.com">jkdsamson@outlook.com</a> 
                    {/* <Link href={"/contact-me"}>jkdsamson@outlook.com</Link> */}
                </div>
            </div>

        </>
    )

}

export default Toolbars;