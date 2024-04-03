import '../styles/working.css';
const H1 = (props: any) => {
    return (
        <div className={'text-2xl cursiveFong'}>{props.children}</div>
    )
}
const H2 = (props: any) => {
    return (
        <h2 className={'text-lg '+props.className}>{props.children}</h2>
    )
}

const H3 = (props: any) => {
    return (
        <h3 className={'text-md '+props.className}>{props.children}</h3>
    )
}

const H4 = (props: any) => {
    return (
        <h4 className={'text-sm '+props.className}>{props.children}</h4>
    )
}

const P1 = (props: any) => {
    return (
        <p className={'text-base text-center'}>{props.children}</p>
    )
}

const L = (props: any) => {
    return (
        <div className={'text-blue-500 underline text-md'}>
            {props.children}
        </div>);
}

export {H1, H2, H3, H4, P1, L};