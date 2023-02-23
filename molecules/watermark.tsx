import React, { useState } from "react";

import { OwoIcon } from "../atoms/owoIcon";
import { UwuIcon } from "../atoms/uwuIcon";

export type WatermarkProps = {}

export const Watermark = (_props: WatermarkProps) => {
	const [isHovered, setIsHovered] = useState(false);

	const handleHover = () => setIsHovered(true);
	const handleLeave = () => setIsHovered(false);

	return (
		<div onMouseEnter={handleHover} onMouseLeave={handleLeave}>
			{isHovered ? <OwoIcon /> : <UwuIcon />}
		</div>
	);
};
