import { Colors } from "@/utils/theme";
import $ from "@master/literal";
import { HTMLAttributes } from "react";

export type YoutubeIconProps = HTMLAttributes<SVGElement>;

export const YoutubeIcon = (props: YoutubeIconProps) => {
	return (
		<svg
			onClick={() => window.open("https://discord.gg/tddUyP9R", "_blank")}
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 42.56 30"
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
			<path d="M16.92 21.33V8.68l11.12 6.33-11.12 6.33zM41.66 4.69A5.373 5.373 0 0037.94.91h-.04C33.37.33 28.13 0 22.81 0h-1.62.08c-.46 0-.99-.01-1.54-.01-5.32 0-10.56.33-15.71.97L4.64.9C2.8 1.42 1.38 2.84.89 4.65v.04c-.58 2.99-.9 6.44-.9 9.95v.37-.02.35c0 3.52.32 6.96.94 10.3l-.05-.35c.5 1.85 1.92 3.27 3.72 3.78h.04c4.53.58 9.77.91 15.09.91h1.62-.08c.46 0 1 .01 1.54.01 5.32 0 10.56-.33 15.71-.97l-.62.06a5.354 5.354 0 003.75-3.75v-.04c.57-2.99.9-6.44.9-9.95v-.37V14.64c0-3.52-.32-6.96-.94-10.3l.05.35z" />
		</svg>
	);
};
