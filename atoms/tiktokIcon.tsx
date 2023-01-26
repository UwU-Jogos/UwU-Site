import { Colors } from "@/utils/theme";
import $ from "@master/literal";
import { HTMLAttributes } from "react";

export type TiktokIconProps = HTMLAttributes<SVGElement>;

export const TiktokIcon = (props: TiktokIconProps) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 27.81 32"
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
			<path
				d="M14.6.03C16.35 0 18.08.02 19.81 0c.06 2.17.94 4.12 2.34 5.56a9.42 9.42 0 005.63 2.38h.03v5.38a14.19 14.19 0 01-5.69-1.33l.09.04c-.84-.4-1.54-.82-2.22-1.28l.06.04c-.01 3.89.01 7.79-.03 11.67-.11 1.98-.77 3.78-1.82 5.29l.02-.03c-1.76 2.52-4.62 4.18-7.87 4.28H9.9a9.6 9.6 0 01-5.04-1.41l.04.02C2.22 29.01.37 26.25.03 23.05v-.04c-.03-.67-.04-1.33-.02-1.99.52-5.1 4.8-9.05 9.99-9.05.58 0 1.16.05 1.71.15h-.06c.03 1.96-.05 3.94-.05 5.91a4.583 4.583 0 00-5.84 2.79v.03c-.15.46-.23.98-.23 1.52 0 .22.01.44.04.65v-.03a4.539 4.539 0 004.48 3.83h.19a4.48 4.48 0 003.68-2.13v-.02c.3-.4.49-.88.56-1.4.13-2.4.08-4.78.09-7.16.01-5.37-.01-10.74.03-16.1z"
			/>
		</svg>
	);
};
