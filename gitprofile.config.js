// gitprofile.config.js

const config = {
  github: {
    username: 'alphaX86', // Your GitHub org/user name. (Required)
    sortBy: 'updated', // stars | updated
    limit: 4, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'alphaX86',
    twitter: 'KryoX64',
    mastodon: '',
    facebook: '',
    instagram: '',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: 'alphax86',
    dev: 'alphax86',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    orcid: '0000-0003-4864-0077',
    email: 'kryox64@wearehackerone.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/15icU3XDu5I-c3k-H5YKBNBISLcz5EphN/view?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'C',
    'C++',
    'Python',
    'Java',
    'JavaScript',
    'Golang',
    'React',
    'NodeJS',
    'NextJS',
    'MySQL',
    'MongoDB',
    'Git',
    'Docker',
    'Kubernetes',
    'CSS',
    'Maven',
    'Flask',
    'Tailwind',
    'Tensorflow',
    'PyTorch',
    'Keras',
    'Pandas',
  ],
  experiences: [
    {
      company: 'Citigroup Inc.',
      position: 'Tech Analyst',
      from: 'July 2023',
      to: 'Present',
      companyLink: 'https://citi.com',
    },
    {
      company: 'Layer5',
      position: 'Maintainer (CLI)',
      from: 'Jan 2023',
      to: 'Present',
      companyLink: 'https://layer5.io',
    },
    {
      company: 'CNCF',
      position: 'LFX Mentee',
      from: 'March 2022',
      to: 'May 2022',
      companyLink: 'https://layer5.io',
    },
  ],
  /* certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com'
    },
  ], */
  education: [
    {
      institution: 'Anna University - MIT Campus',
      degree: 'B.Tech IT',
      from: '2019',
      to: '2023',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'Meshery',
      description:
        'Meshery is the open source, cloud native management plane that enables the adoption, operation, and management of Kubernetes, any service mesh, and their workloads.',
      imageUrl: '',
      link: 'https://github.com/meshery/meshery',
    },
    {
      title: 'CreDeX',
      description:
        'Credit Card analysis web app made for Neueda training project.',
      imageUrl: '',
      link: 'https://github.com/alphaX86/neueda-credit',
    },
    {
      title: 'arkLB',
      description:
        'An eBPF/XDP based load balancer system designed for microservices. Targeted mainly on VMs, Containers and k8s pods. ',
      imageUrl: '',
      link: 'https://github.com/ark-7',
    },
    {
      title: 'HexE',
      description:
        'A WAV audio encryption and decryption algorithm using SuDoKu Puzzle and IPFS API service.',
      imageUrl: '',
      link: 'https://github.com/KiteVX/HexE',
    },
    {
      title: 'Indian Non-Native English Accent Classifier',
      description:
        'A VGG16-LinearSVC designed to classify the accents of non-native English Indian speakers based on the audio amplitude and MFCC features present at the given time interval.',
      imageUrl: '',
      link: 'https://github.com/KiteVX/accent-vgg',
    },
    {
      title: 'Stock-X',
      description:
        'A CNN-LSTM NN model designed to predict the stock prices of a company based on the historical data of the company.',
      imageUrl: '',
      link: 'https://github.com/Circle-1/Stock-X',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'alphax86', // to hide blog section, keep it empty
    limit: 3, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'night',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'black',
      'luxury',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `©️ 2023 alphaX86. Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a>`,
};

export default config;
