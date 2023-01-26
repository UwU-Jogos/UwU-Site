import { Colors } from "@/utils/theme";
import $ from "@master/literal";
import { HTMLAttributes } from "react";

export type DiscordIconProps = HTMLAttributes<SVGElement>;

export const DiscordIcon = (props: DiscordIconProps) => {
	return (
		<svg
			onClick={() => window.open("https://discord.gg/tddUyP9R", "_blank")}
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 41.34 32"
			{...props}
			className={$`
				cursor:pointer 
                h:32
                w:32
				transform: scale(1.6):hover
				fill:#ebc6d7 
				fill:${Colors.Pink}:hover 
				stroke:#ebc6d7
				stroke:${Colors.Pink}:hover
			`}
		>
			<path d="M35.02 2.68A33.906 33.906 0 0026.49 0c-.37.66-.8 1.56-1.09 2.27-3.18-.48-6.33-.48-9.45 0-.3-.71-.73-1.6-1.11-2.27-2.99.52-5.86 1.43-8.53 2.69C.91 10.84-.56 18.8.18 26.64c3.58 2.67 7.05 4.3 10.46 5.36.84-1.16 1.59-2.39 2.24-3.69-1.23-.47-2.41-1.05-3.53-1.72.3-.22.59-.45.86-.68 6.8 3.18 14.19 3.18 20.91 0 .28.24.57.46.86.68-1.12.67-2.3 1.25-3.53 1.72.65 1.3 1.39 2.53 2.24 3.69 3.41-1.06 6.89-2.69 10.47-5.36.86-9.09-1.47-16.97-6.15-23.96zM13.8 21.81c-2.04 0-3.72-1.91-3.72-4.23s1.64-4.23 3.72-4.23 3.75 1.91 3.72 4.23c0 2.32-1.64 4.23-3.72 4.23zm13.73 0c-2.04 0-3.72-1.91-3.72-4.23s1.64-4.23 3.72-4.23 3.75 1.91 3.72 4.23c0 2.32-1.64 4.23-3.72 4.23z" />
		</svg>
	);
};
