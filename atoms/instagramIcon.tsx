import { Colors } from "@/utils/theme";
import $ from "@master/literal";
import { HTMLAttributes } from "react";

export type InstagramIconProps = HTMLAttributes<SVGElement>;

export const InstagramIcon = (props: InstagramIconProps) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 31.99 32"
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
			<path d="M25.8 0H6.19C2.77 0 0 2.77 0 6.19v19.63c0 3.41 2.77 6.19 6.19 6.19h19.62c3.41 0 6.19-2.77 6.19-6.19V6.17C31.99 2.77 29.21 0 25.81 0zm1.77 3.69h.71v5.42h-5.41l-.01-5.41h4.71zm-16.15 9.02c1.02-1.41 2.69-2.35 4.56-2.35s3.54.92 4.56 2.35A5.57 5.57 0 0121.6 16c0 3.1-2.52 5.64-5.64 5.64S10.35 19.1 10.35 16c0-1.22.4-2.36 1.06-3.29zM28.86 25.8a3.06 3.06 0 01-3.06 3.06H6.19a3.06 3.06 0 01-3.06-3.06V12.71H7.9A8.732 8.732 0 007.25 16c0 4.82 3.92 8.75 8.75 8.75s8.75-3.92 8.75-8.75c0-1.16-.24-2.27-.65-3.29h4.77V25.8z" />
		</svg>
	);
};
