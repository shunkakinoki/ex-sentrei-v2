import {useEffect} from "react";
import Typed from "typed.js";

export interface Props {
  text: string[];
}

export default function LandingHeroTyped({text}: Props): JSX.Element {
  useEffect(() => {
    const options = {
      backDelay: 1500,
      backSpeed: 30,
      loop: true,
      shuffle: true,
      startDelay: 300,
      strings: text,
      typeSpeed: 90,
    };

    const typed = new Typed("#typed", options);

    return () => {
      typed.destroy();
    };
  }, [text]);

  return <span id="typed" />;
}
