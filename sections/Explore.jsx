'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ExploreCard, TitleText, TypingText } from '../components';
import styles from '../styles';
import { staggerContainer } from '../utils/motion';
import { exploreWorlds } from '../constants';

const Explore = () => {
  const [active, setActive] = useState('world-1');

  return (
    <section className={`${styles.paddings} -mt-1 dark:bg-gray-900 dark:text-white text-gray-800`} id="explore ">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="Projects" textStyles="text-center text-[24px]" />
        <TitleText textStyles="text-center" title={<>Some of my resent projects</>} />
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {exploreWorlds.map((world, index) => (
            <ExploreCard
              key={index}
              {...world}
              active={active}
              handleClick={setActive}
              index={index + 1}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Explore;
