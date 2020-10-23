import Typed from "typed.js";
import {useEffect} from "react";

export interface Props {
  text: string[];
}
export default function LandingBannerTyped({text}: Props): JSX.Element {
  useEffect(() => {
    const options = {
      strings: text,
      loop: true,
      backSpeed: 30,
      backDelay: 3000,
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
