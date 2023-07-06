import 'tailwindcss/tailwind.css';

function NavBar(props: any) {
    props = props || {};
    return (

        // import LOGO
        <div className='flex justify-center space-x-4 py-4'>
            <p className='font-bold'>CMinK</p>
            <p>About</p>
            <p>Projects</p>
            <p>Menu</p>
        </div>
    );
}

export {NavBar};