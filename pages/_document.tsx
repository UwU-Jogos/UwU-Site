import { Colors } from "@/utils/theme";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="en">
			<Head />
			<body className={`h:100vh w:100% bg:${Colors.Bg} py:40 px:20%`}>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
