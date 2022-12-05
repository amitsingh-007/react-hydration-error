import "../styles/globals.css";
import type { AppProps } from "next/app";
import logReactHydrationError from "../scripts/logReactHydrationError";

//Call this before hydration so that monkey patch happens before actual hydration error
logReactHydrationError();

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
