export interface Props {
  type: "login" | "signup";
}

export default function AuthGoogleButton({type}: Props): JSX.Element {
  return (
    <div className="flex items-center justify-between py-2 md:py-3 md:justify-start">
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
    </div>
  );
}
