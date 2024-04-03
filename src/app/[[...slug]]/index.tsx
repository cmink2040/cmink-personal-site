import {useEffect, useState} from 'react';

import '../styles/Fonts.css';

import FormatLink from "../components/Formats/FormatLink";

const Title = (props: any) => {
    return   (<div className='text-xl text-white font-SfPro py-1'>  {props.title} </div>)

}

const Header = (props: any) => {
    return   (<div className='text-lg text-white font-SfPro py-1'>  {props.title} </div>)

}

const Homepage = () => {

    const [lang, setLang] = useState('EN');

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


    return (
        <div className='w-full  h-screen snap-mandatory snap-y p-4 bg-black text-white font-SfPro'>


            <div className=' snap-center'>
                <div className='flex flex-col'>
                    <div className=' '>

                        <Title title='Introduction'/>
                        <div className='text-start text-sm text-white  font-SfPro '>

                            Cmink is a programmer. He is currently working on various of
                            projects, including NN Models, websites and applications, and more. He also is a member of LMCHK,
                            a group for his fun projects and research. CMinK dreams of creating a world where everything is connected and move the world forward fully
                            to the cloud by 2040 through a combination of software, hardware, and AI technologies. 
                            While not working, CMinK enjoys playing video games, watching anime, and reading manga. He
                            also enjoys catching up on the latest tech news and learning new things.
                        </div>
                    </div>


                    <div className='  flex flex-row text-white  items-center'>
                                cmink2040@gmail.com 
                                +1 (707) 774 9127 
                            <FormatLink link='https://www.github.com/cmink2040' text='Github'
                                        img='/assets/github-mark/github-mark-white.png'/>

                            <FormatLink link='https://www.youtube.com/channel/UC4QXq1XQZoY5Z5qZ4X6Z3jQ' text="YouTube"
                                        img='/assets/brand-monochrome-logos/yt_logo_mono_dark.png'/> 
           
                    
                    </div>

                </div>
            </div>

            <Title title="Interests" />

            <div>
                I have interests in disciplines such as computer science, electrical and biomedical engineering, and chemistry. I don't have 
                a main interest but I'd say I'm the best at chemistry. When building a project, I always consider if they align with my interests and strength.
            </div>

            <Header> Chemistry </Header>
            <ul className='px-4'> 
                <li> - Sythesizing organic compounds and running procedures in a laboratory. </li>
                <li> - Using computation simulations to solve difficult chemistry problems. </li>
                <li> - Redesigning chemical procedures to be more enviromental friendly, cost effective, and practicle </li>
            </ul>

            <div> 
                One of my main reasons for being interested in chemistry because chemistry lays an important foundation for many other fields. In what I want my skills
                to amount to, technology, chemistry may never be encountered. This isn't because chemistry isn't there; it's that majority of the work has already been done.
                Furthermore, foundations of chemistry can be taken for granted. A conductor will always conduct current. Despite that, chemistry paves the way to optimization.
                Chemistry may allow devising a new procedure to purify titanium. Or it may allow procedure that requires significantly less steps to sythesize an organic compound, which 
                span in purpose like medicine or OLED screens.

            </div>

            <Title title="Projects" />
                    <div> Website(CMinK)  </div>
            

            </div>

    );
}

export default Homepage