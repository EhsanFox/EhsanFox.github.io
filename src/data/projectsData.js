//import one from '../assets/svg/projects/one.svg'
//import two from '../assets/svg/projects/two.svg'
//import three from '../assets/svg/projects/three.svg'
//import four from '../assets/svg/projects/four.svg'
//import five from '../assets/svg/projects/five.svg'
//import six from '../assets/svg/projects/six.svg'
//import seven from '../assets/svg/projects/seven.svg'
//import eight from '../assets/svg/projects/eight.svg'
import wintube from '../assets/svg/projects/wintube.svg'
import npm from '../assets/svg/projects/npm.svg'
import redSteam from '../assets/svg/projects/steam-red.svg'
import redAi from '../assets/svg/projects/red-ai.svg'
import redCache from '../assets/svg/projects/red-cache.svg'
import redAudio from '../assets/svg/projects/red-audio.svg'
import redLog from '../assets/svg/projects/red-log.svg'
import redZarinpal from '../assets/svg/projects/zarinpal-red.svg'
import redTwitch from '../assets/svg/projects/twitch.svg'

export const projectsData = [
    {
        id: 1,
        projectName: 'WinTube',
        projectDesc: 'a YouTube Client for Windows, MacOS and even Linux with Private and Secure Custom Server.',
        tags: ['JavaScript', 'Electron', 'Application'],
        code: 'https://github.com/EhsanFox/WinTube',
        demo: 'https://wintube.herokuapp.com/',
        image: wintube
    },
    {
        id: 2,
        projectName: 'Media Streamer',
        projectDesc: 'Stream to any streaming platform such as YouTube/Twitch/Facebook and other RTMP Servers with an easy-to-use class',
        tags: ['Node.js', 'Javascript', 'API', 'RTMP'],
        code: 'https://github.com/EhsanFox/MediaStreamer',
        demo: 'https://www.npmjs.com/package/MediaStreamer',
        image: redTwitch
    },
    {
        id: 3,
        projectName: 'AI-Tools',
        projectDesc: 'an API Wrapper for to my private AI Deployed on Heroku',
        tags: ['Node.js', 'Javascript', 'API', 'AI'],
        code: 'https://github.com/EhsanFox/ai-tools',
        demo: 'https://www.npmjs.com/package/ai-tools',
        image: redAi
    },
    {
        id: 4,
        projectName: 'npms-info',
        projectDesc: 'an API Wrapper for NPM Registery to get information about NPM Packages/Orgs/Users',
        tags: ['Node.js', 'Javascript', 'API'],
        code: 'https://github.com/EhsanFox/npms-info',
        demo: 'https://www.npmjs.com/package/npms-info',
        image: npm
    },
    {
        id: 5,
        projectName: 'Cache Manager',
        projectDesc: 'an easy-to-use Cache Manger based on node-cache',
        tags: ['Node.js', 'Javascript'],
        code: 'https://github.com/SeTar-Bot/Cache',
        demo: 'https://www.npmjs.com/package/@setar/cache',
        image: redCache
    },
    {
        id: 6,
        projectName: 'Audio Merging',
        projectDesc: 'a Promise-based Module To Merge Musics/Audio Files with use of ffmpeg',
        tags: ['Node.js', 'Javascript', 'FFMPEG'],
        code: 'https://github.com/SeTar-Bot/audiomerging',
        demo: 'https://www.npmjs.com/package/@setar/audiomerging',
        image: redAudio
    },
    {
        id: 7,
        projectName: 'Custom Logger',
        projectDesc: 'a Logger Module with Mutli Features such as Connecting to Sentry and Creating Log Files',
        tags: ['Node.js', 'Javascript'],
        code: 'https://github.com/SeTar-Bot/Logger',
        demo: 'https://www.npmjs.com/package/@setar/logger',
        image: redLog
    },
    {
        id: 8,
        projectName: 'ZarinPal Gateway',
        projectDesc: 'a Package to Control Your Zarinpal Payments and Connect to Zarinpal API',
        tags: ['Node.js', 'Javascript', 'API'],
        code: 'https://github.com/SeTar-Bot/zarinpal',
        demo: 'https://www.npmjs.com/package/@setar/zarinpal',
        image: redZarinpal
    },
    {
        id: 9,
        projectName: 'SteamLib',
        projectDesc: 'a Steam Library using steamApiKey and SteamID with official Steam API Address',
        tags: ['Node.js', 'Javascript', 'API'],
        code: 'https://github.com/EhsanFox/SteamLib',
        demo: 'https://www.npmjs.com/package/SteamLib',
        image: redSteam
    },
]


// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/