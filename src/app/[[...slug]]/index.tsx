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

                            <FormatLink link='https://www.youtube.com/channel/UC4QXq1XQZoY5Z5qZ4X6Z3jQ' text="YouTube"
                                        img='/assets/brand-monochrome-logos/yt_logo_mono_dark.png'/> 
           
                    
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
                <li> Organic Chemistry Labotory </li>
                <li>  Computation Chemistry </li>
                <li> Reaction Optimization</li>
            </ul>

            <Text> 
                One of my main reasons for being interested in chemistry because chemistry lays an important foundation for many other fields. In what I want my skills
                to amount to, technology, chemistry may never be encountered. This isn't because chemistry isn't there; it's that majority of the work has already been done.
                Furthermore, foundations of chemistry can be taken for granted. A conductor will always conduct current. Despite that, chemistry paves the way to optimization.
                Chemistry may allow devising a new procedure to purify titanium. Or it may allow procedure that requires significantly less steps to sythesize an organic compound, which 
                span in purpose like medicine or OLED screens.
            </Text>

            <Header> Electrical Engineering </Header>

            <ul className='list-disc text-sm pb-2'> 
                <li> Computer Aided Design </li>
                <li> Printed Circuit Boards </li>
            </ul>

            <Header> Biomedical Engineering </Header>

            <ul className='list-disc text-sm pb-2'> 
                <li> Medical Devices </li>
                <li> Biophysics </li>
                <li> Neurology </li>
            </ul>

            <Header> Computer Science </Header>

            <ul className='list-disc text-sm pb-2'> 
                <li> Software Development </li>
                <li> AI and Machine Learning</li> 
                <li> Competitive Programming</li> 
            </ul>

            <Header> World Languages </Header>

            <ul className='list-disc text-sm pb-2'> 
                <li> Chinese </li>
                <li> Japanese </li>
            </ul>



            <Title > Projects  </Title>

            <Text> 
                Majority of my projects are programming projects. This is because of the reliability
                and avaliability of resources I have. I can always program, but I can't always run
                experiments in the lab.
            </Text>

            <Header> Personal Website  </Header>
            <Text>
                This website was built off of NextJS in react. There are other pages beside this main page, see 
                the menu.    
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