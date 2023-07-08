import 'tailwindcss/tailwind.css';
import { useState, useEffect, useRef } from 'react';

const EndBar = () => {
    return(
        <div className='sticky flex flex-row justify-center items-center space-x-4 py-4 w-full'>
        <p> Terms and Services</p>
        <p> Privacy Policy</p>
        <p> LMCHK Rules</p>
        <p> TSMKS NET Rules</p>
        <p> Legal</p>

        </div>
    );
}

function NavBar(props: any) {
    const [currentURL, updateURL] = useState(props)
    props = props || {};
    return (

        // import LOGO
        <div className='fixed flex justify-center items-center space-x-4 py-4 w-full'>
            <p className='hover:font-bold hover:text-color-gray-800 hover:cursor-pointer'>CMinK</p>
            <p className='hover:font-bold hover:text-color-gray-800 hover:cursor-pointer'>About</p>
            <p className='hover:font-bold hover:text-color-gray-800 hover:cursor-pointer'>Projects</p>
            <p className='hover:font-bold hover:text-color-gray-800 hover:cursor-pointer'>Menu</p>
        </div>
    );
}
interface TypingTextProps{

    words: string;
    typing: number;
    ending: number;

}
const TypingText = (props:TypingTextProps) => {
  const [text, setText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [words] = useState(props.words);

    useEffect(() => {
        console.log("CALLING TYPINGTEXT ");
    },[])
    useEffect(() => {
        setTimeout(() => {   
    if(currentIndex < words.length) { 
        setText(text + words.charAt(currentIndex));
        setCurrentIndex(currentIndex + 1);
    }
}, props.typing);

    if (text === words) {
        (async () => {
            await new Promise((resolve) => setTimeout(resolve, props.ending)); // Wait for 2000 milliseconds (2 seconds)
            setText('');
          })();
        return;
    }

  }, [text, currentIndex, words]);

  if(text.length > 0)
  return <h1 className='text-3xl'>{text}</h1>;
    else
  return;
};

interface WordSequenceProps {
    words: string[];
    typing: number;
    ending: number;
    reloadSpeed: number;
    status: any;
}
// INDEX Update -> Change Reload, , CurrentFeed, -> Update X -> INDEX UPDATE
function WordSequence(props: WordSequenceProps) {
    const typingSpeed = props.typing;
    const [text] = useState(props.words);

    const [loadTime, changeReload] = useState(0)
    const [index, setIndex] = useState(0);
   
    const [currentFeed, setFeed] = useState(props.words[0]);

    const [x, setX] = useState<JSX.Element[]>([]);
 
    // Updates the Index when ever X is updated
    useEffect(() => {
        console.log("Set index was updated");
        console.log(loadTime);
        (async () => { 
            await new Promise((resolve) => setTimeout(resolve, loadTime));
            setIndex(index+1);
        })();
    }, [x]);

        //Updates FeedBuffer when index is updated
    useEffect (() => {
        if(index >= text.length) return;
        console.log("Set feed was updated" );
        setFeed(text[index]);
    }, [index]);

    //Updates Reload when index is updated
    useEffect(() => {
        if(index>=text.length ) return;
        console.log("Set reload was updated.");
        changeReload(typingSpeed*text[index].length + props.ending);                
    }, [index]);

  //Updates X when FeedBuffer is updated
    useEffect(() => {
        console.log("SETX CALLED")
          setX((prevX) => [
            ...prevX,
            <TypingText
              key={index}
              words={currentFeed}
              typing={typingSpeed}
              ending={props.ending}
            />,
          ]);
      }, [currentFeed]);

      //Updates main header when done, signialling completed
      useEffect(() => {
        console.log("SIGNAL CALLED "+index+" "+text.length);
        if(index>=(text.length-1)) {
        console.log("COMPLETED");
        (async () => { 
            await new Promise((resolve) => setTimeout(resolve, loadTime));
            props.status();
            console.log("SIGNAL PASSED "+ index);
        })();
    }
        console.log("SIGNAL FAILED "+ index );
        
      }, [x]);

    if(index<text.length)
    return (
     <>{x}</>
    );
    else
    return;
}


export {NavBar, TypingText, WordSequence, EndBar};