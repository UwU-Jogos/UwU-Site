import $ from "@master/literal";
import Image from "next/image";

export const Computer = () => {
	return (
		<Image
			src="/computer.png"
			alt="computer"
			width={1268}
			height={1030}
			className={$`
                abs
                bottom:0;
                right:6%;
				width:900 / 2;
				height:745 / 2;
                z-index:0
            `}
		/>
	);
};
