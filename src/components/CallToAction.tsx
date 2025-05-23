"use client";

import emojiStar from "@/assets/images/emojistar.png";
import helixImage from "@/assets/images/helix2.png";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const CallToAction = () => {

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return <div ref={containerRef} className="bg-black text-white py-[72px] sm:py-24">
    <div className="container max-w-xl relative">
      <motion.div
        style={{
          translateY
        }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <Image src={helixImage} alt="helix star" className="absolute top-6 left-[calc(100%+36px)] hidden sm:inline" />
      </motion.div>
      <motion.div
        style={{
          translateY
        }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <Image src={emojiStar} alt="emoji star" className="absolute -top-[120px] right-[calc(100%+24px)] hidden sm:inline" />
      </motion.div>
      {/* <Image src={emojiStar} alt="emoji star" className="absolute -top-[120px] right-[calc(100%+24px)] hidden sm:inline" /> */}
      <h2 className="font-bold text-5xl sm:text-6xl tracking-tighter">Get instant access</h2>
      <p className="text-xl text-white/70 tracking-tighter">
        Celebrate the joy of accomplishment with an app designed to track your progress and motivate your efforts.
      </p>
      <form action="" className="mt-10 flex flex-col gap-2.5 max-w-sm mx-auto sm:flex-row">
        <input
          type="email"
          placeholder="your@email.com"
          className="h-12 bg-white/20 rounded-lg px-5 font-medium placeholder:text-[#9CA3AF] sm:flex-1" />
        <button className="bg-white text-black h-12 px-5 rounded-lg">
          Get access
        </button>
      </form>
    </div>
  </div>;
};
