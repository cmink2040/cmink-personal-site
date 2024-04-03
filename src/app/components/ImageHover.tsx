import { useState } from "react";

type ImageProps = {
    link: string
    title: string
    description: string

    src: string
    alt: string
    imgClassName: string

}
const ImageHover = (props:ImageProps) => {
    const [didHover, setDidHover] = useState(false);
    const toggle = () => {
        setDidHover((prev) => !prev);
    }
    return(
        <a className={'relative z-50'} href={props.link}  onMouseLeave={toggle} onMouseEnter={toggle}>
            {
                didHover ?
                    <div>
                    <div className={'absolute inset-x-0 text-center z-30 text-white bg-black slideBB-in'}>
                        {props.title}
                    </div>
                    <div className={'absolute inset-x-0 bottom-0 text-center z-30 text-white bg-black slideTT-in'}>
                        {props.description}
                    </div>

                    </div>:
                    null
            }
            <img src={props.src} alt={props.alt} className={props.imgClassName}

             />
        </a>
    );
}

export default ImageHover