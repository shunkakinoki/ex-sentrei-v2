import clsx from "clsx";
import Link from "next/link";

export interface Props {
  current: number;
  pathname: string;
  total: number;
}

function PaginationEllipsis(): JSX.Element {
  return (
    <a className="items-center justify-center hidden w-8 leading-5 transition duration-150 ease-in border-t-2 border-transparent md:flex">
      ...
    </a>
  );
}

export default function PaginationBase({
  current,
  total,
  pathname,
}: Props): JSX.Element {
  function PaginationNumber({
    num,
    border = false,
  }: {
    // eslint-disable-next-line react/require-default-props
    border?: boolean;
    num: number;
  }): JSX.Element {
    return (
      <Link
        href={
          // eslint-disable-next-line no-nested-ternary
          num !== 1
            ? `${pathname}/page/${num}`
            : pathname === ""
            ? "/"
            : `${pathname}`
        }
      >
        <a
          className={clsx(
            "items-center justify-center hidden w-8 leading-5 transition duration-150 ease-in border-t-2 border-transparent cursor-pointer md:flex hover:text-pink-400",
            {
              "border-pink-600 ": border,
            },
          )}
        >
          {num}
        </a>
      </Link>
    );
  }

  return (
    <div className="flex flex-col items-center my-12">
      <div className="flex text-gray-700">
        {current !== 1 && (
          <Link
            href={
              // eslint-disable-next-line no-nested-ternary
              current - 1 !== 1
                ? `${pathname}/page/${current - 1}`
                : pathname === ""
                ? "/"
                : `${pathname}`
            }
          >
            <a className="flex items-center justify-center w-8 h-8 mr-1 cursor-pointer hover:text-pink-300">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </a>
          </Link>
        )}
        <div className="flex h-8 font-medium">
          <PaginationNumber border={current === 1} num={1} />
          {current > 3 && <PaginationEllipsis />}
          {current === total && total > 3 && (
            <PaginationNumber num={current - 2} />
          )}
          {current > 2 && <PaginationNumber num={current - 1} />}
          {current !== 1 && current !== total && (
            <PaginationNumber border num={current} />
          )}
          {current < total - 1 && <PaginationNumber num={current + 1} />}
          {current === 1 && total > 3 && <PaginationNumber num={current + 2} />}
          {current < total - 2 && <PaginationEllipsis />}
          {current !== 1 && (
            <PaginationNumber border={current === total} num={total} />
          )}
        </div>
        {current !== total && (
          <Link href={`${pathname}/page/${current + 1}`}>
            <a className="flex items-center justify-center w-8 h-8 ml-1 cursor-pointer hover:text-pink-300">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </Link>
        )}
      </div>
    </div>
  );
}
