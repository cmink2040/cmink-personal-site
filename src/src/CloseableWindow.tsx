import {useState} from 'react';
const CloseWindow = (props:any) => {
    const handleClose = () => {
        props.setShow(false);
    };


    const className = props.className !== undefined ? props.className : 'fixed w-full z-20 flex justify-center ';
    const [exitClassName] = useState(props.exitComponentClassName !== undefined ? props.exitComponentClassName :
        'absolute bg-red-300 p-3 border rounded-full mt-4 border-white hover:cursor-pointer hover:bg-red-400 text-white');
    const exitComp = props.exitComponent !== undefined ? props.exitComponent : '';

    console.log(exitClassName);
    return props.show ? (
        <div className={className}>
            <div className={exitClassName} onClick={handleClose}>
                {exitComp}
            </div>
            {props.children}
        </div>
    ) : null;
};

export default CloseWindow;
