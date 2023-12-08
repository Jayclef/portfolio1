"use client";
import Image from "next/image";
import Link from "next/link";
import Logo from "../icons/trans.png";
import Logo2 from "../icons/jsoft.png";
import { LiaToggleOnSolid } from "react-icons/lia";
import { BsToggle2Off } from "react-icons/bs";
import { SiToggltrack } from "react-icons/si";
import { FaBars } from "react-icons/fa6";
import { useState } from "react";
import useColorMode from "../hooks/useColorMode";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [colorMode, setColorMode] = useColorMode();

  return (
    <header className="dark:bg-black py-6 md:px-16 px-6 border-b border-zinc-800 z-30">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link href="/">
          {colorMode === "light" ? (
            <Image src={Logo2} width={150} height={100} alt="logo" />
          ) : (
            <Image src={Logo} width={150} height={100} alt="logo" />
          )}
        </Link>
        <ul className="hidden md:flex items-center gap-x-8">
          <li>
            <Link
              href="/about"
              className="hover:text-purple-400 dark:hover:text-purple-400 dark:text-white duration-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className="hover:text-purple-400 dark:hover:text-purple-400 dark:text-white duration-300"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="hover:text-purple-400 dark:hover:text-purple-400 dark:text-white duration-300"
            >
              Contact Us
            </Link>
          </li>
          <button
            onClick={() =>
              setColorMode(colorMode === "light" ? "dark" : "light")
            }
          >
            {colorMode === "light" ? (
              <LiaToggleOnSolid size={30} />
            ) : (
              <BsToggle2Off size={30} color="purple" />
            )}
          </button>
        </ul>{" "}
        <div className="md:hidden flex gap-4 justify-between items-center">
          <button
            onClick={() =>
              setColorMode(colorMode === "light" ? "dark" : "light")
            }
          >
            {colorMode === "light" ? (
              <LiaToggleOnSolid size={30} />
            ) : (
              <SiToggltrack size={30} color="purple" />
            )}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white   focus:outline-none"
          >
            {colorMode === "light" ? (
              <FaBars size={30} color="black" />
            ) : (
              <FaBars size={30} color="white" />
            )}
            {/* <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg> */}
          </button>
        </div>
      </div>
      {isOpen && (
        <ul className="md:hidden bg-transpirent  py-2">
          <li>
            <Link
              href="/about"
              className="hover:text-purple-400 duration-300 block text-black dark:text-white px-4 py-2"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className="hover:text-purple-400  duration-300 block text-black dark:text-white px-4 py-2"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="hover:text-purple-400 duration-300 block text-black dark:text-white px-4 py-2"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      )}
    </header>
  );
}
