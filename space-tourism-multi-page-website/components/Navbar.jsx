import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Logo from "../public/images/logo.svg";
import HamburgerMenu from "../public/images/hamburger.svg";
import Close from "../public/images/close.svg";
import { useRouter } from "next/router";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const router = useRouter();

  const openNavMobile = () => {
    setNavOpen(!navOpen);
  };

  const navLinks = [
    {
      link: "home",
      href: "/",
    },
    {
      link: "destination",
      href: "/destination",
    },
    {
      link: "crew",
      href: "/crew",
    },
    {
      link: "technology",
      href: "/technology",
    },
  ];
  return (
    <nav className="absolute flex z-[3] justify-between items-center sm:items-start p-6 sm:p-0 sm:h-24 lg:mt-10 w-full overflow-x-hidden">
      <Link href="/" className="sm:p-6 md:pl-14 lg:relative lg:z-[2]">
        <Image src={Logo} alt="logo" />
      </Link>

      <ul
        className={`fixed sm:static z-10 transition-all translate-x-full sm:translate-x-0 left-40 top-0 right-0 bottom-0 bg-[#FFFFFF0A] backdrop-blur-2xl px-8 sm:px-12 xl:px-32 pt-32 sm:pt-0 flex flex-col sm:flex-row sm:h-full sm:items-center gap-x-10 lg:gap-x-12 gap-y-5 uppercase text-white xl:after:block xl:after:w-3/5 xl:after:h-0.5 xl:after:bg-white xl:after:opacity-25 xl:after:absolute xl:after:-left-[55%] ${navOpen ? "-translate-x-0" : "" }`}>
        {navLinks.map((link, index) => {
          const isActive = router.asPath === (link.href === '/' ? '/' : link.href)
          return (
            <li key={index}>
              <Link href={link.href === "/" ? "/" : link.href} passHref className={`nav-text relative tracking-[2.7px] inline-flex gap-x-4 after:content-[''] after:h-0.5 after:inset-x-0 after:absolute after:bottom-0 sm:after:-bottom-[145%] hover:after:bg-white hover:after:opacity-50 ${isActive && "after:bg-white hover:after:opacity-100"}`} onClick={() => setNavOpen(!navOpen)}>
                <b className="w-4 sm:hidden lg:block">0{index}</b>
                <span>{link.link}</span>
              </Link>
            </li>
          )
        })}
      </ul>

      <button onClick={openNavMobile} className="relative z-[11] sm:hidden">
        {navOpen ? (
          <Image src={Close} alt="icon-close" />
        ) : (
          <Image src={HamburgerMenu} alt="hamburger-menu" />
        )}
      </button>
    </nav>
  );
};

// const NavigationLink = ({ href, text, router }) => {
//   const isActive = router.asPath ===
// }

export default Navbar;
