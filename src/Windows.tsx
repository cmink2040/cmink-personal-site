import CloseWindow from './src/CloseableWindow.tsx';
import './Transitions.css';
import {H1, H2, H3, L} from './src/DefaultCSSTemplates.tsx';
import './src/CloseableWindow.css'

const ResumeWindow = (props:any) => {
    return (
        <CloseWindow id={'RESUME'} show={props.on} setShow={props.setShow}>
            <div className="fadein flex flex-col pt-16 mx-64 px-16 bg-black border border-white overflow-y-auto h-screen text-white" >
                <div className={'text-md sans-serif pt-8 text-start'}>
                    <H1 >
                        My Resume <br/>
                    </H1>
                    <div >
                        <H2> Download my CV and Resume here! </H2>
                        <L>public.source.tsmks.com/cmk/resume/</L>
                        <L>public.source.tsmks.com/cmk/cv</L>
                        <br/>

                        <H2> Futher information can be found there. </H2>
                    </div>
                </div>

            </div>
        </CloseWindow>
    )
};
const SitePolicyWindow = (props:any) => {
    return (
        <CloseWindow show={props.on}  setShow={props.setShow}>
            <div className={'flex flex-col items-center justify-center w-3/5 h-screen bg-gray-400'}>
                Legal Info
            </div>
        </CloseWindow>
    )
}
const ContactWindow = (props:any) => {
    return (
        <CloseWindow id={'conwin'} show={props.on} setShow={props.setShow}>
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
    </CloseWindow>
    )
}
const SitePoliciesWindow = (props:any) => {
      return (
        <CloseWindow id={'spw'} show={props.on}  setShow={props.setShow}>
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
        </CloseWindow>
    )
}

const SiteInfoWindow = (props:any) => {
    return (
        <CloseWindow id={'SIW'} show={props.on} setShow={props.setShow}>
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
        </CloseWindow>
    )
}
const UpdatesWindow = (props:any) => {
    return (
        <CloseWindow id={'UW'} show={props.on} setShow={props.setShow}>
            <div className="fadein flex flex-col pt-16 mx-64 px-16 bg-black border border-white overflow-y-auto h-screen text-white" >
                <div className={'text-md sans-serif pt-8 text-start'}>
                    <H1 >
                        This square is being updated. Maybe it will be out in the next update. <br/>
                    </H1>

                </div>

            </div>
        </CloseWindow>
    )
}
const BlogWindow = (props:any) => {
    return (
        <CloseWindow id={'BW'} show={props.on} setShow={props.setShow}>
            <div className="fadein flex flex-col pt-16 mx-64 px-16 bg-black border border-white overflow-y-auto h-screen text-white" >
                <div className={'text-md sans-serif pt-8 text-start'}>
                    This square is being updated. Maybe it will be out in the next update. <br/>

                </div>

            </div>
        </CloseWindow>
    )
}
const TermsOfServiceWindow = (props:any) => {
    return (
        <CloseWindow id={'TOS'} show={props.on} setShow={props.setShow}>
            <div className="fadein flex flex-col pt-16 mx-64 px-16 bg-black border border-white overflow-y-auto h-screen text-white" >
                <div className={'text-md sans-serif pt-8 text-start'}>
                    This square is being updated. Maybe it will be out in the next update. <br/>
                </div>

            </div>
        </CloseWindow>
    )
}
const TsmksWindow = (props:any) => {
    return (
        <CloseWindow id={'TSMKS'} show={props.on} setShow={props.setShow}>
            <div className="fadein flex flex-col pt-16 mx-64 px-16 bg-black border border-white overflow-y-auto h-screen text-white" >
                <div className={'text-md sans-serif pt-8 text-start'}>
                    This square is being updated. Maybe it will be out in the next update. <br/>
                </div>

            </div>
        </CloseWindow>
    )
}

const StarlightXWindow = (props:any) => {
    return (
        <CloseWindow id={'Starlight'} show={props.on} setShow={props.setShow}>
            <div className="fadein flex flex-col pt-16 mx-64 px-16 bg-black border border-white overflow-y-auto h-screen text-white" >
                <div className={'text-md sans-serif pt-8 text-start'}>
                    This square is being updated. Maybe it will be out in the next update. <br/>
                </div>

            </div>
        </CloseWindow>
    )
}

const PrivacyPolicyWindow = (props:any) => {
    return (
        <CloseWindow id={'PrivacyPolicy'} show={props.on} setShow={props.setShow}>
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
        </CloseWindow>
    )
}

const LmchkWindow = (props:any) => {
    return (
        <CloseWindow id={'LMCHK'} show={props.on} setShow={props.setShow}>
            <div className="fadein flex flex-col pt-16 mx-64 px-16 bg-black border border-white overflow-y-auto h-screen text-white" >
                <div className={'text-md sans-serif pt-8 text-start'}>
                    This square is being updated. Maybe it will be out in the next update. <br/>

                </div>

            </div>
        </CloseWindow>
    )
}

const FunStuffWindow = (props:any) => {
    return (
        <CloseWindow id={'FSW'} show={props.on} setShow={props.setShow}>
            <div className="fadein flex flex-col pt-16 mx-64 px-16 bg-black border border-white overflow-y-auto h-screen text-white" >
                <div className={'text-md sans-serif pt-8 text-start'}>
                    This square is being updated. Maybe it will be out in the next update. <br/>
                </div>

            </div>
        </CloseWindow>
    )
}

const LegalWindow = (props:any) => {
    return (
        <CloseWindow id={'LW'} show={props.on} setShow={props.setShow}>

            <div className="fadein flex flex-col pt-16 mx-64 px-16 bg-black border border-white overflow-y-auto h-screen text-white" >
                <div className={'text-md sans-serif pt-8 text-start'}>
                    This square is being updated. Maybe it will be out in the next update. <br/>
                </div>

            </div>
        </CloseWindow>
    )
}

const GitlabWindow = (props:any) => {
    return (
        <CloseWindow id={'GITLAB'} show={props.on} setShow={props.setShow}>
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
        </CloseWindow>
    )
}

const AnimeWindow = (props:any) => {
    return (
        <CloseWindow id={'Anime'} show={props.on} setShow={props.setShow}>

            <div className="fadein flex flex-col pt-16 mx-64 px-16 bg-black border border-white overflow-y-auto h-screen text-white" >
                <div className={'text-md sans-serif pt-8 text-start'}>
                    This square is being updated. Maybe it will be out in the next update. <br/>
                </div>

            </div>
        </CloseWindow>
    )
}

const DiscordWindow = (props:any) => {
    return (
        <CloseWindow id={'DISCORD'} show={props.on} setShow={props.setShow}>

            <div className="fadein flex flex-col pt-16 mx-64 px-16 bg-black border border-white overflow-y-auto h-screen text-white" >
                <div className={'text-md sans-serif pt-8 text-start'}>
                    This square is being updated. Maybe it will be out in the next update. <br/>
                </div>

            </div>
        </CloseWindow>
    )
}

const YtWindow = (props:any) => {
    return (
        <CloseWindow id={'YTLIVE'} show={props.on} setShow={props.setShow}>

            <div className="fadein flex flex-col pt-16 mx-64 px-16 bg-black border border-white overflow-y-auto h-screen text-white" >
                <div className={'text-md sans-serif pt-8 text-start'}>
                    This square is being updated. Maybe it will be out in the next update. <br/>
                </div>

            </div>
        </CloseWindow>
    )
}

const MyDreamWindow = (props:any) => {
    return (
        <CloseWindow id={'DREAM'} show={props.on} setShow={props.setShow}>

            <div className="fadein flex flex-col pt-16 mx-64 px-16 bg-black border border-white overflow-y-auto h-screen text-white" >
                <div className={'text-md sans-serif pt-8 text-start'}>
                    This square is being updated. Maybe it will be out in the next update. <br/>
                </div>

            </div>
        </CloseWindow>
    )
}

export default {ResumeWindow, SitePolicyWindow, ContactWindow,SitePoliciesWindow, SiteInfoWindow, UpdatesWindow, BlogWindow, TermsOfServiceWindow, TsmksWindow, StarlightXWindow, PrivacyPolicyWindow, LmchkWindow, FunStuffWindow, LegalWindow, GitlabWindow, AnimeWindow, DiscordWindow, YtWindow, MyDreamWindow}

