import clsx from "clsx";

import Pulse from "@/styles/pulse.module.css";

export default function LandingGlobe(): JSX.Element {
  return (
    <section className="py-16">
      <div className="max-w-6xl px-4 mx-auto sm:px-6">
        <div className="lg:text-center">
          <p className="text-base font-semibold leading-6 tracking-wide text-pink-600 uppercase">
            Best reading experience
          </p>
          <h3 className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
            Delight every customer.
          </h3>
          <p className="max-w-2xl mt-4 text-xl leading-7 text-gray-500 lg:mx-auto">
            We never put forward anythiing that gets in the way of a great
            reading experience for your customers. Let the world know of your
            content.
          </p>
        </div>
        <div className="flex flex-col items-center pt-12 md:pt-16">
          <div className="relative">
            <svg
              className="absolute inset-0 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none left-1/2 top-1/2"
              width="800"
              height="800"
              viewBox="0 0 800 800"
              style={{maxWidth: "200%"}}
              xmlns="http://www.w3.org/2000/svg"
            >
              <g className="text-gray-400 opacity-75 fill-current">
                <circle className={Pulse.pulse} cx="400" cy="400" r="200" />
                <circle
                  className={clsx(Pulse.pulse, Pulse.pulse1)}
                  cx="400"
                  cy="400"
                  r="200"
                />
                <circle
                  className={clsx(Pulse.pulse, Pulse.pulse2)}
                  cx="400"
                  cy="400"
                  r="200"
                />
              </g>
            </svg>
            <img
              className="relative rounded-full shadow-xl"
              src="/assets/planet.png"
              width="400"
              height="400"
              alt="Planet"
            />
            <svg
              className="absolute max-w-full"
              width="48"
              height="48"
              viewBox="0 0 48 48"
              style={{left: "50%", top: "45%", width: "12%"}}
              xmlns="http://www.w3.org/2000/svg"
            >
              <g className="text-pink-600 fill-current">
                <circle
                  className={clsx(Pulse.pulse, Pulse.pulseMini, Pulse.pulse1)}
                  cx="24"
                  cy="24"
                  r="8"
                />
                <circle
                  className={clsx(Pulse.pulse, Pulse.pulseMini, Pulse.pulse2)}
                  cx="24"
                  cy="24"
                  r="8"
                />
                <circle cx="24" cy="24" r="8" />
              </g>
            </svg>
            <svg
              className="absolute max-w-full"
              width="48"
              height="48"
              viewBox="0 0 48 48"
              style={{left: "46%", top: "19%", width: "12%"}}
              xmlns="http://www.w3.org/2000/svg"
            >
              <g className="text-pink-600 fill-current">
                <circle
                  className={clsx(Pulse.pulse, Pulse.pulseMini)}
                  cx="24"
                  cy="24"
                  r="8"
                />
                <circle
                  className={clsx(Pulse.pulse, Pulse.pulseMini, Pulse.pulse2)}
                  cx="24"
                  cy="24"
                  r="8"
                />
                <circle cx="24" cy="24" r="8" />
              </g>
            </svg>
            <svg
              className="absolute top-0 w-20 h-auto max-w-full rounded-full shadow-xl"
              viewBox="0 0 80 80"
              style={{width: "20%", left: "6%"}}
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                className="text-gray-800 fill-current"
                cx="40"
                cy="40"
                r="40"
              />
              <path
                className="text-white stroke-current"
                d="M30.19 41.221c7.074 3.299 12.957-4.7 20.03-1.401l1.769.824-1.419-3.883M43.988 50.877l3.887-1.41-1.769-.824c-2.19-1.021-3.475-2.651-4.42-4.512M38.724 36.91c-.944-1.86-2.23-3.49-4.42-4.512"
                strokeLinecap="square"
                strokeWidth="2"
              />
            </svg>
            <svg
              className="absolute w-16 h-auto max-w-full rounded-full shadow-xl"
              viewBox="0 0 64 64"
              style={{left: "-27%", top: "32%", width: "16%"}}
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                className="text-pink-600 fill-current"
                cx="32"
                cy="32"
                r="32"
              />
              <path
                className="text-white stroke-current"
                d="M20.733 31.416l18.127-8.452M43.039 31.926L24.913 40.38"
                strokeWidth="2"
                fill="none"
              />
              <path
                className="text-white stroke-current"
                strokeLinecap="square"
                d="M32.238 20.595l6.622 2.369-2.442 6.594M31.534 42.747l-6.621-2.368 2.442-6.595"
                strokeWidth="2"
                fill="none"
              />
            </svg>
            <svg
              className="absolute w-16 h-auto max-w-full rounded-full shadow-xl"
              viewBox="0 0 64 64"
              style={{right: "-16%", top: "55%", width: "16%"}}
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                className="text-gray-100 fill-current"
                fill="#FBFBFB"
                cx="32"
                cy="32"
                r="32"
              />
              <path
                className="text-pink-400 fill-current"
                d="M37.11 32.44l-1.69 4.646-8.458-3.078.676-1.859-4.773 1.42 2.744 4.156.677-1.858 9.396 3.42a.994.994 0 001.278-.587l2.03-5.576-1.88-.684zM27.037 30.878l1.691-4.646 8.457 3.078-.676 1.858 4.773-1.42-2.744-4.155-.676 1.858-9.397-3.42a.994.994 0 00-1.278.587l-2.03 5.576 1.88.684z"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
