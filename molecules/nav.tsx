import { DiscordIcon } from "@/atoms/discordIcon";
// import { InstagramIcon } from "@/atoms/instagramIcon";
import { Logo } from "@/atoms/logo";
// import { TiktokIcon } from "@/atoms/tiktokIcon";
// import { TwitterIcon } from "@/atoms/twitterIcon";
// import { YoutubeIcon } from "@/atoms/youtubeIcon";
import { useId } from "react";

export const Nav = () => {
	const Icons = [
		DiscordIcon,
		// TiktokIcon,
		// YoutubeIcon,
		// InstagramIcon,
		// TwitterIcon,
	];

	return (
		<nav className="h:5vh w:100% flex">
			<div className="flex flex:1 jc:space-between ai:center">
				<Logo className="h:128 w:128" />
				<ul className="flex jc:space-between ai:center gap:1.5rem">
					{Icons.map((Icon) => (
						<li key={useId()}>
							<Icon />
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
};
