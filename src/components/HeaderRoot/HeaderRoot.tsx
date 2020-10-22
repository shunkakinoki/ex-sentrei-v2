import Link from "next/link";
import Image from "next/image";
import HeaderDemoMenu from "@/components/HeaderDemoMenu";
import {Menu} from "@headlessui/react";

export default function HeaderRoot(): JSX.Element {
  return (
    <div className="relative bg-white">
      <div className="px-4 mx-auto sm:px-6">
        <div className="flex items-center justify-between py-6 border-b-2 border-gray-100 md:justify-start md:space-x-10">
          <div className="lg:w-0 lg:flex-1">
            <Link href="/">
              <a className="inline-block">
                <Image
                  src="/assets/logo.png"
                  unsized
                  alt="Logo"
                  className="w-auto h-12 sm:h-10"
                />
              </a>
            </Link>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <nav className="hidden md:flex">
            <Menu>
              {({open}) => (
                <>
                  <Menu.Button className="inline-flex items-center space-x-2 text-base font-medium leading-6 text-gray-600 group">
                    <span className="group-hover:text-pink-400">Demo</span>
                    <svg
                      className="w-5 h-5 text-gray-600 group-hover:text-pink-400 "
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Menu.Button>
                  <span className="z-30 ">
                    <HeaderDemoMenu open={open} />
                  </span>
                </>
              )}
            </Menu>
            <Link href="/pricing">
              <a className="mx-4 text-base font-medium leading-6 text-gray-600 transition duration-150 ease-in-out md:mx-6 hover:text-pink-400">
                Pricing
              </a>
            </Link>
            <Link href="/support">
              <a className="text-base font-medium leading-6 text-gray-600 transition duration-150 ease-in-out hover:text-pink-400">
                Support
              </a>
            </Link>
          </nav>
          <div className="items-center justify-end hidden space-x-8 md:flex md:flex-1 lg:w-0">
            <Link href="/login">
              <a className="text-base font-medium leading-6 text-gray-600 whitespace-no-wrap hover:text-pink-400">
                Log in
              </a>
            </Link>
            <span className="inline-flex rounded-md shadow-sm">
              <Link href="/signup">
                <a className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap transition duration-150 ease-in-out bg-pink-400 border border-transparent rounded-md hover:bg-pink-500 focus:outline-none focus:border-pink-800 focus:shadow-outline-pink active:bg-pink-700">
                  Sign up
                </a>
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
