import React from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Services.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faBarsProgress,
	faBezierCurve,
	faSearchDollar,
	faRocket,
} from "@fortawesome/free-solid-svg-icons";
import { faCaretSquareRight } from "@fortawesome/free-regular-svg-icons";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PreFooter from "../components/PreFooter";

function services() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Minty Solutions - Services</title>
				<meta name="description" content="" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				{/* HEADER */}
				<Header title="Services" />
				<div className={styles.servicesSectionOne}>
					<div>
						<Image src="/images/04-min.png" width={574} height={402} alt={""} />
					</div>

					<div className={styles.content}>
						<h3 className={styles.servicesSectionOneTitle}>
							Graphic Design &#38; Video Production
						</h3>
						<p>
							Our in-house designers are at your disposal for any graphics you
							need.
						</p>
						<a href="">Here are some examples of what we&#39;re capable of </a>
						<ul>
							<li>
								Vector Design (Logos, Graphical Assets to be used in Web Design,
								etc.)
							</li>
							<li>
								Full Graphics (Banners, Promotional graphics, Infographics,
								etc.)
							</li>
							<li>Promotional/Introduction Videos</li>
							<li>Launch Announcement/Minting Videos</li>
						</ul>
					</div>
				</div>

				<div className={styles.servicesSectionTwo}>
					<div className={styles.content}>
						<h3 className={styles.servicesSectionTwoTitle}>
							Social Account Management
						</h3>
						<p className={styles.servicesSectionTwoParagraph}>
							Our management teams will manage and grow all of your social media
							outlets, taking advantage of our vast network of influencers and
							platforms. Our proprietary database allows us to properly optimize
							the use of funding to derive the maximum possible benefit from
							influencers. All influencers in our database are periodically both
							automatically and manually audited to ensure that the quality of
							our collaborations remain at the highest level.
						</p>
						<a href="">Case Studies &#38; Achievements </a>
					</div>
					<div>
						<Image src="/images/05-min.png" width={574} height={402} alt={""} />
					</div>
				</div>

				<div className={styles.servicesSectionThree}>
					<div>
						<Image src="/images/06-min.png" width={574} height={402} alt={""} />
					</div>

					<div className={styles.content}>
						<h3 className={styles.servicesSectionThreeTitle}>
							Ad &#38; Search Engine Optimization
						</h3>
						<p>
							Our team of marketing experts will heavily optimize your website
							and maximize overall reach using carefully constructed budget and
							content-plans.
						</p>
						<a href="">Here are some examples of what we&#39;re capable of </a>
						<div className={styles.aboutServicesSectionThree}>
							<div>
								<FontAwesomeIcon
									icon={faBarsProgress}
									className={styles.aboutServicesSectionThreeIcon}
								/>{" "}
								<h4>Ad Optimization</h4>
								<p>
									Our team will ensure that all ad-promotions and influencer
									collaborations are optimized to yield the maximum possible
									benefit.
								</p>
							</div>
							<div>
								<FontAwesomeIcon
									icon={faBarsProgress}
									className={styles.aboutServicesSectionThreeIcon}
								/>{" "}
								<h4>Search Engine Optimization</h4>
								<p>
									Our team will ensure your project comes up first in search
									queries in order to increase conversion rates.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className={styles.servicesPageCTAOne}>
					<p className={styles.topTitle}>Get Spotted with Us.</p>
					<h1>
						You Give Us The Vision. <br />
						We Bring It To Life.
					</h1>
					<p>Our Results Speak for Themselves.</p>
					<div>
						<div>
							<a href="https://mintysolutions.vercel.app/services">Learn More</a>
							<FontAwesomeIcon
								icon={faCaretSquareRight}
								className={styles.whyMintyCTAIcon}
							/>{" "}
						</div>
						<div>
							<a href="https://mintysolutions.vercel.app/contact">Contact Us</a>
							<FontAwesomeIcon
								icon={faCaretSquareRight}
								className={styles.whyMintyCTAIcon}
							/>{" "}
						</div>
					</div>
				</div>
				<div className={styles.teamPhoto}>
					<Image
						src="/images/07-min.png"
						alt=""
						width={800}
						height={410}
						objectFit="cover"
					/>
				</div>
				<div className={styles.servicesPageCTATwo}>
					<h1>
						Marketing is a Revolving Process. <br />
						We Nail It Every Time
					</h1>
					<div>
						<a href="https://mintysolutions.vercel.app/services">Learn more</a>
						<FontAwesomeIcon
							icon={faCaretSquareRight}
							className={styles.whyMintyCTAIcon}
						/>{" "}
					</div>
				</div>

				{/* PRE FOOTER */}
				<PreFooter />
			</main>

			<Footer />
		</div>
	);
}

export default services;
