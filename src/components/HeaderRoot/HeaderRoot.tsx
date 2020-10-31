import {Menu} from "@headlessui/react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import {useRouter} from "next/router";

import useAuth from "@/hooks/useAuth";

const HeaderDemoMenu = dynamic(() => import("@/components/HeaderDemoMenu"), {
  ssr: false,
});

const HeaderMobileMenu = dynamic(
  () => import("@/components/HeaderMobileMenu"),
  {
    ssr: false,
  },
);

const HeaderProfileMenu = dynamic(
  () => import("@/components/HeaderProfileMenu"),
  {
    ssr: false,
  },
);

export default function HeaderRoot(): JSX.Element {
  const {isLoggedIn} = useAuth();
  const {pathname} = useRouter();

  return (
    <div className="relative z-20">
      <div className="px-4 mx-auto sm:px-6">
        <div className="flex items-center justify-between py-6 border-b-2 border-gray-100 md:justify-start md:space-x-10">
          <div className="lg:w-0 lg:flex-1">
            <Link href="/">
              <a className="inline-block">
                <Image
                  src="/assets/logo.png"
                  priority
                  unsized
                  alt="Logo"
                  className="w-auto h-12 sm:h-10"
                />
              </a>
            </Link>
          </div>
          {(!isLoggedIn ||
            pathname.startsWith("/") ||
            pathname.startsWith("/home") ||
            pathname.startsWith("/landing") ||
            pathname.startsWith("/pricing") ||
            pathname.startsWith("/demo")) && (
            <>
              <div className="-my-2 -mr-2 md:hidden">
                <Menu>
                  {({open}) => (
                    <>
                      <Menu.Button className="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500">
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
                      </Menu.Button>
                      <span className="z-30 ">
                        <HeaderMobileMenu open={open} />
                      </span>
                    </>
                  )}
                </Menu>
              </div>
              <nav className="hidden md:flex">
                <Menu>
                  {({open}) => (
                    <>
                      <Menu.Button className="inline-flex items-center space-x-1 text-base font-medium leading-6 text-gray-600 group">
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
            </>
          )}
          <div className="items-center justify-end hidden space-x-8 md:flex md:flex-1 lg:w-0">
            {isLoggedIn && (
              <div className="relative ml-3">
                <Menu>
                  {({open}) => (
                    <>
                      <Menu.Button
                        className="flex text-sm transition duration-150 ease-in-out border-2 border-transparent rounded-full focus:outline-none focus:border-white"
                        aria-label="Profile menu"
                        aria-haspopup="true"
                      >
                        <Image
                          src="/assets/logo.png"
                          priority
                          unsized
                          alt="Profile"
                          className="w-8 h-8 rounded-full"
                        />
                      </Menu.Button>
                      <span className="z-30 ">
                        <HeaderProfileMenu open={open} />
                      </span>
                    </>
                  )}
                </Menu>
              </div>
            )}
            {!isLoggedIn && (
              <>
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
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
