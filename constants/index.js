export const exploreWorlds = [
  {
    id: 'world-1',
    imgUrl: '/planet-01.png',
    title: 'E-commerce platforms',
    desc: 'An E-commerce website.. ',
  },
  {
    id: 'world-2',
    imgUrl: '/planet-02.png',
    title: 'Chat apps and Forums',
    desc: 'Create a Forums for your community',
  },
  {
    id: 'world-3',
    imgUrl: '/planet-03.png',
    title: 'FinTech',
    desc: 'Lets bring your FinTech UI to life',
  },
  {
    id: 'world-4',
    imgUrl: '/planet-04.png',
    title: 'Landing pages',
    desc: 'Let me build you a modern company landing page or portfolio',
  },
  {
    id: 'world-5',
    imgUrl: '/planet-05.png',
    title: 'And more',
    desc: 'what ever your idea is lets work hand to hand to bring it to life',
  },
];

export const startingFeatures = [
  'Find a world that suits you and you want to enter',
  'Enter the world by reading basmalah to be safe',
  'No need to beat around the bush, just stay on the gas and have fun',
];

export const newFeatures = [
  {
    imgUrl: '/vrpano.svg',
    title: 'A new world',
    subtitle:
        'we have the latest update with new world for you to try never mind',
  },
  {
    imgUrl: '/headset.svg',
    title: 'More realistic',
    subtitle:
        'In the latest update, your eyes are narrow, making the world more realistic than ever',
  },
];

export const insights = [
  {
    imgUrl: '/planet-06.png',
    title: 'The launch of the Metaverse makes Elon musk ketar-ketir',
    subtitle:
        'Magna etiam tempor orci eu lobortis elementum nibh tellus molestie. Diam maecenas sed enim ut sem viverra alique.',
  },
  {
    imgUrl: '/planet-07.png',
    title: '7 tips to easily master the madness of the Metaverse',
    subtitle:
        'Vitae congue eu consequat ac felis donec. Et magnis dis parturient montes nascetur ridiculus mus. Convallis tellus id interdum',
  },
  {
    imgUrl: '/planet-08.png',
    title: 'With one platform you can explore the whole world virtually',
    subtitle:
        'Quam quisque id diam vel quam elementum. Viverra nam libero justo laoreet sit amet cursus sit. Mauris in aliquam sem',
  },
];

export const socials = [
  {
    name: 'twitter',
    url: '/twitter.svg',
  },
  {
    name: 'linkedin',
    url: '/linkedin.svg',
  },
  {
    name: 'instagram',
    url: '/instagram.svg',
  },
  {
    name: 'facebook',
    url: '/facebook.svg',
  },
];

export const tools = [
  {
    imgUrl: '/dev/reactjs.svg',
    title: 'react native',
    color: 'yellow',
  },
  {
    imgUrl: '/dev/sass.svg',
    title: 'tailwind',
    color: 'yellow',
  },
  {
    imgUrl: '/dev/webpack.svg',
    title: 'mongodb',
    color: 'yellow',
  },
  {
    imgUrl: '/dev/gitlab.svg',
    title: 'github',
    color: '#ffb100',
  },
  {
    imgUrl: '/dev/figma.svg',
    title: 'ui/ux',
    color: '#ffb100',
  },
  {
    imgUrl: '/dev/css.svg',
    title: 'css',
    color: 'yellow',
  },
  {
    imgUrl: '/planet-01.png',
    title: 'solidity',
    color: 'yellow',
  },
  {
    imgUrl: '/planet-01.png',
    title: 'socketio',
    color: '#ffb100',
  },
  {
    imgUrl: '/dev/BASE-3.svg',
    title: 'expressjs',
    color: '#ffb100',
  },
  {
    imgUrl: '/planet-01.png',
    title: 'firebase',
    color: '#ffb100',
  },
  {
    imgUrl: '/dev/ps.svg',
    title: 'Adobi Photoshop',
    color: '#ffb100',
  },
  {
    imgUrl: '/dev/npm.svg',
    title: 'Npm',
    color: '#ffb100',
  },
  {
    imgUrl: '/dev/js.svg',
    title: 'JavaScript',
    color: '#ffb100',
  },
  {
    imgUrl: '/dev/netlify.svg',
    title: 'netlify',
    color: '#ffb100',
  },
  {
    imgUrl: '/dev/nextjs.svg',
    title: 'nextjs',
    color: '#ffb100',
  },
  {
    imgUrl: '/dev/nodejs.svg',
    title: 'nodejs',
    color: '#ffb100',
  },
  {
    imgUrl: '/dev/webpack.svg',
    title: 'docker',
    color: 'yellow',
  },
  {
    imgUrl: '/dev/reactjs.svg',
    title: 'react',
    color: 'yellow',
  },
  {
    imgUrl: '/dev/ai.svg',
    title: 'Adobi Illustrator',
    color: 'yellow',
  },
  {
    imgUrl: '/dev/BASE.svg',
    title: 'and more',
    color: 'yellow',
  },
];

export const userData = {
  name: 'Akanbi Joseph',
  headerName: 'OLUWATOBI',
  github: 'https://github.com/Dxtobi',
  twitter: 'https://twitter.com/programmer_dex',
  whatIDo: 'WEB DEV | APP DEV',
  description: "Hello I'am a Freelancer providing services for programing and designs contact me lets get creative ;)",
};
export const setDark = (newMood) => {
  localStorage.setItem('mood', newMood);
  console.log(newMood);
};

export const getMood = () => {
  const mood = localStorage.getItem('mood');
  if (mood) return mood;
  if (!mood) return false;
};
