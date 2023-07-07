import 'tailwindcss/tailwind.css';
import { useState, useEffect, useRef } from 'react';

function NavBar(props: any) {
    const [currentURL, updateURL] = useState(props)
    props = props || {};
    return (

        // import LOGO
        <div className='flex justify-center space-x-4 py-4'>
            <p className='font-bold'>CMinK</p>
            <p>About</p>
            <p>Projects</p>
            <p>Menu</p>
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
        setTimeout(() => {
         
    if(currentIndex < words.length) { 
        setText(text + words.charAt(currentIndex));
        setCurrentIndex(currentIndex + 1);
    }
}, props.typing);

    if (text === words) {
        console.log("done");
        (async () => {
            await new Promise((resolve) => setTimeout(resolve, props.ending)); // Wait for 2000 milliseconds (2 seconds)
            setText('');
            console.log('After');
          })();
        return;
    }

  }, [text, currentIndex, words]);

  if(text.length > 0)
  return <h1>{text}</h1>;
    else
  return;
};

interface WordSequenceProps{
    words: string[];
    typing: number;
    ending: number;
    reloadSpeed: number;
}

function WordSequence(props: WordSequenceProps) {
    const typingSpeed = props.typing;
    const [index, setIndex] = useState(0);
    const [text] = useState(props.words);
    const [loadTime, changeReload] = useState(typingSpeed*text[index].length + props.ending)
    const [currentFeed, setFeed] = useState(props.words[0]);
    const [update, flip] = useState(true);
    const [x, setX] = useState<JSX.Element[]>([]);
   
    useEffect (() => {
        console.log("Set feed was updated: " + text[index] +" "+index);
        setFeed(text[index]);
    }, [index]);

    useEffect(() => {
        console.log(text.length + " " + index+" "+update)
        if(index<text.length)
         flip(true);
        else
            flip(false);
    }, [index]);

    useEffect(() => {
        changeReload(typingSpeed*text[index].length + props.ending);                
    }, [index]);

    useEffect(() => {
        (async () => {
            await new Promise((resolve) => setTimeout(resolve, 
                loadTime)); 
                const a = index;
            if(update) { 
                console.log("index: " + a + " text: " + text[a] + " length: " + text[a].length)
                setIndex(index+1);}
          })();
    }, [update]);

    useEffect(() => {
        if(update)
        setX((prevX) =>
        [...prevX, <TypingText key = {Math.random()}
            words={currentFeed} typing={typingSpeed} ending={props.ending}/>]);
    }, [currentFeed]);
    if(index<text.length)
    return (
     <>{x}</>
    );
    else
    return;
}


export {NavBar, TypingText, WordSequence};