import Link from "next/link";
import Image from "next/image";

export default function LandingHeader(): JSX.Element {
  return (
    <div className="px-4 mx-auto sm:px-6">
      <div className="flex items-center justify-between py-6 border-b-2 border-gray-100 md:justify-start">
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
        <nav className="hidden space-x-10 md:flex">
          <Link href="/demo">
            <a className="text-base font-medium leading-6 text-gray-600 transition duration-150 ease-in-out hover:text-gray-900 focus:outline-none focus:text-gray-900">
              Demo
            </a>
          </Link>
          <Link href="/pricing">
            <a className="text-base font-medium leading-6 text-gray-600 transition duration-150 ease-in-out hover:text-gray-900 focus:outline-none focus:text-gray-900">
              Pricing
            </a>
          </Link>
          <Link href="/support">
            <a className="text-base font-medium leading-6 text-gray-600 transition duration-150 ease-in-out hover:text-gray-900 focus:outline-none focus:text-gray-900">
              Support
            </a>
          </Link>
        </nav>
        <div className="items-center justify-end hidden space-x-8 md:flex md:flex-1 lg:w-0">
          <Link href="/login">
            <a className="text-base font-medium leading-6 text-gray-600 whitespace-no-wrap hover:text-gray-900 focus:outline-none focus:text-gray-900">
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
  );
}
