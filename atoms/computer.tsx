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
				right:0px@sm;
				w:${1268 * 0.26}@<sm
				h:${1030 * 0.26}@<sm
				w:${1268 * 0.36}@<md
				h:${1030 * 0.36}@<md
				w:${1268 * 0.46}@<lg
				h:${1030 * 0.46}@<lg
				w:${1268 * 0.56}@<xl
				h:${1030 * 0.56}@<xl
				w:${1268 * 0.8}
				h:${1030 * 0.8}
                z-index:0
            `}
		/>
	);
};
