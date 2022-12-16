'use client';

import { motion } from 'framer-motion';
import styles from '../styles';

import { footerVariants } from '../utils/motion';
import { socials, userData } from '../constants/index';

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.paddings} py-8 relative  -mt-1`}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex items-center justify-between flex-wrap gap-5">
        <button onClick={() => window.location.replace(userData.twitter)} type="button" className="flex items-center rounded-[32px] gap-[12px] h-fit py-4 p-6 bg-[#25618b] text-white">
          <img src="/twitter.svg" alt="" className="w-[24px] h-[24px] object-contain" />
          <span className="font-normal text-[16px]">TWITTER </span>
        </button>
        <button onClick={() => window.location.replace(userData.github)} type="button" className="flex items-center rounded-[32px] gap-[12px] h-fit py-4 p-6 bg-[#25618b] text-white">
          <img src="/headset.svg" alt="" className="w-[24px] h-[24px] object-contain" />
          <span className="font-normal text-[16px]">GitHub </span>
        </button>
      </div>
      <div className="flex flex-row">
        <div className="mb-[50px] h-[2px] dark:bg-gray-600 bg-white opacity-10" />
        <div className=" flex items-center justify-between flex-wrap gap-4 ">
          <h4 className="font-extrabold text-[24px] ">
            {userData.name}
          </h4>
          <p className="font-normal text-[14px]  opacity-50">
            MADE WITH LOVE ;)
          </p>
          <div className="flex gap-4">
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
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
