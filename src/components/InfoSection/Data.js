export const homeObjOne = {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'About Me',
    headline: ["Hey!",
        <br/>,
        "I'm Jan Dupont"],
    description: ["I play the guitar since I'm 9 years old.",
        <br/>,
        <br/>,
        "First I started with classical guitar lessons, then after 3-4 Years I decided to learn Fingerstyle on my own."],
    buttonLabel: 'Home',
    imgStart: false,
    img: require('../../images/png-1.png').default,
    alt: 'Car',
    dark: true,
    primary: true,
    darkText: false
};

export const homeObjTwo = {
    id: 'discover',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Fingerstyle',
    headline: 'in arbeit',
    description: '/',
    buttonLabel: '/',
    imgStart: true,
    img: require('../../images/svg-2.svg').default,
    alt: 'Piggybank',
    dark: false,
    primary: false,
    darkText: true
};

export const homeObjThree = {
    id: 'signup',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'premium Bank',
    headline: 'Creating an account is extremely easy',
    description: "Get everything set up and ready in under 10 minutes. All you need to do is add your information and you're ready to go.",
    buttonLabel: 'Start Now',
    imgStart: false,
    img: require('../../images/svg-3.svg').default,
    alt: 'Papers',
    dark: false,
    primary: false,
    darkText: true
};