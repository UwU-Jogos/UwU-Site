import Image from "next/image";
import { HTMLAttributes } from "react";

export type LogoProps = HTMLAttributes<SVGElement>;

export const Logo = (props: LogoProps) => {
	return (
		<Image
			src="/logo.png"
			alt="Logo"
			width={225}
			height={65}
		/>
	);
};
