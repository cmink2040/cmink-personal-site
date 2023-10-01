import {LazyImage} from "../Reuseable_Components/reuseComps.tsx";

type FormatSquareProps = {
    name: string;
    icon: string;
    command: () => void;
}
const FormatSquare = (props: FormatSquareProps) => {
    return (
        <div className='flex flex-col text-white justify-items-center aspect-square border border-gray-800
        hover:cursor-pointer hover:bg-gray-400 content-center rounded-lg py-2\
        transition duration-300'
             onClick = {props.command}>
            <LazyImage src={props.icon} className='w-auto h-3/5 mx-5 mt-5 rounded-2xl' alt='icon'/>
            <p className='text-center pb-2 text-sm'>        {props.name} </p>

        </div>
    );
}

export default FormatSquare;