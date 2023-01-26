import { Colors } from "@/utils/theme";
import { TypeAnimation } from "react-type-animation";

export const Soon = () => {
	return (
		<TypeAnimation
			className={`f:128 f:${Colors.Primary} font-family:${'Open Sans'}`}
			sequence={["SOON", 1000, "SOON.", 1000, "SOON..", 1000, "SOON...", 1000]}
			wrapper="h1"
			cursor={false}
			repeat={Infinity}
		/>
	);
};