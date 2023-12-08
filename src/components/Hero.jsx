import { motion } from "framer-motion";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

import { styles } from "../style";
import { ComputersCanvas } from "./canvas";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const data = [
  {
    id: 1,
    name: "GitHub",
    link: "https://github.com/nabilsk?tab=repositories",
    icon: faGithub,
  },
  {
    id: 2,
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/nabil-shaikh-9b09181b9/",
    icon: faLinkedin,
  },
];

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <ComputersCanvas />

      <div
        className={`absolute inset-0 top-[70px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div className="grid gap-1">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Nabil</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Welcome to my portfolio! I'm a passionate front-end developer
            dedicated to creating captivating web experiences using cutting-edge
            technologies.
          </p>

          <ul
            aria-label="Social media"
            className="grid grid-cols-2 gap-2 mr-auto"
          >
            {data.map((item) => {
              return (
                <li className="mr-5 text-xs" key={item.id}>
                  <a
                    target="_blank"
                    href={item.link}
                    className="block hover:text-slate-200"
                    rel="noreferrer"
                  >
                    <span className="sr-only">{item.name}</span>
                    <FontAwesomeIcon
                      aria-hidden="true"
                      fontSize={24}
                      icon={item.icon}
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
