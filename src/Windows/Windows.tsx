import '../CSS/Transitions.css';
import {H1, H2, H3, L} from '../Reuseable_Components/DefaultCSSTemplates.tsx';
import './CloseableWindow.css'
import {ReactNode, useState} from "react";
import CloseableWindow from "./CloseableWindow.tsx";

type WindowManagerProps = {
    window: string;
    on: boolean;
    setShow: (show: boolean) => void;
}

type json_window_type = {
    'RESUME': ReactNode;
    'SITE_POLICY': ReactNode;
    'CONTACT': ReactNode;
    'SITE_INFO': ReactNode;
    'UPDATES': ReactNode;
    'BLOG': ReactNode;
    'FUN_STUFF': ReactNode;
    'ANIME': ReactNode;
    'MY_DREAM': ReactNode;
}
const WindowManager = (props:WindowManagerProps) => {
    const windows: json_window_type = {
        'RESUME': <ResumeWindow />,
        'SITE_POLICY': <SitePolicyWindow />,
        'CONTACT': <ContactWindow />,
        'SITE_INFO': <SiteInfoWindow />,
        'UPDATES': <UpdatesWindow />,

        'BLOG': <BlogWindow />,
        'FUN_STUFF': <FunStuffWindow />,
        'ANIME': <AnimeWindow />,

        'MY_DREAM': <MyDreamWindow />,

    }
    const Window = windows[props.window] as ReactNode;
    return (
       <CloseableWindow show={props.on} setShow={props.setShow} id={'Single_Window'}>
           {Window}
       </CloseableWindow>
    )
}
const ResumeWindow = () => {
    return (
            <div className="fadein flex flex-col pt-16 mx-64 px-16 bg-black border border-white overflow-y-auto h-screen text-white" >
                <div className={'text-md sans-serif pt-8 text-start'}>
                    <H1 >
                        My Resume
                    </H1>

                    <br/>
                    <div >
                        Please use the contact window to contact me for my resume, thanks!
                    </div>
                </div>

            </div>
    )
};
const SitePolicyWindow = () => {
    return (
            <div className={'flex flex-col items-center justify-center w-3/5 h-screen bg-gray-400'}>
                Legal Info
            </div>
    )
}
const ContactWindow = () => {
    return (
        <div className="fadein flex flex-col pt-16 mx-64 px-16 bg-black border border-white overflow-y-auto h-screen text-white" >
            <div className={'text-md sans-serif pt-8 text-start'}>
                <H1 >
                    Preferred Contact Methods: <br/>
                </H1>
                <div >
                <H2> Email: </H2>
                   <L>szeng2525@gmail.com</L>
                   <L>szeng5@uiowa.edu </L>
                +1 707 774 9127 <br/>
                </div>

                I will try to respond to all inquiries within 48 hours.
            </div>

        </div>
    )
}

const SiteInfoWindow = () => {
    return (
            <div className="fadein flex flex-col pt-16 mx-64 px-16 bg-black border border-white overflow-y-auto h-screen text-white" >
                <div className={'text-md sans-serif pt-8 text-start'}>
                    <H1 >
                        Information about this Site <br/>
                    </H1>
                    <br/> <br/> <br/>
                    <div >
                        <H2> Publication Date </H2>
                        <H3> July 29th, 2023 </H3>
                        <br/>
                        <H2> Last Update</H2>
                        <H3> July 29th, 2023 </H3>
                        <br/>
                        <H2> Copyright Info </H2>
                        <H3> &copy; 2023, Szeng </H3>
                        <br/>
                        <H3>
                            Certain uses are permitted under the CC-BY-ND License. See Site Policy for more information.
                            Asides from rights granted from Site Policy, all rights are reserved.
                        </H3>
                    </div>
                </div>

            </div>
    )
}
const UpdatesWindow = () => {
    return (
            <div className="fadein flex flex-col pt-16 mx-64 px-16 bg-black border border-white overflow-y-auto h-screen text-white" >
                <div className={'text-md sans-serif pt-8 text-start'}>
                    <H1 >
                        Updates: <br/>
                    </H1>
                    <H3>
                        This site was released on July 29th 2023. Please check back for updates for any changes I could
                        make to this site, including social media links, new projects, and more.
                    </H3>

                </div>

            </div>
    )
}
const BlogWindow = () => {
    return (
            <div className="fadein flex flex-col pt-16 mx-64 px-16 bg-black border border-white overflow-y-auto h-screen text-white" >
                <div className={'text-md sans-serif pt-8 text-start'}>
                   <H1>
                       Blog
                   </H1> <br/>

                    <H3>
                        I plan on starting a blog, but I have not started yet. Please check back for updates.
                        It will be released in a future version. At some time, I will release a chat
                        with a backend for persistent data. Please contact me via my contact methods
                        till then.
                    </H3>

                </div>

            </div>
    )
}


const FunStuffWindow = () => {
    return (
            <div className="fadein flex flex-col pt-16 mx-64 px-16 bg-black border border-white overflow-y-auto h-screen text-white" >
                <div className={'text-md sans-serif pt-8 text-start'}>
                    This square is being updated. Maybe it will be out in the next update. <br/>
                </div>

            </div>
    )
}



const ImageHover = (props:any) => {
    const [didHover, setDidHover] = useState(false);
    const toggle = () => {
        setDidHover((prev) => !prev);
    }
    return(
        <a className={'relative z-50'} href={props.link}  onMouseLeave={toggle} onMouseEnter={toggle}>
            {
                didHover ?
                    <div>
                    <div className={'absolute inset-x-0 text-center z-30 text-white bg-black slideBB-in'}>
                        {props.title}
                    </div>
                    <div className={'absolute inset-x-0 bottom-0 text-center z-30 text-white bg-black slideTT-in'}>
                        {props.description}
                    </div>

                    </div>:
                    null
            }
            <img src={props.src} alt={props.alt} className={props.imgClassName}

             />
        </a>
    );
}

const AnimeWindow = () => {
    return (

            <div className="fadein flex flex-col pt-16 mx-64 px-16 bg-black border border-white overflow-y-auto h-screen text-white" >
                <div className={'text-md sans-serif pt-8 text-start'}>
                    <H1>
                        Anime
                    </H1>
                    <H2>
                        I like anime and I watch it in my free time. I have a few favorites that I'll list here.
                        <L> https://myanimelist.net/profile/mathemate </L>

                    </H2>
                    <br/>
                    <H2>
                        I'll be implemented a chat here for people to talk about anime here at some point.
                        Stay tuned.
                    </H2>
                        <div className={'flex flex-row space-x-2'}>
                            <ImageHover src={'/oshinoko.jpg'} alt={'anime'} title={'Oshi no Ko'}
                            link={'https://myanimelist.net/anime/52034/Oshi_no_Ko'}
                            description={'A show about mysterious idle groups and their fans. I liked this show alot.' +
                                'It was kind of a mystery and I liked the characters. Overall was enjoyable.'}
                            imgClassName={'w-full h-full object-cover'}
                            />
                            <ImageHover src={'/kiminouso.jpg'} alt={'anime'} title={'Your lie in April'}
                                        link={'https://myanimelist.net/anime/23273/Shigatsu_wa_Kimi_no_Uso'}
                                        description={'Still my favorite anime. One of my first animes I watched.'}
                                        imgClassName={'w-full h-full object-cover'}
                            />
                            <ImageHover src={'/kst.jpg'} alt={'anime'} title={'I want to eat your pancreas'}
                                        link={'https://myanimelist.net/anime/36098/Kimi_no_Suizou_wo_Tabetai'}
                                        description={'Dark, but at the same time, very interesting and ' +
                                            'has a nice ending.'}
                                        imgClassName={'w-full h-full object-cover'}
                            />


                        </div>
                    <div className={'text-center mt-20'}>
                        <H1>
                            Stay tuned for more updates!
                        </H1>
                    </div>

                </div>

            </div>
    )
}

const MyDreamWindow = () => {
    return (

            <div className="fadein flex flex-col pt-16 mx-64 px-16 bg-black border border-white overflow-y-auto h-screen text-white" >
                <div className={'text-md sans-serif pt-8 text-start'}>
                    This square is being updated. Maybe it will be out in the next update. <br/>
                </div>

            </div>
    )
}

export default WindowManager;
