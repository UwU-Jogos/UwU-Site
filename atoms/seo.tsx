type SEOProps = {
	// TODO: Add SEO props
};

export function SEO(): JSX.Element {
	return (
		<>
			<title>
				UWU Games
			</title>
			<meta
				name="description"
				content="An indie gamedev company based in brazil"
			/>
			<meta
				name="keywords"
				content="UWU Games, Gamedev, jogos, diversão, desenvolvedora de jogos"
			/>
			<meta name="robots" content="index, follow" />
			<meta
				property="og:title"
				content="UwU Games"
			/>
			<meta property="og:type" content="website" />
			<meta property="og:url" content="https://uwu.games" />
			<meta property="og:image" content="https://uwu.games/og-image.png" />
			<meta
				property="og:description"
				content="Party Project"
			/>
			<meta property="og:site_name" content="UWU Games" />
			<meta property="og:image:type" content="image/png" />
			<meta property="og:image:width" content="1200" />
			<meta property="og:image:height" content="630" />
			<meta name="twitter:card" content="summary_large_image" />
			<meta
				name="twitter:title"
				content="UwU Games"
			/>
			<meta
				name="twitter:description"
				content="Party Project"
			/>
			<meta name="twitter:image" content="https://uwu.games/og-image.png" />
		</>
	);
}
