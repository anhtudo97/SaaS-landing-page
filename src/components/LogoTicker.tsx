import acmeLogo from "../assets/images/acme.png";
import quantumLogo from "../assets/images/quantum.png";
import echoLogo from "../assets/images/echo.png";
import celestialLogo from "../assets/images/celestial.png";
import pulseLogo from "../assets/images/pulse.png";
import apexLogo from "../assets/images/apex.png";
import Image from "next/image";
import clsx from "clsx";

const images = [
  { src: acmeLogo, alt: "Acme Logo" },
  { src: quantumLogo, alt: "Quantum Logo" },
  { src: echoLogo, alt: "Echo Logo" },
  { src: celestialLogo, alt: "Celestial Logo" },
  { src: pulseLogo, alt: "Pulse Logo" },
  { src: apexLogo, alt: "Apex Logo" },
];

export const LogoTicker = () => {
  return <div className="bg-black text-white py-[72px] sm:py-24">
    <div className="container">
      <h2 className="text-xl text-center text-white/70">Trusted by the world&rsquo;s most innovative teams</h2>
      <div className={
        clsx(
          "overflow-hidden mt-9 relative",
          "before:content-[''] before:absolute before:h-full before:w-5 before:left-0 before:top-0 before:bg-[linear-gradient(to_right,#000,rgb(0,0,0,0))]",
          "after:content-[''] after:absolute after:h-full after:w-5 after:right-0 after:top-0 after:bg-[linear-gradient(to_left,#000,rgb(0,0,0,0))]"
        )
      }>
        <div className="flex gap-16">
          {
            images.map(({ alt, src }) => {
              return (
                <Image
                  key={`${alt}`}
                  src={src}
                  alt={alt}
                  className="flex-none h-8 w-auto"
                />
              );
            })
          }
        </div>
      </div>
    </div>
  </div>;
};
