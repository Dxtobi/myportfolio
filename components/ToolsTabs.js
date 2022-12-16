'use client';

import { motion } from 'framer-motion';

import { fadeIn } from '../utils/motion';

const ToolsTab = ({ imgUrl, title, index }) => (
  <motion.div
    variants={fadeIn('left', 'spring', index * 0.5, 0.75)}
    initial="hidden"
    whileInView="show"
    className={`${title} tab`}
  >
    <img
      src={imgUrl}
      alt={title}
      className="w-[30px] h-[30px] object-cover rounded-full"
    />
    <div className="ml-[3px] text-[24px] text-bold">
      {title}
    </div>
  </motion.div>
);

export default ToolsTab;
