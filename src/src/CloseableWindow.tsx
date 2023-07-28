import {useState, useEffect} from 'react';
import './Transitions.css';
const CloseWindow = (props:any) => {
   const  handleKeyPress = (event:any) => {
        // Check if the key pressed is the "Enter" key (key code 13)
        if (event.key === 'Enter' || event.key==='Escape') {
            handleClose();
            // Add your code to execute when the Enter key is pressed
        }
    };
   useEffect(() => {
       document.addEventListener('keydown', handleKeyPress);
       return () => {
           document.removeEventListener('keydown', handleKeyPress);
       };
   });

    const handleClose = () => {
        const element = document.getElementById(props.id);
        if(element===null) return;
        element.classList.add('fade-out');
        setTimeout(() => {
            props.setShow(false);
        }, 1000);
    };


    const className = props.className !== undefined ? props.className :
        'fixed w-full z-30 flex justify-center ';
    const [exitClassName] = useState(props.exitComponentClassName !== undefined ? props.exitComponentClassName :
        'z-50 absolute bg-red-500 rounded-full border p-2 text-center mt-4 border-white hover:cursor-pointer hover:bg-red-400 text-white');
    const exitComp = props.exitComponent !== undefined ? props.exitComponent :
    <img src={'./x.png'} className={'w-3 h-3'} alt={'x'}/>;


    return props.show ? (
        <div id={props.id} className={className}>
            <div className={exitClassName} onClick={handleClose}>
                {exitComp}
            </div>
            {props.children}
        </div>
    ) : null;
};

export default CloseWindow;
