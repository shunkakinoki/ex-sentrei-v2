import {useSetRecoilState} from "recoil";

import {storySwitchAtom} from "@/hooks/useStory";

export default function SpaceHeroStorySwitch(): JSX.Element {
  const setStorySwitch = useSetRecoilState(storySwitchAtom);

  const handleClick = (value: boolean): void => {
    setStorySwitch(value);
  };

  return (
    <div className="flex-shrink-0 hidden px-8 py-3 m-3 ml-auto md:block">
      <button
        type="button"
        className="px-4 py-2 font-bold text-gray-800 bg-gray-300 border-r rounded-l hover:bg-gray-400"
        onClick={() => handleClick(true)}
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
            d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
          />
        </svg>
      </button>
      <button
        type="button"
        className="px-4 py-2 font-bold text-gray-800 bg-gray-300 rounded-r hover:bg-gray-400"
        onClick={() => handleClick(false)}
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
            d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
          />
        </svg>
      </button>
    </div>
  );
}
