export default function LandingDemo(): JSX.Element {
  return (
    <div>
      <div className="pb-3 mx-2 mt-6 mb-5 shadow-2xl">
        <div className="flex px-5 pt-4 pb-4 bg-gray-300 rounded-t">
          <span className="w-3 h-3 bg-red-500 rounded-full" />
          <span className="w-3 h-3 ml-2 bg-yellow-300 rounded-full" />
          <span className="w-3 h-3 ml-2 bg-green-500 rounded-full" />
        </div>
        <iframe
          className="w-full h-64 overflow-hidden md:h-96 lg:h-128"
          src="/demo"
          title="Demo"
        />
      </div>
    </div>
  );
}
