import { AppProps } from "next/app";
import "../styles/globals.css";
import Link from "next/link";

import Amplify from "aws-amplify";
import config from "../src/aws-exports";
Amplify.configure({
  ...config,
  ssr: true,
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <nav>
        <Link href="/">
          <span className="mx-4 cursor-pointer">Home</span>
        </Link>
        <Link href="/profile">
          <span className="mx-4 cursor-pointer">Profile</span>
        </Link>
        <Link href="/protected">
          <span className="mx-4 cursor-pointer">Protected route</span>
        </Link>
        <Link href="/protected-client-route">
          <span className="mx-4 cursor-pointer">Protected client route</span>
        </Link>
      </nav>
      <Component {...pageProps} />
    </div>
  );
}
