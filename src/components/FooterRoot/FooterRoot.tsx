export default function FooterRoot(): JSX.Element {
  return (
    <div className="pt-10">
      <div className="flex px-3 pt-5 pb-5 text-gray-600 border-t-2 border-gray-100">
        <div className="mt-2">
          Sentrei Inc.&copy; Copyright 2020. All Rights Reserved. v
          {process.env.SENTREI_VERSION}
        </div>
      </div>
    </div>
  );
}
