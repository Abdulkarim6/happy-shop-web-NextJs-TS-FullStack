"use client";

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
  const path = usePathname(); //like: /categories/men
  

  useGSAP(() => {
    const titleSplit = SplitText.create(".titleClass", { type: "words, chars" });
    const subtitleSplit = SplitText.create(".subTitleClass", { type: "words, chars", });

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
    <div className={`flex flex-col items-start justify-center w-1/2 px-2 md:px-5`}>
      <h2 className="text-white font-bold titleClass text-2xl md:text-3xl lg:text-4xl">{title}</h2>
      <p className="text-white subTitleClass text-base md:text-lg lg:text-xl">{subTitle}</p>
    </div>
  );
};

export default BannerTitleComponent;
