import React, { useState } from "react";
import Image from "next/image";
import styles from "../styles/Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { GoRocket } from "react-icons/go";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Squash as Hamburger, Squash } from "hamburger-react";
import HamburgerMenu from "./HamburgerMenu";

const Header = (props) => {
	// Particles Backgrounds
	const particlesInit = async (main) => {
		console.log(main);

		// you can initialize the tsParticles instance (main) here, adding custom shapes or presets
		// this loads the tsparticles package bundle, it's the easiest method for getting everything ready
		// starting from v2 you can add only the features you need reducing the bundle size
		await loadFull(main);
	};

	const particlesLoaded = (container) => {
		console.log(container);
	};

	// Mobile Nav Bar State
	const [navbarOpen, setNavbarOpen] = useState(false);
	const burgerToggle = () => {
		setNavbarOpen((prev) => !prev);
	};

	// Mobile Nav Bar Classes
	const navLinksClasses = [
		styles.navLinks,
		`${navbarOpen ? styles.navActive : ""}`,
	];
	return (
		<header className={styles.header}>
			<Particles
				id={styles["tsparticles"]}
				init={particlesInit}
				loaded={particlesLoaded}
				options={{
					background: {
						color: {
							value: "#EEF6FE",
						},
					},
					fpsLimit: 120,
					interactivity: {
						events: {
							onClick: {
								enable: true,
								mode: "push",
							},
							onHover: {
								enable: true,
								mode: "grab",
							},
							resize: true,
						},
						modes: {
							push: {
								quantity: 4,
							},
							repulse: {
								distance: 200,
								duration: 0.4,
							},
						},
					},
					particles: {
						color: {
							value: "#000",
						},
						links: {
							color: "#000",
							distance: 150,
							enable: true,
							opacity: 0.5,
							width: 1,
						},
						collisions: {
							enable: true,
						},
						move: {
							direction: "none",
							enable: true,
							outModes: {
								default: "bounce",
							},
							random: false,
							speed: 1,
							straight: false,
						},
						number: {
							density: {
								enable: true,
								area: 800,
							},
							value: 80,
						},
						opacity: {
							value: 0.5,
						},
						shape: {
							type: "circle",
						},
						size: {
							value: { min: 1, max: 5 },
						},
					},
					detectRetina: true,
					fullScreen: {
						enable: false,
						zIndex: 0,
					},
				}}
			/>

			<nav className={styles.nav}>
				<div onClick={burgerToggle}>
					<HamburgerMenu />
				</div>
				<ul className={navLinksClasses.join(" ")}>
					<li>
						<a href="https://mintysolutions.vercel.app/">Home</a>
					</li>
					<li>
						<a href="https://mintysolutions.vercel.app/services">Services</a>
					</li>
					<li>
						<a href="https://mintysolutions.vercel.app/casestudies">
							Case Studies
						</a>
					</li>
					<li>
						<a href="https://mintysolutions.vercel.app/contact">Contact</a>
					</li>
				</ul>
				{/* <Image
					src="/images/logo/logo-dark.png"
					alt=""
					width={180}
					height={80}
					objectFit="cover"
				/> */}
				<button className={styles.scheduleACallBtn}>Schedule a Call!</button>
			</nav>
			{/* <div className={styles.heroContentContainer}> */}
			<div className={styles.heroContent}>
				<h1>{props.title}</h1>
				{/* <h1>We Enhance Social Media Management and Marketing</h1> */}
				<p>
					Welcome to Minty Solutions, the all-in-one digital marketing service
					personalised to your project
				</p>
				<div className={styles.headerBtns}>
					<a href="https://mintysolutions.vercel.app/services">
						<button className={styles.learnMoreBtn}>Learn More</button>
					</a>
					<button className={styles.scheduleACallBtn}>Schedule a Call!</button>
				</div>
			</div>
			{/* </div> */}
		</header>
	);
};

export default Header;
