import { Computer } from "@/atoms/computer";
import { FloatingPanel } from "@/atoms/floatingPanel";
import { Watermark } from "@/atoms/watermark";
import { Nav } from "@/molecules/nav";
import { Soon } from "@/atoms/soon";
import { Colors } from "@/utils/theme";
import Head from "next/head";

export default function Home() {
	const openDiscord = () => {
		window.open("https://discord.gg/tddUyP9R", "_blank");
	};

	return (
		<>
			<Head>
				<title>UWU Games</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta
					name="description"
					content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
				/>
				<meta name="keywords" content="UWU, UWU GAMES, Games, PC" />
				<meta name="robots" content="noindex, nofollow" />
				<meta property="og:title" content="UWU Games - Best UWU games" />
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://uwu.games" />
				<meta property="og:image" content="https://uwu.games/logo.png" />
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