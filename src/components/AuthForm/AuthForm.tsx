/* eslint-disable jsx-a11y/label-has-associated-control */

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

import useAlert from "@/hooks/useAlert";

export interface Props {
  type: "login" | "signup" | "reset-password";
}

export default function AuthForm({type}: Props): JSX.Element {
  const {alert} = useAlert();

  const handleClick = (): void => {
    alert("info");
  };

  return (
    <div className="w-full max-w-md">
      <div>
        <Image
          src="/assets/logo.png"
          priority
          unsized
          alt="Logo"
          className="w-auto h-12 mx-auto sm:h-16 md:h-20"
        />
        <h3 className="mt-6 text-5xl font-extrabold text-center text-gray-600 md:text-6xl">
          {type === "login" && "Log in"}
          {type === "signup" && "Sign up now"}
          {type === "reset-password" && "Reset password"}
        </h3>
        <p className="mt-4 text-sm leading-5 text-center text-gray-600 sm:mt-5 md:mt-6">
          {type === "login" && "Welcome back."}
          {type === "signup" && "Completely free forever."}
          {type === "reset-password" && "We've got you covered."}
        </p>
      </div>
      <div className="mt-3 sm:mt-4 md:mt-5" />
      {type !== "reset-password" && (
        <div>
          <div className="flex items-center justify-between py-2 md:py-3 md:justify-start">
            <Link href="/demo/dashboard">
              <a className="relative flex justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-pink-500 transition duration-150 ease-in-out bg-transparent border border-transparent border-pink-300 rounded hover:bg-pink-100 focus:border-pink-300 group focus:outline-none focus:shadow-md ">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg
                    className="w-5 h-5 text-pink-500 transition duration-150 ease-in-out group-hover:text-pink-400"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M17.788 5.108a9 9 0 1 0 3.212 6.892h-8" />
                  </svg>
                </span>
                {type === "login" && "Login with Google"}
                {type === "signup" && "Sign up with Google"}
              </a>
            </Link>
          </div>
          <div className="flex items-center">
            <div className="flex-grow w-full m-2 border-t border-gray-300" />
            <div className="flex-shrink px-4 py-1 m-2 text-center text-gray-500 ">
              or
            </div>
            <div className="flex-grow w-full m-2 border-t border-gray-300" />
          </div>
        </div>
      )}
      <form className="py-2 mt-2" action="#" method="POST">
        <input type="hidden" name="remember" value="true" />
        <div className="rounded-md shadow-sm">
          <div>
            <input
              aria-label="Email address"
              name="email"
              type="email"
              required
              className={clsx(
                "relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none focus:outline-none focus:shadow-outline-pink focus:border-pink-300 focus:z-10 sm:text-sm sm:leading-5",
                type !== "reset-password" && "rounded-t-md",
                type === "reset-password" && "rounded-md",
              )}
              placeholder="Email address"
            />
          </div>
          {type !== "reset-password" && (
            <div className="-mt-px">
              <input
                aria-label="Password"
                name="password"
                type="password"
                required
                className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-b-md focus:outline-none focus:shadow-outline-pink focus:border-pink-300 focus:z-10 sm:text-sm sm:leading-5"
                placeholder="Password"
              />
            </div>
          )}
        </div>
        <div className="flex items-center justify-between mt-6">
          <div className="flex items-center">
            {type !== "reset-password" && (
              <>
                <input
                  onClick={handleClick}
                  id="remember_me"
                  type="checkbox"
                  className="w-4 h-4 text-pink-600 transition duration-150 ease-in-out form-checkbox"
                />
                <label
                  htmlFor="remember_me"
                  className="block ml-2 text-sm leading-5 text-gray-900"
                >
                  Remember me
                </label>
              </>
            )}
          </div>
          <div className="text-sm leading-5">
            <Link href={type === "login" ? "/signup" : "/login"}>
              <a className="font-normal">
                {type === "login" && "Don't have an account? "}
                {type === "signup" && "Already have an account?"}
                {type === "reset-password" && "Remembered password?"}
                {type === "login" && (
                  <span className="text-pink-500 hover:underline">
                    Register
                  </span>
                )}
              </a>
            </Link>
          </div>
        </div>
        <div className="mt-6">
          <Link href="/demo/dashboard">
            <a className="relative flex justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-pink-400 border border-transparent rounded-md group focus:outline-none focus:border-pink-500 focus:shadow-md active:text-pink-200">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg
                  className="w-6 h-6 transition duration-150 ease-in-out "
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </span>
              {type === "login" && "Login"}
              {type === "signup" && "Signup"}
              {type === "reset-password" && "Reset password"}
            </a>
          </Link>
        </div>
        <div className="text-sm leading-5 text-center">
          {type === "login" && (
            <div className="flex items-center justify-start mt-3 md:mt-4">
              <Link href="/reset-password">
                <a className="font-normal transition duration-150 ease-in-out hover:text-pink-500 focus:outline-none focus:underline">
                  Forgot password?
                </a>
              </Link>
            </div>
          )}
          {type === "signup" && (
            <div className="flex items-center justify-center mt-3 md:mt-4">
              <a className="text-xs font-normal text-center">
                By signing up you agree to our{" "}
                <Link href="/terms">
                  <a className="text-pink-400 transition duration-150 ease-in-out hover:text-pink-500 focus:outline-none focus:underline">
                    Terms and Conditions
                  </a>
                </Link>{" "}
                and{" "}
                <Link href="/privacy">
                  <a className="text-pink-400 transition duration-150 ease-in-out hover:text-pink-500 focus:outline-none focus:underline">
                    Privacy Policy
                  </a>
                </Link>
              </a>{" "}
            </div>
          )}
        </div>
      </form>
    </div>
  );
}
