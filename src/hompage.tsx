import {useEffect, useState} from 'react';
import * as Windows from './Windows.tsx';
import {BackgroundImage, LazyImage, LazyRender, SelectDropdownBar} from './reuseComps.tsx'
import './Fonts.css';
const aiDir = '/assets/aifavicon.png';
import {H1} from './src/DefaultCSSTemplates.tsx';
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
        () => {setResumePage(true)},
        () => {setSitePoliciesPage(true)},
        () => {setContactPage(true)},
        () => {setSiteInfoPage(true)},
        () => {setUpdatesPage(true)},
        () => {setBlogPage(true)},
        () => {setTermsOfServicePage(true)},
        () => {setTsmksPage(true)},
        () => {setStarlightXPage(true)},
        () => {setPrivacyPolicyPage(true)},
        () => {setLmchkPage(true)},
        () => {setFunStuffPage(true)},
        () => {setLegalPage(true)},
        () => {setGitlabPage(true)},
        () => {setAnimePage(true)},
        () => {setDiscordPage(true)},
        () => {setYtPage(true)},
        () => {setMyDreamPage(true)},
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
    const [resumePage, setResumePage] = useState(false);
    const [sitePoliciesPage, setSitePoliciesPage] = useState(false);
    const [contactPage, setContactPage] = useState(false);
    const [siteInfoPage, setSiteInfoPage] = useState(false);
    const [updatesPage, setUpdatesPage] = useState(false);
    const [blogPage, setBlogPage] = useState(false);
    const [termsOfServicePage, setTermsOfServicePage] = useState(false);
    const [tsmksPage, setTsmksPage] = useState(false);
    const [starlightXPage, setStarlightXPage] = useState(false);
    const [privacyPolicyPage, setPrivacyPolicyPage] = useState(false);
    const [lmchkPage, setLmchkPage] = useState(false);
    const [funStuffPage, setFunStuffPage] = useState(false);
    const [legalPage, setLegalPage] = useState(false);
    const [gitlabPage, setGitlabPage] = useState(false);
    const [animePage, setAnimePage] = useState(false);
    const [discordPage, setDiscordPage] = useState(false);
    const [ytPage, setYtPage] = useState(false);
    const [myDreamPage, setMyDreamPage] = useState(false);

    return (
        <div className='w-full text-center h-screen snap-mandatory snap-y '>
            <Windows.default.ResumeWindow on={resumePage} setShow={setResumePage}/>
            <Windows.default.SitePoliciesWindow on={sitePoliciesPage} setShow={setSitePoliciesPage}/>
            <Windows.default.ContactWindow on={contactPage} setShow={setContactPage}/>
            <Windows.default.SiteInfoWindow on={siteInfoPage} setShow={setSiteInfoPage}/>
            <Windows.default.UpdatesWindow on={updatesPage} setShow={setUpdatesPage}/>
            <Windows.default.BlogWindow on={blogPage} setShow={setBlogPage}/>
            <Windows.default.TermsOfServiceWindow on={termsOfServicePage} setShow={setTermsOfServicePage}/>
            <Windows.default.TsmksWindow on={tsmksPage} setShow={setTsmksPage}/>
            <Windows.default.StarlightXWindow on={starlightXPage} setShow={setStarlightXPage}/>
            <Windows.default.PrivacyPolicyWindow on={privacyPolicyPage} setShow={setPrivacyPolicyPage}/>
            <Windows.default.LmchkWindow on={lmchkPage} setShow={setLmchkPage}/>
            <Windows.default.FunStuffWindow on={funStuffPage} setShow={setFunStuffPage}/>
            <Windows.default.LegalWindow on={legalPage} setShow={setLegalPage}/>
            <Windows.default.GitlabWindow on={gitlabPage} setShow={setGitlabPage}/>
            <Windows.default.AnimeWindow on={animePage} setShow={setAnimePage}/>
            <Windows.default.DiscordWindow on={discordPage} setShow={setDiscordPage}/>
            <Windows.default.YtWindow on={ytPage} setShow={setYtPage}/>
            <Windows.default.MyDreamWindow on={myDreamPage} setShow={setMyDreamPage}/>
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
                             className='w-full h-screen  text-center flex-col flex snap-center justify-center'
                             ImageClassName='absolute -z-50 top-0 left-0 object-cover'
                             alt='background'>
                <h1 className='flex-row text-7xl text-white '>CMinK</h1>
                <p className='flex-row text-white'> TSMKS x LMCHK </p>
            </BackgroundImage>


            <div className='w-full snap-center fadein'>
                <div className='flex flex-col align-content-center justify-items-center w-full'>
                    <div className='bg-black border border-gray-600 border-l-0 border-r-0 border-t-0 w-full p-16'>
                        <div className='text-2xl text-center text-white'>
                            Introduction
                        </div>
                        <br/>

                        <div className='text-start text-sm text-white fonts px-40'>
                            <H1 className={'fonts'}> Who am I? </H1>
                            CMinK(Chen Ming) is a full-stack developer at TSMKS and a software engineer and AI researcher at StarlightX.
                            website development. He also is a member of the LMCHK, a group for his non-official, non-formal projects,
                            and for fun research. <br/> <br/>

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

            <div className='w-auto px-4 text-center bg-black
        grid grid-cols-5 snap-center items-center'>
                <H1 className='grid text-white align-center text-center justify-items-center'> Projects </H1>
                <div className='col-span-4 grid grid-cols-1 align-content-center justify-items-center gap-2 '>
                    <div className='border border-gray-800 hover:bg-gray-800 transition duration-300 text-white text-center w-full mx-2 '>
                       <H1> Work </H1>
                        My full list of my projects can be found here:
                    </div>
                    <div className='border border-gray-800 text-white text-center w-full py-4 px-32 '>
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
const FormatSquare = (props: any) => {
    return (
        <div className='flex flex-col text-white justify-items-center aspect-square border border-gray-800
        hover:cursor-pointer hover:bg-gray-400 content-center rounded-lg py-2\
        transition duration-300'
            onClick = {props.command}>
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