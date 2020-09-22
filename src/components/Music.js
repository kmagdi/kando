import React from 'react'
import ReactHowler from 'react-howler'
import zene from "./assets/T1.mp3"

export const Music=()=> {
    return <ReactHowler  src={[zene]}  playing={true} volume={0.15} />
}