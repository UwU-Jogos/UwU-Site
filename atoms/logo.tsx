import { HTMLAttributes } from "react";

export type LogoProps = HTMLAttributes<SVGElement>;

export const Logo = (props: LogoProps) => {
	return (
		<svg
			data-name="Layer 2"
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			viewBox="0 0 225.2 64"
			{...props}
		>
			<defs>
				<linearGradient
					id="a"
					x1={32}
					y1={-15.62}
					x2={32}
					y2={62.62}
					gradientUnits="userSpaceOnUse"
				>
					<stop offset={0} stopColor="#d32e4c" />
					<stop offset={1} stopColor="#e63087" />
				</linearGradient>
				<linearGradient id="b" x1={32} x2={32} y2={62.62} xlinkHref="#a" />
			</defs>
			<g data-name="Layer 1">
				<path
					d="M61.56 55.92a5.64 5.64 0 01-5.64 5.64H8.08a5.64 5.64 0 01-5.64-5.64V8.08a5.64 5.64 0 015.64-5.64h47.84a5.64 5.64 0 015.64 5.64v47.84zM57.43 0H6.57C2.94 0 0 2.94 0 6.57v50.86C0 61.06 2.94 64 6.57 64h50.86c3.63 0 6.57-2.94 6.57-6.57V6.57C64 2.94 61.06 0 57.43 0z"
					fill="url(#a)"
				/>
				<path
					d="M42.97 22.05c.77.09.8.72.84 1.3.17 2.71.7 5.31 2.08 7.69.85 1.48 1.99 2.69 3.38 3.65 1.93 1.35 3.95 1.17 5.58-.52 1.67-1.72 2.71-3.79 3.1-6.16.33-1.97.67-6.44.67-8.19V9c0-2-1.62-3.62-3.62-3.62H9.01C7.01 5.38 5.39 7 5.39 9v17c-.09 4.22 1 7.99 4.31 10.86 2.41 2.09 5.38 1.88 7.59-.46 1.68-1.78 2.35-4.01 2.8-6.32.21-1.09.18-2.24.31-3.35.06-.49.17-1.01.4-1.43.36-.65 1.15-.74 1.61-.16.34.42.66 1.01.66 1.52 0 1.41-.04 3.44-.29 4.82-.43 2.3-1.15 4.54-2.61 6.44-1.61 2.1-3.65 3.51-6.15 3.76-2.96.15-5.15-1.03-6.91-3.01-.68-.76-1.25-1.56-1.72-2.39v18.7c0 2 1.62 3.62 3.62 3.62H55c2 0 3.62-1.62 3.62-3.62V34.02c-.55.84-1.19 1.65-1.92 2.41-2.46 2.58-5.54 2.91-8.51.95-3.37-2.23-5.24-5.49-6.09-9.37-.19-.87-.26-2.36-.32-3.25-.03-.5.04-1.01.12-1.5.14-.81.56-1.28 1.07-1.22zm-4.43 23.04c-1.51 1.84-3.39 1.87-5.03.13-.09-.09-.2-.17-.36-.29-.2.33-.37.61-.55.9-1.1 1.68-2.85 2.05-4.51.92-2.08-1.41-3.09-5.03-2.75-7.53.03-.26.3-.7.62-.71.34-.01.58.42.71.7.15.32.1.72.15 1.08.2 1.5.79 2.82 1.88 3.88 1.04 1 1.84.84 2.46-.45.14-.29.26-.59.41-.87.65-1.21 1.68-1.38 2.69-.45.23.22.43.47.65.71.71.77 1.25.77 1.92-.06.88-1.1 1.16-2.41 1.23-3.79.02-.43-.02-.91.15-1.28.15-.32.53-.71.85-.74.31-.03.74.27.99.54.19.2.28.59.29.89.06 2.15-.41 4.74-1.8 6.43z"
					fill="url(#b)"
				/>
				<text transform="translate(81.75 42.3)" fill="#ebc6d7" fontSize="24px">
					<tspan
						x={0}
						y={0}
						fontFamily="AzoSans-Medium,'Azo Sans'"
						fontWeight={500}
						letterSpacing=".01em"
					>
						{"UWU"}
					</tspan>
					<tspan
						x={60.98}
						y={0}
						fontFamily="AzoSans-Light,'Azo Sans'"
						fontWeight={300}
						letterSpacing={0}
					>
						{"GAMES"}
					</tspan>
				</text>
			</g>
		</svg>
	);
};
