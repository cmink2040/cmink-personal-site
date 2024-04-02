
type FormatLinkProps = {
    link: string;
    img: string;
    text: string;

}

const FormatLink = (props: FormatLinkProps) => {
    return (
        <a href={props.link} className='text-blue-400 col-span-1 p-2 border
         border-1 border-gray-600 rounded hover:bg-gray-500'>
            <img src={props.img} alt={props.text} className='h-5'/>
        </a>
    );
}

export default FormatLink;