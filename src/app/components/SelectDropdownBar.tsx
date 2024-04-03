/*
import {MutableRefObject, useEffect, useRef, useState} from 'react';

type SelectDropdownBarProps = {
    setParent: Function
    className: string
}

const SelectDropdownBar = (props: SelectDropdownBarProps) => {
/*    const [open, setOpen] = useState(false);
    const componentRef = useRef() as MutableRefObject<HTMLDivElement>;
    const toggleOpen = () => {
        setOpen((prev) => !prev);
        console.log("Open was called! ", open)
    };
    const setParent = (option: any) => {
        console.log("Parent was called! ", option)
        props.setParent(option);
    }
    useEffect(() => {
        console.log("Open was changed! ", open)
    }, [open]);

    const OptChoice = (props: any) => {
        const setParent = () => {
            props.close(props.option);
        }

        return (
            <div onClick={setParent} className={props.className}>
                {props.option}
            </div>
        );
    }


    useEffect(() => {

        const handleClick = (e: any) => {
            if (componentRef.current.contains(e.target)) {
                console.log("Clicked Inside");
            } else if (open) {
                setOpen(false);
            }
        }


        document.addEventListener('click', handleClick);

        return () => {
            document.removeEventListener('click', handleClick);
        }

    }, []);

    return (
        <div className={props.className} onClick={toggleOpen} ref={componentRef}>
            {props.defaultValue}

            {open ?
                <div>
                    {props.selectOpt.map((option: any, index: any) => (
                        <OptChoice className={props.className} key={index} option={option} close={setParent}/>
                    ))}
                </div> : null
            }
        </div>
    );
    
}

export default SelectDropdownBar
*/