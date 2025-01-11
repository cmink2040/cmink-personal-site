import Link from 'next/link';
import '../styles/Fonts.css';
/*
     <Text>
                            
                              Cmink is a programmer. He is currently working on various of
                        projects, including NN Models, websites and applications, and more. He also is a member of LMCHK,
                        a group for his fun projects and research. CMinK dreams of creating a world where everything is connected and move the world forward fully
                        to the cloud by 2040 through a combination of software, hardware, and AI technologies. 
                        While not working, CMinK enjoys playing video games, watching anime, and reading manga. He
                        also enjoys catching up on the latest tech news and learning new things.
                      
                        </Text>
*/
import FormatLink from "../components/FormatLink";

type reactChildren = {
    children:React.ReactNode
}

const Title = (props: reactChildren) => {
    return   (<div className='text-xl text-white font-SfPro py-1 font-bold'>  {props.children} </div>)

}

const Header = (props: reactChildren) => {
    return   (<div className='text-md text-white font-SfPro py-1 font-bold'>  {props.children} </div>)

}

const Text = (props:reactChildren) => {
    return (
      <div className='text-start text-sm text-white  font-SfPro'>{props.children}</div>
    )
}

const Homepage = () => {
    return (
        <div className='w-full snap-mandatory snap-y p-4 bg-black text-white font-SfPro'>
         
   
            <div className=' snap-center'>
                <div className='flex flex-col'>
                    <div className=' '>

                        <Title> Introduction </Title>
                   
                    </div>


                    <div className='  flex flex-row text-white  items-center'>
                                cmink2040@gmail.com 
                                +1 (707) 774 9127 
                            <FormatLink link='https://www.github.com/cmink2040' text='Github'
                                        img='/assets/github-mark/github-mark-white.png'/>

                          
                    
                    </div>

                </div>
            </div>

            <Title> Interests </Title>

            <Text>
                I have interests in disciplines such as computer science, electrical and biomedical engineering, and chemistry. I don't have 
                a main interest but I'd say I'm the best at chemistry. When building a project, I always consider if they align with my interests and strength.
            </Text>

            <Header> Chemistry </Header>

            <ul className='list-disc text-sm pb-2'> 
                <li> Undergraduate Research (Onboarding) </li>
                <li> Significant Coursework in Chemistry </li>
                <li> National Finalist, US National Chemistry Olympiad </li>
                <li> SSTFI, Ongoing research about Biomolecules. </li>
            </ul>

            
            <Header> Electrical Engineering </Header>

            <ul className='list-disc text-sm pb-2'> 
                <li> Coursework past engineering foundation to specialized topics; Mainly electronics. </li>
                <li> Relevant Project: RT-FPGA, involvement in FPGA design of raytracing. </li>
            </ul>

            <Header> Biomedical Engineering </Header>

            <ul className='list-disc text-sm pb-2'> 
                <li> Research Internship, IP. Neuroscience </li>
                <li> Introductory Biology Classes. </li>
                <li> JS-HS Research Regarding AI/ML algorithms in Dementia </li>
                <li> Participating in USABO, 2025 </li>
            </ul>

            <Header> Computer Science </Header>

            <ul className='list-disc text-sm pb-2'> 
                <li> Moderate Coursework. </li>
                <li> Significant Relavent Projects. Check Github for details. </li> 
                <li> USACO </li> 
            </ul>

            <Header> World Languages </Header>

            <ul className='list-disc text-sm pb-2'> 
                <li> 2-3d year Chinese. Native chinese household.  </li>
                <li> Japanese(self-study) - Approx N2 level, preparing for last level N1. Will be taking N1 JPLT in July, and Kanken 2 in June. 5+ YoE watching Anime.</li>
            </ul>



   

            <Header> Personal Website Details </Header>
            <Text>
                This website was built off of NextJS in react. 
                There are other pages beside this main page, see the menu.    
            </Text>

            <Title> Coursework </Title>

            <Text>
            <Link href='/pages/coursework' className='text-blue-500 underline'>
                   See here
                </Link>
            </Text>
            </div>

    );
}

export default Homepage