import {MutableRefObject, useEffect, useRef, useState} from 'react';
import '../CSS/Transitions.css';


/*
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


export {ScreenBlocker, LazyImage, LazyRender, BackgroundImage};

*/
