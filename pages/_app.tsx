import "@master/css";
import "@master/normal.css";
import "@fontsource/open-sans"; // Defaults to weight 400.

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}
