
type FormatLinkProps = {
    link: string;
    img: string;
    text: string;

}

const FormatLink = (props: FormatLinkProps) => {
    return (
        <a href={props.link} className='text-blue-400 p-3 rounded hover:bg-gray-500' target="_blank">
            <img src={props.img} alt={props.text} className='h-5'/>
        </a>
    );
}

export default FormatLink;