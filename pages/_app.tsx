import "@master/css";
import "@master/normal.css";
import "@fontsource/open-sans";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}
