import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import { Barlow, Barlow_Condensed, Bellefair } from "@next/font/google";

const barlow = Barlow({
  weight: "400",
  subsets: ["latin"],
});

const barlowCondensed = Barlow_Condensed({
  weight: "400",
  subsets: ["latin"],
});

const bellefair = Bellefair({
  weight: '400',
  subsets: ['latin']
})

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${barlow.style.fontFamily};
        }

        h1, h2, h3, h4, .subheading1, .btn-number {
          font-family: ${bellefair.style.fontFamily}
        }

        .heading5, .subheading2, .nav-text {
          font-family: ${barlowCondensed.style.fontFamily}
        }
      `}</style>

      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
