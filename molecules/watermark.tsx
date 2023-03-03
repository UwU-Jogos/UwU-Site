import { sleep } from "@/utils/util";
import React, { useState } from "react";

import { OwoIcon } from "../atoms/owoIcon";
import { UwuIcon } from "../atoms/uwuIcon";

export type WatermarkProps = {};

export const Watermark = (_props: WatermarkProps) => {
	const [isHovered, setIsHovered] = useState(false);
	const [isAnimated, setIsAnimated] = useState(false);

	const handleHover = () => {
		if (isAnimated) return;

		setIsHovered(true);
	};
	const handleLeave = () => {
		if (isAnimated) return;

		setIsHovered(false);
	};

	const startAnimate = async () => {
		setIsAnimated(true);
		setIsHovered(true);

		if (isAnimated) return;

		await sleep(1500);
		setIsHovered(false);
		await sleep(150);
		setIsHovered(true);
		await sleep(150);
		setIsHovered(false);
		await sleep(200);
		setIsHovered(true);
		await sleep(2000);
		setIsHovered(false);
		setIsAnimated(false);
	};

	return (
		<div
			onMouseEnter={handleHover}
			onMouseLeave={handleLeave}
			onClick={startAnimate}
		>
			{isHovered ? <OwoIcon /> : <UwuIcon />}
		</div>
	);
};
