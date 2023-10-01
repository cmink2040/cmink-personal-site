import '../CSS/Transitions.css';
import {H1, H2, H3, H4, L} from '../Reuseable_Components/DefaultCSSTemplates.tsx';
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
    'SITE_POLICIES': ReactNode;
    'SITE_INFO': ReactNode;
    'UPDATES': ReactNode;
    'BLOG': ReactNode;

    'TOS': ReactNode;
    'TSMKS': ReactNode;
    'STARLIGHT': ReactNode;

    'PRIVACY_POLICY': ReactNode;
    'LMCHK': ReactNode;
    'FUN_STUFF': ReactNode;
    'LEGAL': ReactNode;
    'GITLAB': ReactNode;
    'ANIME': ReactNode;
    'DISCORD': ReactNode;
    'YT': ReactNode;
    'MY_DREAM': ReactNode;


}
const WindowManager = (props:WindowManagerProps) => {
    const windows: json_window_type = {
        'RESUME': <ResumeWindow />,
        'SITE_POLICY': <SitePolicyWindow />,
        'CONTACT': <ContactWindow />,
        'SITE_POLICIES': <SitePoliciesWindow />,
        'SITE_INFO': <SiteInfoWindow />,
        'UPDATES': <UpdatesWindow />,

        'BLOG': <BlogWindow />,
        'TOS': <TermsOfServiceWindow />,
        'TSMKS': <TsmksWindow />,
        'STARLIGHT': <StarlightXWindow />,
        'PRIVACY_POLICY': <PrivacyPolicyWindow />,
        'LMCHK': <LmchkWindow />,
        'FUN_STUFF': <FunStuffWindow />,
        'LEGAL': <LegalWindow />,
        'GITLAB': <GitlabWindow />,
        'ANIME': <AnimeWindow />,
        'DISCORD': <DiscordWindow />,
        'YT': <YtWindow />,

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
                        <H2> Download my CV and Resume here! </H2>
                        <L>public.source.tsmks.com/cmk/resume/</L>
                        <L>public.source.tsmks.com/cmk/cv</L>
                        <br/>

                        <H2> Further information can be found there. </H2>
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
                   <L>cmink2040@gmail.com</L>
                   <L>cmink@tsmks.com </L>
                   <L>cmink@starlightpath.studio </L>
                <H2> Social Media: </H2>
                    <H3> This order of preference: </H3>
                   <L>  LinkedIn </L>
                    <L>Instagram</L>
                    <H2> Phone</H2>
                +1 707 774 9127 <br/>
                </div>

                I will try to respond to all inquiries within 48 hours.
            </div>

        </div>
    )
}
const SitePoliciesWindow = () => {
      return (
            <div className="fadein flex flex-col pt-16 mx-64 px-16 bg-black overflow-y-auto h-screen text-white" >
                <div className={'text-2xl' }
               >
                    Site Terms and Conditions of Use
                    <div className={'text-sm mt-2'}>Last updated: July 28, 2023 </div>

                </div>
                ______________________________________________________________

                <div className={'text-center mt-5 font-sans'}>
                    <p>Please read these terms and conditions.</p>
                    <div className={'text-lg font-sans font-bold underline'}>Interpretation and Definitions</div>
                    <h2>Interpretation</h2>
                    <p>The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>
                    <h2>Definitions</h2>
                    <p>For the purposes of these Terms and Conditions:</p>
                    <ul>


                    </ul>
                    <H1>Acknowledgment</H1>
                    <p>These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.</p>
                    <p>Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the Service.</p>
                    <p>By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms and Conditions then You may not access the Service.</p>

                    <H1>Changes to These Terms and Conditions</H1>
                    <p> I reserve the right to modify or replace these Terms at any time. </p>

                    <H1> </H1>
                    <H1>Contact Us</H1>
                    <p>If you have any questions about these Terms and Conditions, You can contact us:</p>
                    <ul>
                        <li>
                            <p>By email: cmink@tsmks.com, cmink2040@gmail.com, cmink@starlightpath.studio</p>
                        </li>
                        <li>
                            <p>By phone number: 707.774.9127</p>
                        </li>
                    </ul>
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
                        <H3> &copy; 2023, CMinK </H3>
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
const TermsOfServiceWindow = () => {
    return (
            <div className="fadein flex flex-col pt-16 mx-64 px-16 bg-black border border-white overflow-y-auto h-screen text-white" >
                <div className={'text-md sans-serif pt-8 text-start'}>
                    <H1>
                        Projects
                    </H1> <br/>
                    <H3>
                        Most of my projects are hosted on TSMSK internal servers. Unfortunately, it
                        means that most of them are not accessible to the public. However, you may
                        read my resume or CV for more information.

                    </H3>
                    <br/>
                    <H3>
                        I do have a few personal projects. They are available on my Github and eventually
                        I may run a personal Gitea server to host.
                    </H3>
                    <br/>
                    <H3>
                        I have a brief description on what I'm working on:
                        <br/>
                        <H4> TSMKS Website (Still in development: <L> https://tsmks.com</L></H4>
                        <br/>
                        <H4> SkyMedia for TSMKS, a social media app (Still in development: <L> https://meda.skygate.com</L></H4>
                        <br/>
                        <H4> StarlightX Website (Live, Link at: <L>https://starlightx.io</L> </H4>
                        <br/>
                        <H4> LTW(Game) (Live, Link at: <L>https://ltw.starlightx.io</L></H4>
                        <br/>
                        <H4> A WebGPU Shader Engine for the web to deploy a demo</H4>
                        <br/>
                        <H4> Internal React Component Library </H4>
                        <br/>
                        <H4> Character AI for LTW (not live)  <L> ai.lightheworld.com </L></H4>
                        <br/>
                        <H4> Managing internal server infrastructure.
                            <div className={'text-[17px]'}>Setting up Terraform, Helm, Kubernetes,
                                Load balancers, SSO, gitlab, cloud provider, and more. </div>
                        </H4>
                    </H3>
                </div>

            </div>
    )
}
const TsmksWindow = () => {
    return (
            <div className="fadein flex flex-col pt-16 mx-64 px-16 bg-black border border-white overflow-y-auto h-screen text-white" >
                <div className={'text-md sans-serif pt-8 text-start'}>
                    This square is being updated. Maybe it will be out in the next update. <br/>
                </div>

            </div>
    )
}

const StarlightXWindow = () => {
    return (
            <div className="fadein flex flex-col pt-16 mx-64 px-16 bg-black border border-white overflow-y-auto h-screen text-white" >
                <div className={'text-md sans-serif pt-8 text-start'}>
                    This square is being updated. Maybe it will be out in the next update. <br/>
                </div>

            </div>
    )
}

const PrivacyPolicyWindow = () => {
    return (
            <div className="fadein flex flex-col pt-16 mx-64 px-16 bg-black border border-white overflow-y-auto h-screen text-white" >
                <div className={'text-md sans-serif pt-8 text-start'}>
                    <H1 >
                        Preferred Contact Methods: <br/>
                    </H1>
                    <div >
                        <H2> Email: </H2>
                        <L>cmink2040@gmail.com</L>
                        <L>cmink@tsmks.com </L>
                        <L>cmink@starlightpath.studio </L>
                        <H2> Social Media: </H2>
                        <H3> This order of preference: </H3>
                        <L>  LinkedIn </L>
                        <L>Instagram</L>
                        <H2> Phone</H2>
                        +1 707 774 9127 <br/>
                    </div>

                    I will try to respond to all inquiries within 48 hours.
                </div>

            </div>
    )
}

const LmchkWindow = () => {
    return (
            <div className="fadein flex flex-col pt-16 mx-64 px-16 bg-black border border-white overflow-y-auto h-screen text-white" >
                <div className={'text-md sans-serif pt-8 text-start'}>
                    This square is being updated. Maybe it will be out in the next update. <br/>

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

const LegalWindow = () => {
    return (

            <div className="fadein flex flex-col pt-16 mx-64 px-16 bg-black border border-white overflow-y-auto h-screen text-white" >
                <div className={'text-md sans-serif pt-8 text-start'}>
                    This square is being updated. Maybe it will be out in the next update. <br/>
                </div>

            </div>
    )
}

const GitlabWindow = () => {
    return (
            <div className="fadein flex flex-col pt-16 mx-64 px-16 bg-black border border-white overflow-y-auto h-screen text-white" >
                <div className={'text-md sans-serif pt-8 text-start'}>
                    <H1 >
                        Preferred Contact Methods: <br/>
                    </H1>
                    <div >
                        <H2> Email: </H2>
                        <L>cmink2040@gmail.com</L>
                        <L>cmink@tsmks.com </L>
                        <L>cmink@starlightpath.studio </L>
                        <H2> Social Media: </H2>
                        <H3> This order of preference: </H3>
                        <L>  LinkedIn </L>
                        <L>Instagram</L>
                        <H2> Phone</H2>
                        +1 707 774 9127 <br/>
                    </div>

                    I will try to respond to all inquiries within 48 hours.
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
                        <L> https://myanimelist.net/profile/cmink </L>

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

const DiscordWindow = () => {
    return (

            <div className="fadein flex flex-col pt-16 mx-64 px-16 bg-black border border-white overflow-y-auto h-screen text-white" >
                <div className={'text-md sans-serif pt-8 text-start'}>
                    This square is being updated. Maybe it will be out in the next update. <br/>
                </div>

            </div>
    )
}

const YtWindow = () => {
    return (

            <div className="fadein flex flex-col pt-16 mx-64 px-16 bg-black border border-white overflow-y-auto h-screen text-white" >
                <div className={'text-md sans-serif pt-8 text-start'}>
                    This square is being updated. Maybe it will be out in the next update. <br/>
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
