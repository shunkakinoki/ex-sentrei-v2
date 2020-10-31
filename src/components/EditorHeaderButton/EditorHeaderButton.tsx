import clsx from "clsx";

export interface Props {
  switchValue: boolean;
}

export default function EditorHeaderButton({switchValue}: Props): JSX.Element {
  return (
    <span className="inline-flex rounded-md shadow-sm">
      <a
        className={clsx(
          "inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 whitespace-no-wrap transition duration-150 ease-in-out rounded-md focus:outline-none focus:border-pink-800 focus:shadow-outline-pink active:bg-pink-700",
          switchValue &&
            "text-white bg-pink-400 border border-transparent hover:bg-pink-500 ",
          !switchValue &&
            "text-pink-400 bg-white border hover:bg-pink-50 border-pink-300",
        )}
      >
        {switchValue && "Publish"}
        {!switchValue && "Save"}
      </a>
    </span>
  );
}
