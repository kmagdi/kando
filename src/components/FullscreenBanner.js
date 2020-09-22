import React from 'react'
import {MyParallax} from './MyParallax';

export const FullscreenBanner = (props)=>{
    const imageExists = props.image!==undefined;
    const titleExists = props.title!==undefined;
    return (
        <MyParallax
            div="top-banner-container"
            img={props.bgimage===undefined?require('./assets/eszt.png'):props.bgimage}
            amount={0.15}
            height={'100vh'}
        >
            <div className="kozep">
                {imageExists?
                    <img src={props.image} id="welcome-image-logo" alt="logo" className="fade-in-img"></img>
                : null}
                {titleExists?
                    imageExists?
                        <p id="welcome-text" className="fade-in-p">{props.title}</p>
                    :
                        <h1 id="welcome-title" className="fade-in-h">{props.title}</h1>
                : null}
            </div>
        </MyParallax>
    );
};