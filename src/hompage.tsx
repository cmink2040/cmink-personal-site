import {EndBar} from './Descriptors.tsx'
import {useEffect, useState} from 'react';

import {BackgroundImage, LazyImage, LazyRender, SelectDropdownBar} from './reuseComps.tsx'
import './Fonts.css';

const aiDir = '/assets/aifavicon.png';
const Homepage = () => {
    const icons = [
        aiDir,
        aiDir,
        aiDir,
        aiDir,
        aiDir,
        aiDir,
        aiDir,
        aiDir,
        aiDir,
        aiDir,

        aiDir,
        aiDir,
        aiDir,
        aiDir,
        aiDir,
        aiDir,
        aiDir,
        aiDir,
        aiDir,
        aiDir,

        aiDir,
        aiDir,
        aiDir,
        aiDir,
        aiDir,
        aiDir,
        aiDir,
        aiDir,
        aiDir,
        aiDir,
    ];
    const command = [
        () => console.log("Hello"),
        () => console.log("Hello"),
        () => console.log("Hello"),
        () => console.log("Hello"),
        () => console.log("Hello"),
        () => console.log("Hello"),
        () => console.log("Hello"),
        () => console.log("Hello"),
        () => console.log("Hello"),
        () => console.log("Hello"),

        () => console.log("Hello"),
        () => console.log("Hello"),
        () => console.log("Hello"),
        () => console.log("Hello"),
        () => console.log("Hello"),
        () => console.log("Hello"),
        () => console.log("Hello"),
        () => console.log("Hello"),
        () => console.log("Hello"),
        () => console.log("Hello"),

        () => console.log("Hello"),
        () => console.log("Hello"),
        () => console.log("Hello"),
        () => console.log("Hello"),
        () => console.log("Hello"),
        () => console.log("Hello"),
        () => console.log("Hello"),
        () => console.log("Hello"),
        () => console.log("Hello"),
        () => console.log("Hello"),
    ];
    const name = [
        "Details",
        "Details",
        "Details",
        "Details",
        "Details",
        "Details",
        "Details",
        "Details",
        "Details",
        "Details",
        
        "Details",
        "Details",
        "Details",
        "Details",
        "Details",
        "Details",
        "Details",
        "Details",
        "Details",
        "Details",

        "Details",
        "Details",
        "Details",
        "Details",
        "Details",
        "Details",
        "Details",
        "Details",
        "Details",
        "Details",
    ];
    const supportedLanguages = [
        "EN",
        "日本語(JP)",
        "中文(ZH)",
    ];

    const [lang, setLang] = useState('EN');
    useEffect(() => {
        if (lang === 'EN') {
            document.title = "CMinK";
            document.documentElement.lang = "en";
        } else if (lang === '日本語(JP)') {
            document.title = "ミンク";
            document.documentElement.lang = "ja";
        } else if (lang === '中文(ZH)') {
            document.title = "陈明";
            document.documentElement.lang = "zh";
        }
    }, [lang]);
    const setTemp = (option: any) => {
        console.log("Parent was called! ", option)
        setLang(option);
    }

    return (
        <div className='w-full text-center h-screen snap-mandatory snap-y '>
            <div
                className='w-full grid grid-cols-2 slideT-in z-50 bg-transparent absolute px-16 py-8 font-bold SpecialFont'>
                <div className='text-white col-span-1 justify-start text-start'> Copyright &copy; 2023 CMinK</div>
                <div className='col-span-1 justify-end text-end'>
                    {
                        supportedLanguages.includes(lang) ?
                            <SelectDropdownBar className="text-white hover:cursor-pointer" defaultValue={lang}
                                               selectOpt={supportedLanguages} setParent={setTemp}/> :
                            <SelectDropdownBar className="text-white " defaultValue='EN'
                                               selectOpt={supportedLanguages} setParent={setTemp}/>
                    }
                </div>
            </div>
            <BackgroundImage src='/assets/pex.png'
                             className='w-full h-screen z-20 text-center flex-col flex snap-center fadein justify-center'
                             ImageClassName='absolute -z-50 top-0 left-0 w-full h-screen object-cover'
                             alt='background'>
                <h1 className='flex-row text-7xl text-white '>CMinK</h1>
                <p className='flex-row text-white'> TSMKS x LMCHK </p>
            </BackgroundImage>


            <div className='w-full snap-center fadein'>
                <div className='flex flex-col align-content-center justify-items-center w-full'>
                    <div className='bg-gray-800 w-full p-16'>
                        <div className='text-2xl text-center text-white'>
                            Introduction
                        </div>
                        <br/>

                        <div className='text-center text-sm text-white'>
                            Hello, I am CMinK. I am a tech enthusiast. I specialize in software development, AI
                            Engineering, and
                            website development. In my freetime, I enjoy building PCs and assembling hardware.
                        </div>
                    </div>


                    <div className='bg-black text-center w-full fadein pt-8'>
                        <div className='grid grid-cols-2'>
                            <LazyRender className='col-span-1 text-white' direction='slideR-in'>
                                cmink2040@gmail.com <br/>
                                +1(707)-774-9127 <br/>
                            </LazyRender>
                            <LazyRender className='col-span-1 text-white' direction='slideL-in'>
                                cmink@starlightpath.studio <br/>
                                cmink@tsmks.com <br/>
                                +1(416)-123-1234<br/>
                            </LazyRender>
                        </div>

                        Social Media <br/>
                        <div className='flex flex-row align-center justify-center space-x-2 px-16 py-8'>
                            <FormatLink link='https://www.linkedin.com/in/ming-chen-475a3b275/' text='LinkedIn'
                                        img='/assets/linkedin-logos/In-White-128.png'/> <br/>
                            <FormatLink link='https://www.github.com/cmink2040' text='Github'
                                        img='/assets/github-mark/github-mark-white.png'/> <br/>
                            <FormatLink link='https://www.instagram.com/cmink2040/' text='Instagram'
                                        img='/assets/IG_brand_asset_pack_2023/Instagram_Glyph_White.png'/> <br/>
                            <FormatLink link='https://www.youtube.com/channel/UC4QXq1XQZoY5Z5qZ4X6Z3jQ' text="YouTube"
                                        img='/assets/brand-monochrome-logos/yt_logo_mono_dark.png'/> <br/>
                            <FormatLink link='https://www.twitter.com/cmink2040' text="Twitter"
                                        img='/assets/twitter-logo-01282021/Twitter logo/PNG/2021 Twitter logo - white.png'/>
                            <br/>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-auto px-4 text-center
        grid grid-cols-5 snap-center items-center'>
                <h1 className='grid  text-3xl align-center text-center justify-items-center'>Projects</h1>
                <div className='col-span-4 grid grid-cols-1 align-content-center justify-items-center gap-2 '>
                    <div className='bg-gray-800 text-white text-center w-full mx-2 '>
                        Projects <br/>
                        My full list of my projects can be found here:
                    </div>
                    <div className='bg-gray-800 text-white text-center w-full py-4 px-32 '>
                        Current Projects <br/> AI NT Model(StarlightX), SkyGate Media(TSMKS), Website(CMinK)
                    </div>
                    <div className='bg-gray-800 text-white text-center w-full py-4 px-32 '>
                        Resume <br/>

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
            <EndBar/>
        </div>);
}
const FormatSquare = (props: any) => {
    return (
        <div className='flex flex-col text-white justify-items-center aspect-square border border-gray-800
        hover:cursor-pointer hover:bg-gray-400 content-center rounded-lg py-2\
        transition duration-300'>
            {/*onClick = {props.command}>*/}
            <LazyImage src={props.icon} className='w-auto h-3/5 mx-5 mt-5 rounded-2xl' alt='icon'/>
            <p className='text-center pb-2 text-sm'>        {props.name} </p>

        </div>
    );
}
const FormatLink = (props: any) => {
    return (
        <a href={props.link} className='text-blue-400 col-span-1 p-3 border
         border-1 border-gray-600 rounded hover:bg-gray-500'>
            <LazyImage src={props.img} alt='icon' className='h-5'/>
        </a>
    );
}
export default Homepage