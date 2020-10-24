import {useEffect} from "react";
import Typed from "typed.js";

export interface Props {
  text: string[];
}

export default function LandingHeroTyped({text}: Props): JSX.Element {
  useEffect(() => {
    const options = {
      strings: text,
      loop: true,
      backSpeed: 30,
      backDelay: 1500,
      startDelay: 300,
      shuffle: true,
      typeSpeed: 90,
    };

    const typed = new Typed("#typed", options);

    return () => {
      typed.destroy();
    };
  }, [text]);

  return <span id="typed" />;
}
