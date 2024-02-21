import React from 'react';

import { useParallax, useParallaxController } from 'react-scroll-parallax';

function ParallaxHook() {

    const parallax = useParallax({ speed: -20 });
    const parallax2 = useParallax({ speed: 20 });

    return (
        <>

            <div ref={parallax.ref}  >ParallaxHook</div>
            <div ref={parallax2.ref}  >ParallaxHook2</div>

        </>
    );
}

export function ParallaxForImg() {
    const parallaxController = useParallaxController()
    return (<div> <img src={`${process.env.PUBLIC_URL}/MarketRecap_BlogThumbnail450x2561x-2.png`} onLoad={() => parallaxController.update()} alt="" /></div>);
}


export { ParallaxHook as default }