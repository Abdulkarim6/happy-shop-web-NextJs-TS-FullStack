"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { TextPlugin } from "gsap/TextPlugin";
import { SplitText } from "gsap/SplitText";
import { usePathname } from "next/navigation";
gsap.registerPlugin(SplitText, TextPlugin);

type Props = {
  title: string;
  subTitle: string;
};

const BannerTitleComponent = ({ title, subTitle }: Props) => {
  const container = useRef<HTMLDivElement | null>(null);
  const p = usePathname(); //like: /categories/men
  

  useGSAP(() => {
    const titleSplit = SplitText.create(".title", { type: "words, chars" });
    const subtitleSplit = SplitText.create(".sub-title", {
      type: "words, chars",
    });

    gsap.from(titleSplit.chars, {
      duration: 1,
      yPercent: -500,
      autoAlpha: 0,
      stagger: 0.2,
    });

    gsap.from(subtitleSplit.words, {
      duration: 1,
      yPercent: -500,
      autoAlpha: 0,
      stagger: 0.2,
    });
  });

  return (
    <div className="flex items-center w-1/2 h-full ">

      <div className={`flex flex-col justify-center w-full h-full ${p.includes("kids")  ? "ps-[25%]" : "pr-[25%]" }`}>
        <h2 className="text-white font-bold title text-4xl">{title}</h2>

        <p className="text-white sub-title text-xl">{subTitle}</p>
      </div>

    </div>
  );
};

export default BannerTitleComponent;
