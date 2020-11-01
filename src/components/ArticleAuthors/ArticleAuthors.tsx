import {Listbox, Transition} from "@headlessui/react";
import clsx from "clsx";

import Profile from "@/types/Profile";

export interface Props {
  authors: Profile.Fields[];
}

// TODO: Convert to next/image
export function ArticleAuthorsImage({
  src,
  name,
  rear,
}: {
  src: string;
  name: string;
  rear: boolean;
}): JSX.Element {
  return (
    <img
      className={clsx(
        "inline-block w-6 h-6 md:w-8 md:h-8 text-white rounded-full shadow-solid",
        !rear && "-ml-1",
      )}
      src={src}
      alt={`Author ${name}`}
    />
  );
}

export default function ArticleAuthors({authors}: Props): JSX.Element {
  return (
    <div className="flex">
      <Listbox as="div" className="space-y-1" value="" onChange={() => {}}>
        {({open}) => (
          <>
            <div className="relative">
              <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md cursor-default focus:outline-none focus:shadow-outline-pink focus:border-pink-300 sm:text-sm sm:leading-5">
                {authors.map((author, index) => {
                  return (
                    <ArticleAuthorsImage
                      key={author.namespaceId}
                      src={author.image as string}
                      name={author.name}
                      rear={index === 0}
                    />
                  );
                })}
                <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      d="M7 7l3-3 3 3m0 6l-3 3-3-3"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Listbox.Button>
              <Transition
                show={open}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                className="absolute w-56 mt-1 bg-white rounded-md shadow-lg"
              >
                <Listbox.Options
                  static
                  className="py-1 overflow-auto text-base leading-6 rounded-md shadow-xs max-h-60 focus:outline-none sm:text-sm sm:leading-5"
                >
                  {authors.map(author => (
                    <Listbox.Option
                      key={author.namespaceId}
                      value={author.name}
                    >
                      {({selected, active}) => (
                        <a>
                          <div
                            className={`${
                              active
                                ? "text-white bg-pink-400"
                                : "text-gray-900"
                            } cursor-default select-none relative py-2 pl-3 pr-4`}
                          >
                            <div className="flex items-center space-x-3">
                              <ArticleAuthorsImage
                                key={author.namespaceId}
                                src={author.image as string}
                                name={author.name}
                                rear={false}
                              />
                              <span
                                className={`${
                                  selected ? "font-semibold" : "font-normal"
                                } block truncate`}
                              >
                                {author.name}
                              </span>
                            </div>
                          </div>
                        </a>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </>
        )}
      </Listbox>
    </div>
  );
}
