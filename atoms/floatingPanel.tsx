import $ from "@master/literal";
import { HTMLAttributes } from "react";

export type FloatingPanelProps = HTMLAttributes<SVGElement>;

export const FloatingPanel = (props: FloatingPanelProps) => {
	return (
		<svg
			data-name="Layer 2"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 1268 1030.97"
			{...props}
            className={$`
                abs
                bottom:0
                w:100%
                z:-1
                
            `}
		>
			<defs>
				<linearGradient
					id="a"
					x1={0}
					y1={515.49}
					x2={1395.94}
					y2={515.49}
					gradientUnits="userSpaceOnUse"
				>
					<stop offset={0} stopColor="#d32e4c" />
					<stop offset={1} stopColor="#e63087" />
				</linearGradient>
			</defs>
			<path
				d="M946 3.97c-119.56-19.1-254 31-339.22 142.73C506.06 278.76 599.94 402.29 454 501.97c-70.61 48.23-203.16 99.91-292.67 170.67C79.95 736.97 32.01 838.98 11.62 910.97 3.76 938.72 0 962.02 0 976.97v54h1268V188.46S1124.16 32.44 946 3.97z"
				fill="url(#a)"
				data-name="Layer 1"
			/>
		</svg>
	);
};
