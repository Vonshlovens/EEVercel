'use client';
import React, { useEffect, useState } from "react";
import { useRef } from "react";
import styles from "../../styles/Pages/projects.module.css"
import Image, { StaticImageData } from "next/image";
import clsx from "clsx";
import { CaretLeftFill, CaretRightFill, ArrowsAngleExpand, ArrowsCollapse } from "react-bootstrap-icons";

interface GalleryItem {
	imageSRC: StaticImageData[];
	header: string;
	summary: string;
	link: string;
	tech: string[];
}

const GalleryItem = (props: GalleryItem) => {

	const [active, setActive] = useState(false);
	const [index, setIndex] = useState<number>(0);
	let length = props.imageSRC.length;

	// let expandbutton;
	// if (active)
	// 	expandbutton = <ArrowsCollapse className={styles.expand} size={20}
	// 		onClick={() => setActive(!active)} />
	// else
	// 	expandbutton = <ArrowsAngleExpand className={styles.expand} size={20}
	// 		onClick={() => setActive(!active)} />

	const changeImageLeft = () => {
		if (index > 0)
			setIndex(index - 1);
		else
			setIndex(length - 1);
	}

	const changeImageRight = () => {
		if (index < length - 1)
			setIndex(index + 1);
		else
			setIndex(0);
	}

	return (
		<div className={clsx(styles.gallery__item, active ? styles.active : styles.inactive)} >
			<CaretLeftFill className={clsx(styles.arrow, styles.left)} size={50} onClick={() => changeImageLeft()} />
			<CaretRightFill className={clsx(styles.arrow, styles.right)} size={50} onClick={() => changeImageRight()} />
			{/* {expandbutton} */}
			<Image src={props.imageSRC[index]} alt="Image Code" className={clsx(styles.gallery__img)} onClick={() => setActive(!active)} />
			<div className={styles.headers}>
				<div >
					<h3>{props.header}</h3>
					<p>{props.summary}</p>
				</div>
				<div className={styles.tech}>
					{props.tech.map((item,key) => (
						<div key={key}>{item}</div>
					))}
				</div>
			</div>
		</div>
	)
}

type combination = {
	configuration: number;
	roundness: number;
}

const Projects = () => {
	let calculatorImages: StaticImageData[] = [calc, CodeImg];
	let employerPortalImages: StaticImageData[] = [EPhome, about, balance, contact, table];
	let salaryPackagingImages: StaticImageData[] = [SalaryPackaging];
	//let cemImages: StaticImageData[] = [Cem1, Cem2, Cem3];
	let other: StaticImageData[] = [thing];


	return (
		<div className={styles.pageContainer}>
			<h1 className={styles.pageTitle}>My Work</h1>
			<p>Here are some of my lastest projects, showcasing a diverse range of projects that encompass both my professional contributions and personal undertakings.</p>
			<div className={styles.container}>
				<GalleryItem
					header="IAAF Calulator (Backend)"
					summary="Custom calculator to compare information between world athletics approved events"
					imageSRC={calculatorImages}
					link=""
					tech={["C#", ".Net Core", "TypeScript"]}
				/>
				<GalleryItem
					header="Employer Portal (Full Stack)"
					summary="An admin site for salary packaging employers. Displays employee stats and revenue numbers."
					imageSRC={employerPortalImages}
					tech={["C#", "Blazor", "Rest API", "CSS", "Entity Framework", ".NET 7"]}
					link="" />
				<GalleryItem
					header="MySalPack Admin (Full Stack)"
					summary="A system designed to streamline admin tasks for salary packaging. "
					imageSRC={salaryPackagingImages}
					tech={["C#", "Blazor", "Rest API", "CSS",".NET 7"]}
					link="" />
				<GalleryItem
					header="React Portfolio Website (Frontend)"
					summary="My original portfolio website."
					tech={["JavaScript", "React", "HTML", "CSS"]}
					imageSRC={other}
					link="" />
				<GalleryItem
					header="CEM Portal (Full Stack)"
					summary="Agent management system to track agent stats and allow them to record their schedule."
					imageSRC={other}
					tech={["C#", "Blazor", "Rest API", "CSS",".NET 7"]}
					link="" />
			</div>
		</div>
	);
}
export default Projects;


import SalaryPackaging from "../../public/SalaryPacakging.png";
import thing from "../../public/reactwebsite.png";

import CodeImg from "../../public/codeimage.png";
import calc from "../../public/ProjectImages/Calculator/calc.png";

import EPhome from "../../public/ProjectImages/EmployerPortal/homePage.png"
import about from "../../public/ProjectImages/EmployerPortal/about.png"
import balance from "../../public/ProjectImages/EmployerPortal/balancePage.png"
import contact from "../../public/ProjectImages/EmployerPortal/contact.png"
import table from "../../public/ProjectImages/EmployerPortal/TablePage.png"

// import Cem1 from "../../public/ProjectImages/CEMPortal/CEM1.png"
// import Cem2 from "../../public/ProjectImages/CEMPortal/CEM2.png"
// import Cem3 from "../../public/ProjectImages/CEMPortal/CEM3.png"


