import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import {Link} from "react-router-dom";
import './MyCarousel.css';
import Truncate from 'react-truncate';
import csvToJSON from "./csvToJSON" 


export const MyCarousel=()=>{
    const [csvData,setcsvData]=useState([])
    const[loaded,setLoaded]=useState(false)
   
    useEffect(()=>{
    if(!loaded){
        const url="https://raw.githubusercontent.com/kmagdi/KSZC-Data/master/reszletekKK.csv"
    fetch(url)           
        .then(resp=>resp.text())
        .then(text=>{
            const adatokJSON=csvToJSON(text, ';')
            //console.log(adatokJSON)
            const filtered=adatokJSON.filter(obj=>obj.kod!==undefined&&obj.kod!=='0'&&obj.kod!=="")
            setcsvData(filtered)
        },[])
        setLoaded(true)
      }
    })

    return (
      
        <Carousel id="szakok" className="justify-content-center" interval={null} prevLabel="Előző szak" nextLabel="Következő szak">
        {
            csvData.map(i=>{
                return (
                    <Carousel.Item key={i.kod}>
                        <img src={require('./assets/' + i.kod + '.jpg')} alt="kep1" />
                        <Carousel.Caption>
                            <Link to={"/kkando/szak/" + i.kod}><h2>{i.nev}</h2></Link>
                            <Truncate lines={1} ellipsis={<>... <Link to={"/kkando/szak/" + i.kod}><br /><span className="read-more">Tovább</span></Link></>}>
                                <p>{i.kinek}</p>
                            </Truncate>
                        </Carousel.Caption>
                    </Carousel.Item>
                );
            })
        }
        </Carousel>
    );
}
