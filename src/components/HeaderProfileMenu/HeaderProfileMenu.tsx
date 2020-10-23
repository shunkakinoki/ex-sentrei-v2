import {Transition} from "@headlessui/react";
import Link from "next/link";

export interface Props {
  open: boolean;
}

export default function HeaderProfileMenu({open}: Props): JSX.Element {
  return (
    <Transition
      show={open}
      enter="duration-200 ease-out"
      enterFrom="opacity-0 scale-95"
      enterTo="opacity-100 scale-100"
      leave="duration-100 ease-in"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-95"
    >
      <div className="absolute right-0 w-48 mt-2 origin-top-right rounded-md shadow-lg">
        <div
          className="py-1 bg-white rounded-md shadow-xs"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="user-menu"
        >
          <Link href="/profile">
            <a className="block px-4 py-2 text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100">
              Your Profile
            </a>
          </Link>
          <Link href="/settings">
            <a className="block px-4 py-2 text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100">
              Settings
            </a>
          </Link>
          <a
            href="#"
            className="block px-4 py-2 text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
          >
            Sign out
          </a>
        </div>
      </div>
    </Transition>
  );
}
