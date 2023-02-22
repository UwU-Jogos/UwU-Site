import { Computer } from "@/atoms/computer";
import { FloatingPanel } from "@/atoms/floatingPanel";
import { SEO } from "@/atoms/seo";
import { Soon } from "@/atoms/soon";
import { Watermark } from "@/atoms/watermark";
import { Nav } from "@/molecules/nav";
import { Colors } from "@/utils/theme";
import Head from "next/head";

export default function Home() {
	const openDiscord = () => {
		window.open("https://discord.gg/tddUyP9R", "_blank");
	};

	return (
		<>
			<Head>
				<SEO />
				<meta charSet="UTF-8" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Nav />

			<main className='flex width:500 mt:10% flex:col'>
				<Soon />
				<p
					className={`f:32 f:${Colors.Pink} f:bold cursor:pointer`}
					onClick={openDiscord}
					style={{ fontFamily: "Open Sans" }}
				>
					Join Us
				</p>
			</main>

			<Watermark />
			<FloatingPanel />
			<Computer />
		</>
	);
}
