"use client";
import { motion, useInView } from "motion/react";
import Image from "next/image";
import { useRef } from "react";

interface IFunctionsCardProps {
  imagePath: string;
  title: string;
  subtitle: string;
}

const FunctionsCard = ({ imagePath, title, subtitle }: IFunctionsCardProps): React.JSX.Element => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="bg-surface-card  w-full flex flex-col  rounded-2xl justify-start overflow-hidden">
      <div className="mx-auto w-full flex justify-center items-center rounded-t-2xl overflow-hidden">
        <Image
          src={imagePath}
          alt={title}
          width={400}
          height={400}
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAIAAAACUFjqAAAAFUlEQVR4nGO8NnMFA27AhEduBEsDAJFKAitn4//aAAAAAElFTkSuQmCC"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
          className="object-cover w-full h-full"
          priority
        />
      </div>
      <div className="p-4  space-y-4 ">
        <motion.h1
          ref={ref}
          initial={{ x: "-100%" }}
          animate={{ x: isInView ? "0%" : "-100%" }}
          transition={{ type: "spring", stiffness: 60, damping: 25, duration: 1.5 }}
          className="text-base md:text-xl  font-bold tracking-tight text-secondary-theme h-5 md:h-10 "
        >
          {title}
        </motion.h1>
        <motion.p
          ref={ref}
          initial={{ x: "-100%" }}
          animate={{ x: isInView ? "0%" : "-100%" }}
          transition={{ type: "spring", stiffness: 50, damping: 25, duration: 2.0 }}
          className="text-lg text-secondary-theme h-full "
        >
          {subtitle}
        </motion.p>
      </div>
    </div>
  );
};

export default FunctionsCard;
