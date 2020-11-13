export default function UpgradeHero(): JSX.Element {
  return (
    <div className="relative overflow-hidden ">
      <div className="flex justify-center max-w-screen-xl mx-auto">
        <div className="relative z-10 lg:max-w-2xl lg:w-full">
          <main className="max-w-screen-xl px-4 mx-auto mt-10 sm:mt-8 sm:px-6 md:mt-12 lg:mt-16 lg:px-8 xl:mt-20">
            <div className="text-center">
              <h3 className="text-4xl font-extrabold leading-10 tracking-tight text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
                Choose your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 ">
                  plan
                </span>
              </h3>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
