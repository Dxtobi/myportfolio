'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { slideIn, staggerContainer, textVariant, fadeIn } from '../utils/motion';
import { socials, userData } from '../constants/index';

const Hero = () => (
  <section className={`${styles.yPaddings} dark:text-white text-gray-800 dark:bg-gray-900   bg-slate-200 min-h-[105vh]`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col items-center `}
    >
      <div className="flex justify-center items-center flex-col relative z-10">
        <motion.h1
          variants={textVariant(1.1)}
          className={styles.heroHeading}
        >
          {userData.headerName}
        </motion.h1>
        <motion.div variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="flex flex-row justify-center items-center text-[16px]"
        >
          <TypingText title={userData.whatIDo} textStyles="text-center mb-4" />
        </motion.div>
        <motion.div variants={slideIn('up', 'tween', 0.6, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
          className="flex flex-row justify-center items-center text-[16px]"
        >
          <p className="font-bold p-7 mb-4 text-center">
            {userData.description}
          </p>
        </motion.div>
      </div>
      <div className="flex gap-4 mb-6">
        {
              socials.map((s) => (
                <img
                  key={s.name}
                  alt={s.name}
                  src={s.url}
                  className="w-24px h-24px cursor-move object-contain"
                  // eslint-disable-next-line no-return-assign
                  onClick={() => window.location.replace(s.link)}
                />
              ))
            }
      </div>
      <motion.div
        variants={fadeIn('up', 'spring', 0.5, 1)}
        className="flex md:flex-row flex-col gap-4 justify-center items-center mb-4"
      >
        <motion.img
          variants={fadeIn('up', 'spring', 0.5, 1)}
          src="/people-01.png"
          alt=""
          className="w-[200px] h-[200px] md:w-[250px] md:h-[250px] object-contain"
        />
      </motion.div>
      <a href="#cv" className="text-center min-w-[200px] p-4 px-8 bg-blue-600 rounded-full text-white my-4 ">RESUME</a>
      <a href="#explore" className="text-center min-w-[200px] p-4 px-8 border-gray-800 dark:border-white dark:text-white border-2 rounded-full">
        MORE
      </a>
    </motion.div>
  </section>
);

export default Hero;
