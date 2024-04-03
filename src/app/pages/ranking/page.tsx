'use client'

import ImageHover from "src/app/components/ImageHover"

export default function Page() {
    return (

        <div className="fadein flex flex-col pt-16 mx-64 px-16 bg-black border border-white overflow-y-auto h-screen text-white" >
            <div className={'text-md sans-serif pt-8 text-start'}>
                <h1>
                    Anime
                </h1>
                <h4>
                    I like anime and I watch it in my free time. I have a few favorites that I'll list here.
                    <div> https://myanimelist.net/profile/cmink </div>

                </h4>
                <br/>
                <h4>
                    I'll be implemented a chat here for people to talk about anime here at some point.
                    Stay tuned.
                </h4>
                    <div className={'flex flex-row space-x-2'}>
                        <ImageHover src={'/oshinoko.jpg'} alt={'anime'} title={'Oshi no Ko'}
                        link={'https://myanimelist.net/anime/52034/Oshi_no_Ko'}
                        description={'A show about mysterious idle groups and their fans. I liked this show alot.' +
                            'It was kind of a mystery and I liked the characters. Overall was enjoyable.'}
                        imgClassName={'w-full h-full object-cover'}
                        />
                        <ImageHover src={'/kiminouso.jpg'} alt={'anime'} title={'Your lie in April'}
                                    link={'https://myanimelist.net/anime/23273/Shigatsu_wa_Kimi_no_Uso'}
                                    description={'Still my favorite anime. One of my first animes I watched.'}
                                    imgClassName={'w-full h-full object-cover'}
                        />
                        <ImageHover src={'/kst.jpg'} alt={'anime'} title={'I want to eat your pancreas'}
                                    link={'https://myanimelist.net/anime/36098/Kimi_no_Suizou_wo_Tabetai'}
                                    description={'Dark, but at the same time, very interesting and ' +
                                        'has a nice ending.'}
                                    imgClassName={'w-full h-full object-cover'}
                        />


                    </div>
                <div className={'text-center mt-20'}>
                    <h1>
                        Stay tuned for more updates!
                    </h1>
                </div>

            </div>

        </div> )
}