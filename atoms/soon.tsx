import { Colors } from "@/utils/theme";
import { TypeAnimation } from "react-type-animation";

export const Soon = () => {
	return (
		<TypeAnimation
			className={`f:128 f:${Colors.Primary} f:bold`}
			sequence={["SOON", 500, "SOON.", 500, "SOON..", 500, "SOON...", 500]}
			wrapper="h1"
			cursor={false}
			repeat={Infinity}
			style={{ fontFamily: "Open Sans" }}
		/>
	);
};