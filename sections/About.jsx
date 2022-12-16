'use client';

import ToolsTab from '../components/ToolsTabs';
import { tools } from '../constants';
import styles from '../styles';

const About = () => (
  <section className={`-mt-2 dark:bg-gray-900 dark:text-white ${styles.yPaddings} flex flex-col items-center justify-center min-h-[100vh] `}>
    <h2>Experience and Tools</h2>
    <div className={`${styles.innerWidth} flex flex-wrap px-2 gap-3 justify-center items-center`}>
      {
        tools.map((tool, index) => (
          <ToolsTab {...tool} key={index} index={index} />
        ))
      }
    </div>
  </section>
);

export default About;
