"use client";

import pyramidImage from "../../../public/assets/pyramid.png"
import noodleImage from "../../../public/assets/noodle.png"
import springImage from "../../../public/assets/spring.png"
import starImage from "../../../public/assets/star.png"
import tubeImage from "../../../public/assets/tube.png"
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Script from "next/script";

export const ImageMotion = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section ref={sectionRef} className="relative justify-center items-center py-24 overflow-x-clip">
      <div className="container">
        <div className="relative justify-center items-center">
          <motion.img 
            src={starImage.src}
            alt="Star image"
            width={360}
            className="absolute -left-[50px] -top-[37px]"
            style={{
              translateY,
            }}
          />
          <motion.img 
            src={springImage.src}
            alt="Spring image"
            width={360}
            className="absolute -right-[31px] -top-[39px]"
            style={{
              translateY,
            }}
          />
        </div>
      </div>
    </section>
  );
};
