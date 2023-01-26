import { Colors } from "@/utils/theme";
import $ from "@master/literal";
import { HTMLAttributes } from "react";

export type TwitterIconProps = HTMLAttributes<SVGElement>;

export const TwitterIcon = (props: TwitterIconProps) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 39.37 32"
			{...props}
			className={$`
				cursor:pointer 
                h:24
                w:24 
				fill:#ebc6d7 
				fill:${Colors.Pink}:hover 
				stroke:#ebc6d7
				stroke:${Colors.Pink}:hover
			`}
		>
			<path
				d="M39.37 3.78c-1.44.64-3.01 1.07-4.64 1.27 1.67-1 2.95-2.58 3.55-4.47-1.57.92-3.29 1.6-5.13 1.97A8.075 8.075 0 0027.25 0c-4.45 0-8.08 3.62-8.08 8.08 0 .63.06 1.24.21 1.84A22.869 22.869 0 012.74 1.47a8.117 8.117 0 00-1.09 4.07c0 2.79 1.43 5.27 3.59 6.73a8.193 8.193 0 01-3.65-1.01v.09c0 3.92 2.78 7.19 6.48 7.92-.68.18-1.4.29-2.13.29-.52 0-1.03-.05-1.52-.14a8.068 8.068 0 007.54 5.6 16.174 16.174 0 01-10.03 3.45c-.64 0-1.29-.03-1.93-.11 3.58 2.29 7.82 3.62 12.38 3.62 14.86 0 22.99-12.31 22.99-22.99 0-.35 0-.71-.02-1.04a16.18 16.18 0 004.02-4.19"
			/>
		</svg>
	);
};
