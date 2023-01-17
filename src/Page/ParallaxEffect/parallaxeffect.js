import  React , { useRef } from "react";
import bg1 from '../../Assets/anime bg paralllax/bg1.jpg'
import bg2 from '../../Assets/anime bg paralllax/bg2.jpg'
import bg3 from '../../Assets/anime bg paralllax/bg3.jpg'
import bg4 from '../../Assets/anime bg paralllax/bg4.jpg'
import gif from '../../Assets/anime bg paralllax/front gif.gif'
import "./parallaxeffect.css"

import { Parallax, ParallaxLayer } from '@react-spring/parallax';

export default function Parallaxeffect (){

    const ref = useRef();

    return(
        <div className="overflow-hidden">
            <Parallax pages={4} ref={ref}>

                {/* gif */}
                <ParallaxLayer
                sticky={{ start: 0.9, end: 2.5 }}
                >
                <img className="m-auto" src={gif} />
                </ParallaxLayer>

                <ParallaxLayer 
                    offset={0} 
                    speed={1} 
                    factor={2}
                    style={{
                        backgroundImage: `url(${bg1})`,
                        backgroundSize: 'cover',
                    }}
                />

                <ParallaxLayer 
                    offset={1} 
                    speed={1} 
                    factor={2}
                    style={{
                        backgroundImage: `url(${bg2})`,
                        backgroundSize: 'cover',
                    }}
                />

                {/* <ParallaxLayer 
                    offset={2} 
                    speed={1} 
                    factor={1}
                    style={{
                        backgroundImage: `url(${bg3})`,
                        backgroundSize: 'cover',
                    }}
                /> */}

                <ParallaxLayer 
                    offset={2} 
                    speed={1} 
                    factor={3}
                    style={{
                        backgroundImage: `url(${bg4})`,
                        backgroundSize: 'cover',
                    }}
                />

                

                <ParallaxLayer  
                    offset={0.2}
                    speed={0.05}
                >
                    <h1 
                        onClick={() => ref.current.scrollTo(3)}
                        className="font-extrabold text-9xl text-center font-size text-1-sec4 uppercase">big cool namenasdas</h1>
                </ParallaxLayer>

                <ParallaxLayer 
                    offset={3}
                    speed={2} 
                    onClick={() => ref.current.scrollTo(0)}             
                >
                    <h1 className="mt-32 font-extrabold text-9xl text-center font-size text-1-sec4 uppercase">hi to your friensdasa</h1>
                </ParallaxLayer>

            </Parallax>
        </div>
    );
}