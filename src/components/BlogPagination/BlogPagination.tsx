import clsx from "clsx";

export interface Props {
  current: number;
  total: number;
}

export function PaginationNumber({
  num,
  border = false,
}: {
  num: number;
  // eslint-disable-next-line react/require-default-props
  border?: boolean;
}): JSX.Element {
  return (
    <a
      className={clsx(
        "items-center justify-center hidden w-8 leading-5 transition duration-150 ease-in border-t-2 border-transparent cursor-pointer md:flex",
        {
          "border-pink-600": border,
        },
      )}
    >
      {num !== 0 ? num : "..."}
    </a>
  );
}

export default function BlogPagination({current, total}: Props): JSX.Element {
  return (
    <div className="flex flex-col items-center my-12">
      <div className="flex text-gray-700">
        {current !== 1 && (
          <div className="flex items-center justify-center w-8 h-8 mr-1 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4 feather feather-chevron-left"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </div>
        )}
        <div className="flex h-8 font-medium">
          <PaginationNumber border={current === 1} num={1} />
          {current > 3 && <PaginationNumber num={0} />}
          {current === total && total > 3 && (
            <PaginationNumber num={current - 2} />
          )}
          {current > 2 && <PaginationNumber num={current - 1} />}
          {current !== 1 && current !== total && (
            <PaginationNumber border num={current} />
          )}
          {current < total - 1 && <PaginationNumber num={current + 1} />}
          {current === 1 && total > 3 && <PaginationNumber num={current + 2} />}
          {current < total - 2 && <PaginationNumber num={0} />}
          <PaginationNumber border={current === total} num={total} />
        </div>
        {current !== total && (
          <div className="flex items-center justify-center w-8 h-8 ml-1 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4 feather feather-chevron-right"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
}
