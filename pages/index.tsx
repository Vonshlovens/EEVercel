import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Image, { StaticImageData } from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import Logo from "../public/saitamahead.png"
import DarkLogo from "../public/saitamaheaddark.png"
import { Journals, Joystick, Terminal, FilePerson, CodeSlash } from 'react-bootstrap-icons';
import { Analytics } from '@vercel/analytics/react';
import clsx from 'clsx'
import { Octokit } from "octokit";
import { OctokitResponse, GetResponseDataTypeFromEndpointMethod } from "@octokit/types";

const octokit = new Octokit({ auth: process.env.Git_API_Key });


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
	const [dark, setDark] = useState(false);
	const [active, setActive] = useState(false);
	const [items, setItems] = useState<string>();
	const [logo_theme, setTheme] = useState<StaticImageData>();
	const [loading, setLoading] = useState(true);
	const [activeTheme, setActiveTheme] = useState<String>();
	
	
	useEffect(() => {
		setActiveTheme(document.body.dataset.theme);
		if(activeTheme === "light") {
			setTheme(Logo);
		} else {
			setTheme(DarkLogo);
		}
		const fetch = async () => {
			try {
				
				let commits = await octokit.request('GET /repos/{owner}/{repo}/commits', {
					owner: 'Vonshlovens',
					repo: 'EEVercel',
					per_page: 100,
					headers: {
						'X-GitHub-Api-Version': '2022-11-28'
					}
				})
				let response = await octokit.request('GET /users/{username}', {
					username: 'Vonshlovens',
					headers: {
						'X-GitHub-Api-Version': '2022-11-28'
					}
				})
				setItems("Github: " + response.data.login + ". " + "Commits: " + commits.data.length)
			} catch (err) {
				console.error(err);
				console.log(err);
			}
		}
		fetch();
		console.log(items);

		const prefersDark = window.matchMedia(
			"(prefers-color-scheme: dark)"
		).matches;

		if (prefersDark) {
			setDark(true);
			setTheme(DarkLogo);
		}
		setLoading(false);
	}, [items, activeTheme])


	function handleClick() {
		setActive(!active);
	};

	return (
		<>
			<Head>
				<title>Eric Evans</title>
				<meta name="description" content="Jordan Samson" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/saitamahead.png" />
			</Head>
			<main >
				<div className={styles.container}>
					<small>Click Me!</small>
					<div className={styles.orbit}>
						<div className={styles.innerCircle} />
					</div>
					{/* <div className={styles.star}></div>
					<div className={styles.star}></div> */}
					<Image src={logo_theme} alt='Eric Evans' height={325} width={325} className={styles.logo} onClick={() => handleClick()} />
					<div className={clsx(styles.innerlink, styles.link1, active ? styles.active : styles.nonactive)}>
						<Link href={"/about"}>
							<FilePerson className={styles.icon} />
						</Link>
						About
					</div>

					<div className={clsx(styles.innerlink, styles.link2, active ? styles.active : styles.nonactive)}>
						<Link href={"/projects"}>
							<Terminal className={styles.icon} />
						</Link>
						My Work
					</div>

					<div className={clsx(styles.innerlink, styles.link3, active ? styles.active : styles.nonactive)}>
						<Link href={"/things"}>
							<Journals className={styles.icon} />
						</Link>
						Things
					</div>

					<div className={clsx(styles.innerlink, styles.link4, active ? styles.active : styles.nonactive)}>
						<Link href={"/stuff/calculator"}>
							<Joystick className={styles.icon} />
						</Link>
						T&F Calc
					</div>
					<div className={styles.bottomBar}>
						<a href='https://github.com/vonshlovens/eevercel' target="_blank">
							<small>Designed & Built by Eric Evans
								<br />
								<CodeSlash className={styles.branchIcon} size={24} />
								{!loading
									? <small>{items}</small>
									: <>...</>
								}
							</small>
						</a>
					</div>
				</div>
				<Analytics />
			</main>
		</>
	)
}
