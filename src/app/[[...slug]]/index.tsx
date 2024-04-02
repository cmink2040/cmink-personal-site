import {useEffect, useState} from 'react';

import '../CSS/Fonts.css';
const aiDir = '/assets/aifavicon.png';
import {H1} from '../components/DefaultCSSTemplates';
import WindowManager from "../components/Windows";

import FormatSquare from "../components/Formats/FormatSquare";
import FormatLink from "../components/Formats/FormatLink";
const Homepage = () => {
    const icons = [
        '/layer-group-solid.svg',
        '/receipt-solid.svg',
        '/comments-regular.svg',
        '/globe-solid.svg',
        'business-time-solid.svg',
        '/blog-solid.svg',
        '/book-solid.svg',
        'record-vinyl-solid.svg',
        '/record-vinyl-solid.svg',

        '/notes-medical-solid.svg',
        '/record-vinyl-solid.svg',
        '/face-smile-regular.svg',
        '/scale-unbalanced-flip-solid.svg',
        './gitlab.svg',
        aiDir,
        '/discord.svg',
        '/assets/brand-monochrome-logos/yt_logo_mono_dark.png',
        '/record-vinyl-solid.svg',
    ];
    const command = [
        () => {setCurrentPage('RESUME'); setIsOpened(true)},
        () => {setCurrentPage('SITE_POLICIES'); setIsOpened(true)},
        () => {setCurrentPage('CONTACT');setIsOpened(true)},
        () => {setCurrentPage('SITE_INFO');setIsOpened(true)},
        () => {setCurrentPage('UPDATES');setIsOpened(true)},
        () => {setCurrentPage('BLOG');setIsOpened(true)},
        () => {setCurrentPage('PROJECTS_INFO');setIsOpened(true)},
        () => {setCurrentPage('TSMKS');setIsOpened(true)},
        () => {setCurrentPage('STARLIGHTX');setIsOpened(true)},
        () => {setCurrentPage('PRIVACY_POLICY');setIsOpened(true)},
        () => {setCurrentPage('LMCHK');setIsOpened(true)},
        () => {setCurrentPage('FUN_STUFF');setIsOpened(true)},
        () => {setCurrentPage('LEGAL');setIsOpened(true)},
        () => {setCurrentPage('GITLAB');setIsOpened(true)},
        () => {setCurrentPage('ANIME');setIsOpened(true)},
        () => {setCurrentPage('DISCORD');setIsOpened(true)},
        () => {setCurrentPage('YT');setIsOpened(true)},
        () => {setCurrentPage('MY_DREAM');setIsOpened(true)},
    ];
    const name = [
        "Resume",
        "Site Policies",
        "Contact",
        "Site Information",
        "Updates",
        "Blog",
        "Projects Information",
        "TSMKS",
        "StarlightX",
        "Privacy Policy",
        "LMCHK",

        "Fun Stuff",
        "Legal",
        "Gitlab",
        "Anime",
        "Discord",
        "YT",
        "My Dream",
    ];
    const supportedLanguages = [
        "EN",
        "日本語(JP)",
        "中文(ZH)",
    ];

    const [lang, setLang] = useState('EN');

    document.title = "CMinK";
    useEffect(() => {
        if (lang === 'EN') {
            document.documentElement.lang = "en";
        } else if (lang === '日本(JP)') {
            document.documentElement.lang = "ja";
        } else if (lang === '中文(ZH)') {
            document.documentElement.lang = "zh";
        }
    }, [lang]);
    const setTemp = (option: any) => {
        setLang(option);
    }

    const [current_page, setCurrentPage] = useState('home');
    const [is_opened, setIsOpened] = useState(false);

    return (
        <div className='w-full text-center h-screen snap-mandatory snap-y '>


            <WindowManager window={current_page} on={is_opened} setShow={setIsOpened} />
   
            <div className='w-full z-50 absolute font-bold SpecialFont text-white justify-start text-start'>  CMinK</div>
   

            <div className='w-full snap-center'>
                <div className='flex flex-col align-content-center justify-items-center w-full'>
                    <div className='bg-black border border-gray-600 border-l-0 border-r-0 border-t-0 w-full p-16'>
                        <div className='text-2xl text-center text-white'>
                            Introduction
                        </div>
                        <br/>

                        <div className='text-start text-sm text-white fonts '>
                            <H1 className={'fonts'}> Who am I? </H1>
                            Cmink is a programmer. He is currently working on various of
                            projects, including NN Models, websites and applications, and more. He also is a member of LMCHK,
                            a group for his fun projects and research.
                            <br/>

                            CMinK dreams of creating a world where everything is connected and move the world forward fully
                            to the cloud by 2040 through a combination of software, hardware, and AI technologies. <br/>

                            <br/>

                            <br/>
                            <H1 className={'fonts'}> What do I do? </H1>
                            While not working, CMinK enjoys playing video games, watching anime, and reading manga. He
                            also enjoys catching up on the latest tech news and learning new things. <br/>

                            <br/>
                        </div>
                    </div>


                    <div className='bg-black text-center w-full '>
                        <div className='flex flex-row text-white justify-center items-center'>
                                cmink2040@gmail.com 
                                +1(707)-774-9127 
                        </div>
                        
                        <div className='flex flex-row justify-center items-center'>
                            <FormatLink link='https://www.linkedin.com/in/ming-chen-475a3b275/' text='LinkedIn'
                                        img='/assets/linkedin-logos/In-White-128.png'/> 
                            <FormatLink link='https://www.github.com/cmink2040' text='Github'
                                        img='/assets/github-mark/github-mark-white.png'/> <br/>
                            <FormatLink link='https://www.instagram.com/cmink2040/' text='Instagram'
                                        img='/assets/IG_brand_asset_pack_2023/Instagram_Glyph_White.png'/> <br/>
                            <FormatLink link='https://www.youtube.com/channel/UC4QXq1XQZoY5Z5qZ4X6Z3jQ' text="YouTube"
                                        img='/assets/brand-monochrome-logos/yt_logo_mono_dark.png'/> <br/>
                            <FormatLink link='https://www.twitter.com/cmink2040' text="Twitter"
                                        img='/assets/twitter-logo-01282021/Twitter logo/PNG/2021 Twitter logo - white.png'/>
                         
                    </div>
                    
                    </div>
                </div>
            </div>

            <div className='w-auto  text-center bg-black
        grid grid-cols-5 snap-center items-center'>
                <H1 className='grid text-white align-center text-center justify-items-center'> Projects </H1>
                <div className='col-span-4 grid grid-cols-1 align-content-center justify-items-center gap-2 '>
                    <div className='border border-gray-800 hover:bg-gray-800 transition duration-300 text-white text-center w-full mx-2 '>
                       <H1> Work </H1>
                        My full list of my projects can be found here:
                    </div>
                    <div className='border border-gray-800 text-white text-center w-full '>
                      <H1>Current Projects</H1>  AI NT Model(StarlightX), SkyGate Media(TSMKS), Website(CMinK)
                    </div>
                </div>
            </div>

            <div className='w-auto bg-black text-center gap-2 place-content-center
        grid grid-cols-9 snap-center items-center'>
                <h1 className='grid col-span-9 text-3xl align-center text-center justify-items-center content-center'>MENU</h1>
                {
                    Array.from({length: 18}).map((_, i) => (
                        <FormatSquare key={i} name={name[i]} icon={icons[i]} command={command[i]}/>
                    ))
                }


            </div>
        </div>);
}

export default Homepage