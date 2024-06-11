import React from "react";
import styles from "../styles/jordanButton.module.css"


export default function JordanButton(props: { title: string, link: string }) {
    return (
        <div className={styles.main}>
            <a href={props.link} className={styles.link}
                target="_blank"
                rel="noopener noreferrer">
                {props.title}
            </a>
        </div>
    );

}