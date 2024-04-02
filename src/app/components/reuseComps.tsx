import {MutableRefObject, useEffect, useRef, useState} from 'react';
import '../CSS/Transitions.css';


const SelectDropdownBar = (props: any) => {
    const [open, setOpen] = useState(false);
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

const ScreenBlocker = (props: any) => {
    return (
        <div className={props.className}>
            {props.children}

        </div>
    );
}

const LazyImage = (props: any) => {
    const imageRef = useRef(null);

    useEffect(() => {
        const options = {
            root: null, // Use the viewport as the root element
            rootMargin: '0px', // No margin
            threshold: 0.1, // Trigger when 10% of the image is visible
        };

        const callback = (entries: any) => {
            entries.forEach((entry: any) => {
                if (entry.isIntersecting) {
                    // Image is visible, load it
                    entry.target.src = props.src;
                    entry.target.classList.add('slideT-in');
                    // observer.unobserve(entry.target); // Unobserve to avoid repetitive triggers
                } else {
                    entry.target.src = '';
                    entry.target.classList.remove('slideT-in');
                }
            });
        };

        const observer = new IntersectionObserver(callback, options);
        if (imageRef.current) observer.observe(imageRef.current);

        return () => {
            if (imageRef.current) observer.unobserve(imageRef.current);
        };
    }, [props.src]);

    return <img ref={imageRef} alt={props.alt} className={props.className}/>;
};
const LazyRender = (props: any) => {
    const containerRef = useRef(null);
    useEffect(() => {
        const options = {
            root: null, // Use the viewport as the root element
            rootMargin: '0px', // No margin
            threshold: 0.1, // Trigger when 80% of the container is visible
        };

        const callback = (entries: any) => {
            entries.forEach((entry: any) => {
                if (entry.isIntersecting) {
                    // Children are visible, render them
                    entry.target.classList.remove('invisible');
                    entry.target.classList.add(props.direction)
                    //observer.unobserve(entry.target); // Unobserve to avoid repetitive triggers
                } else {
                    entry.target.classList.remove(props.direction)
                    entry.target.classList.add('invisible');
                }
            });
        };

        const observer = new IntersectionObserver(callback, options);
        if (containerRef.current) observer.observe(containerRef.current);

        return () => {
            if (containerRef.current) observer.unobserve(containerRef.current);
        };
    }, []);

    return <div ref={containerRef} className={props.className}>
        {props.children}
    </div>;
};

const BackgroundImage = (props: any) => {
    return (
        <div className={props.className + ' overflow-hidden'}>
            <img src={props.src} alt={props.alt} className={props.ImageClassName}/>
            {props.children}
        </div>
    );
};


export {SelectDropdownBar, ScreenBlocker, LazyImage, LazyRender, BackgroundImage};
