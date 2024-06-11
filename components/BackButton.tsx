import React from "react";
import Link from "next/link";
import styles from "../styles/Components/backButton.module.css"
import { UilAngleLeft } from '@iconscout/react-unicons'

export default function backButton() {
    return (
        <div>
            <div className={styles.container}>
                <Link href="/" >
                    <UilAngleLeft size="60" className={styles.backButton}>
                    </UilAngleLeft>
                </Link>
            </div>
        </div>
    );
}