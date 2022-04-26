import React, { useState } from "react";
import { Squash as Hamburger, Squash } from "hamburger-react";
import styles from "../styles/HamburgerMenu.module.css";
import styles2 from "../styles/Header.module.css";

function HamburgerMenu() {
	const [hamburgerOpen, setHamburgerOpen] = useState(false);

	const toggleHamburger = () => {
		setHamburgerOpen(!hamburgerOpen);
	};

	
	return (
		<div className={styles.HamburgerMenu}>
			<Squash
				onToggle={(toggle) => {
					if (toggle) {
						toggleHamburger;
					} else {
						console.log("close menu");
					}
				}}
			/>
		</div>
	);
}

export default HamburgerMenu;
