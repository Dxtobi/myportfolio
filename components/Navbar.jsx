'use client';

import { motion } from 'framer-motion';
import { userData } from '../constants';

import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = ({ setMood }) => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative my_glass_morphism bg-white dark:bg-gray-900 text-gray-800 dark:text-white`}
  >
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
      <button onClick={setMood} type="button" className=" py-1 px-3 rounded-full my_glass_morphism text-white bg-blue-500 ">
        Theme
      </button>
      <h2 className="font-extrabold md:text-[14px] text-[16px] lg:text-[24px] leading-[30px]  uppercase">{userData.headerName}</h2>
    </div>
  </motion.nav>
);

export default Navbar;
