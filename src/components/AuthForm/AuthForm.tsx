/* eslint-disable jsx-a11y/label-has-associated-control */

import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

export interface Props {
  type: "login" | "signup" | "reset-password";
}

export default function AuthForm({type}: Props): JSX.Element {
  return (
    <div className="w-full max-w-md">
      <div>
        <Image
          src="/assets/logo.png"
          priority
          unsized
          alt="Logo"
          className="w-auto h-12 mx-auto sm:h-18 md:h-24"
        />
        <h2 className="mt-6 text-3xl font-extrabold leading-9 text-center text-gray-900">
          {type === "login" && "Login to your account"}
          {type === "signup" && "Sign up now"}
          {type === "reset-password" && "Reset password"}
        </h2>
        <p className="mt-2 text-sm leading-5 text-center text-gray-600">
          {type === "login" && "Welcome back."}
          {type === "signup" && "Completely free forever."}
          {type === "reset-password" && "We've got you covered."}
        </p>
      </div>
      {type !== "reset-password" && (
        <div className="mt-2 md:mt-4">
          <div className="flex items-center justify-between py-2 md:py-3 md:justify-start">
            <Link href="/demo/dashboard">
              <a className="relative flex justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-pink-500 transition duration-150 ease-in-out bg-transparent border border-transparent border-pink-300 rounded hover:bg-pink-100 focus:border-pink-300 group focus:outline-none focus:shadow-md ">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg
                    className="w-5 h-5 text-indigo-500 transition duration-150 ease-in-out group-hover:text-indigo-400"
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
            <div className="flex-shrink px-4 py-2 m-2 text-center text-gray-500 ">
              or
            </div>
            <div className="flex-grow w-full m-2 border-t border-gray-300" />
          </div>
        </div>
      )}
      <form className="mt-2 md:mt-3 lg:mt-4" action="#" method="POST">
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
                  id="remember_me"
                  type="checkbox"
                  className="w-4 h-4 text-indigo-600 transition duration-150 ease-in-out form-checkbox"
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
            <Link href={type === "login" ? "/reset-password" : "/login"}>
              <a className="font-medium text-indigo-600 transition duration-150 ease-in-out hover:text-indigo-500 focus:outline-none focus:underline">
                {type === "login" && "Forgot password?"}
                {type === "signup" && "Already have an account?"}
                {type === "reset-password" && "Remembered password?"}
              </a>
            </Link>
          </div>
        </div>
        <div className="mt-6">
          <Link href="/demo/dashboard">
            <a className="relative flex justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-pink-400 border border-transparent rounded-md group focus:outline-none focus:border-pink-500 focus:shadow-md active:text-pink-200">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg
                  className="w-5 h-5 text-indigo-500 transition duration-150 ease-in-out group-hover:text-indigo-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              {type === "login" && "Login"}
              {type === "signup" && "Signup"}
              {type === "reset-password" && "Reset password"}
            </a>
          </Link>
        </div>
      </form>
    </div>
  );
}
