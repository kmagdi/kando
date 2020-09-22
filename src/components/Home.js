import React from 'react';
import CollectData from "./CollectData"
import { MyCarousel } from './MyCarousel';  
import { MyParallax } from './MyParallax';
import { FullscreenBanner } from './FullscreenBanner';
import { InfoPanel } from './InfoPanel';

export const Home=()=>{
    const tempSeparator = <div style={{backgroundColor:'#eee',height:'200px'}}></div>;
    return(
        <div>
            <FullscreenBanner id="home" bgimage={require('./assets/eszt.png')} image={require('./assets/logo.png')} title={'UNDER CONSTRUCTION'} />
            <InfoPanel id="iskola" size={6} type="centerInfo" title="Iskolánkról..." text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus risus diam, euismod non orci ut, ornare varius eros. Cras pellentesque, sapien in consequat accumsan, nunc quam pulvinar nulla, sodales rhoncus diam mi vitae tellus. Nunc vulputate ligula nisl, id dignissim turpis vulputate sed. Aliquam tincidunt porttitor odio sed vulputate. Aliquam sit amet maximus mi, a fringilla urna. Ut quis sem a mauris facilisis rhoncus. Fusce malesuada arcu est, volutpat pellentesque est tincidunt vel. Quisque porta erat orci, vel efficitur sem cursus id. Curabitur dignissim lorem in dui aliquam, in cursus metus volutpat. Suspendisse porttitor augue mollis nibh dignissim, vel suscipit tortor placerat. Nulla faucibus, justo et ornare molestie, tortor purus faucibus lectus, at efficitur erat ex et mauris. In congue diam non risus suscipit ultrices." />
            <MyParallax img={require('./assets/eszt2.jpg')} amount={0.25} height={'40vh'} sizeToContent={true}>
                <InfoPanel id="asd" bold={true} type="centerInfo" bgColor={"rgba(255,255,255,0.5)"} nomargin={true} height={'40vh'} text='"Az iskola arra való, hogy az ember megtanuljon tanulni, hogy felébredjen tudásvágya, megismerje a jól végzett munka örömét, megízlelje az alkotás izgalmát, és megtalálja a munkát, amit szeretni fog." (Szentgyörgyi Albert) [DESIGN MÉG NEM KÉSZ]' from={{opacity:0,scaleX:0.5,scaleY:0.5,ease:'power4.out'}} to={{opacity:1,scaleX:1.0,scaleY:1.0,ease:'power4.out'}} />
            </MyParallax>
            <InfoPanel id="else" className="sidebyside-margins" type="sideBySide" title="Something else" text="Valami más is jöhetne ide, csak hogy ne egyből parallax után következzenek a szakok. Valami más is jöhetne ide, csak hogy ne egyből parallax után következzenek a szakok. Valami más is jöhetne ide, csak hogy ne egyből parallax után következzenek a szakok. Valami más is jöhetne ide, csak hogy ne egyből parallax után következzenek a szakok. Valami más is jöhetne ide, csak hogy ne egyből parallax után következzenek a szakok. Valami más is jöhetne ide, csak hogy ne egyből parallax után következzenek a szakok. Valami más is jöhetne ide, csak hogy ne egyből parallax után következzenek a szakok. Ne egyből parallax után következzenek a szakok." image={require('./assets/eszt.png')} from={{opacity:0,x:200,ease:'power4.out'}} to={{opacity:1,x:0,ease:'power4.out'}} />
            <MyParallax img={require('./assets/eszt2.jpg')} amount={0.25} height={'40vh'} sizeToContent={true}>
                <InfoPanel id="asd2" bold={true} type="centerInfo" bgColor={"rgba(255,255,255,0.5)"} nomargin={true} height={'40vh'} text='“Egyikünk élete sem könnyű. És akkor? Legyen bennünk kitartás, és mindenekelőtt bízzunk önmagunkban. Hinnünk kell benne, hogy tehetségesek vagyunk valamiben, és ezt a valamit -kerül, amibe kerül- meg tudjuk valósítani.” (Marie Curie) [DESIGN MÉG NEM KÉSZ]' from={{opacity:0,scaleX:0.5,scaleY:0.5,ease:'power4.out'}} to={{opacity:1,scaleX:1.0,scaleY:1.0,ease:'power4.out'}} />
            </MyParallax>
            <InfoPanel id="else2" className="sidebyside-margins" type="sideBySide" title="Something else" text="Valami más is jöhetne ide, csak hogy ne egyből parallax után következzenek a szakok. Valami más is jöhetne ide, csak hogy ne egyből parallax után következzenek a szakok. Valami más is jöhetne ide, csak hogy ne egyből parallax után következzenek a szakok. Valami más is jöhetne ide, csak hogy ne egyből parallax után következzenek a szakok. Valami más is jöhetne ide, csak hogy ne egyből parallax után következzenek a szakok. Valami más is jöhetne ide, csak hogy ne egyből parallax után következzenek a szakok. Valami más is jöhetne ide, csak hogy ne egyből parallax után következzenek a szakok. Ne egyből parallax után következzenek a szakok." reverse={true} image={require('./assets/eszt.png')} from={{opacity:0,x:200,ease:'power4.out'}} to={{opacity:1,x:0,ease:'power4.out'}} />
            <div id="szakok" className="row justify-content-center">
                <MyCarousel/>
            </div>
            <CollectData bgimage={require('./assets/eszt.png')} />
        </div>

    )
}