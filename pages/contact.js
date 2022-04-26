import React from "react";
import { InlineWidget } from "react-calendly";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/CaseStudies.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faBarsProgress,
	faBezierCurve,
	faSearchDollar,
	faRocket,
} from "@fortawesome/free-solid-svg-icons";
import {
	faCircleCheck,
	faCircleXmark,
} from "@fortawesome/free-regular-svg-icons";
import Header from "../components/Header";
import PreFooter from "../components/PreFooter";
import Footer from "../components/Footer";

function contact() {
	const componentDidMount = () => {
		// whatever stuff you need here
	};
	const componentWillUnmount = () => {
		// whatever cleanup stuff you need here
	};
	return (
		<div className={styles.container}>
			<Head>
				<title>Minty Solutions - Case Studies</title>
				<meta name="description" content="" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				{/* HEADER */}
				<Header title="Contact Us" />
				<InlineWidget url="https://calendly.com/chrisokwakol" />
				{/* PRE FOOTER */}
				<PreFooter />
			</main>

			<Footer />
		</div>
	);
}

export default contact;
