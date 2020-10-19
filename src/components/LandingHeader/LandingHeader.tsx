import Link from "next/link";

export default function LandingHeader(): JSX.Element {
  return (
    <div className="relative bg-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6">
        <div className="flex items-center justify-between py-6 border-b-2 border-gray-100 md:justify-start md:space-x-10">
          <div className="lg:w-0 lg:flex-1">
            <Link href="/">
              <a href="#" className="flex">
                <img
                  className="w-auto h-12 sm:h-10"
                  src="/images/logo.png"
                  height="300"
                  width="300"
                  alt="Logo"
                />
              </a>
            </Link>
          </div>
          <nav className="hidden space-x-10 md:flex">
            <Link href="/demo">
              <a className="text-base font-medium leading-6 text-gray-500 transition duration-150 ease-in-out hover:text-gray-900 focus:outline-none focus:text-gray-900">
                Demo
              </a>
            </Link>
            <Link href="/pricing">
              <a className="text-base font-medium leading-6 text-gray-500 transition duration-150 ease-in-out hover:text-gray-900 focus:outline-none focus:text-gray-900">
                Pricing
              </a>
            </Link>
          </nav>
          <div className="items-center justify-end hidden space-x-8 md:flex md:flex-1 lg:w-0">
            {/*  eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a
              href="#"
              className="text-base font-medium leading-6 text-gray-500 whitespace-no-wrap hover:text-gray-900 focus:outline-none focus:text-gray-900"
            >
              Sign in
            </a>
            <span className="inline-flex rounded-md shadow-sm">
              {/*  eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a
                href="#"
                className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap transition duration-150 ease-in-out bg-pink-400 border border-transparent rounded-md hover:bg-pink-500 focus:outline-none focus:border-pink-800 focus:shadow-outline-pink active:bg-pink-700"
              >
                Sign up
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
