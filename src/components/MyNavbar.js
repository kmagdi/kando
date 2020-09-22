import React, {useState, useEffect} from 'react';
import {Navbar,Nav} from 'react-bootstrap';
//import {Link} from 'react-router-dom';
import {NavHashLink as Link} from "react-router-hash-link"
import './MyNavbar.css'

export const MyNavbar = () => {
    // lekéri milyen közel van a navbar a megadott elem aljához (0-1 közötti szám)
    const getNavbarOpacity = () => {
        const topBanner = document.getElementById('top-banner-container');
        if(topBanner == null || topBanner.getBoundingClientRect() == null){
            return 1.0;
        }else{
            const _value =  (window.innerHeight - document.getElementById('top-banner-container').getBoundingClientRect().bottom) / window.innerHeight;
            if(_value < 1.0){
                if(_value > 0.05){
                    return Math.round((_value + Number.EPSILON) * 1000) / 1000;
                }else{
                    return 0.0;
                }
            }else{
                return 1.0;
            }
        }
    };
    // state az átlátszóságra
    const [navbarState, setNavbarOpacity] = useState(0);
    // az oldal betöltésekor rábindolja a scrollra az onAppScroll függvényt
    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            // a navbar opacity statejét átállítja getNavbarOpacity()-re
            const opacity = getNavbarOpacity();
            setNavbarOpacity(opacity);
        });
    },[]);
    /*const onAppScroll = () => {
        const opacity = getNavbarOpacity();
        setNavbarOpacity(opacity);
    };*/
    /*const scrollToId = (path, id) => {
        if(window.location.pathname == '/'){
            const el = document.getElementById(id);
            if(el != null){
                //el.scrollIntoView();
                window.location = path + '#' + id;
            }
        }else{
            window.location = path + '#' + id;
        }
        window.location = path + '#' + id;
    };*/

    return (
        <Navbar style={{
            textDecoration: 'none',
            opacity: navbarState,
            display: navbarState===0?"none":"flex"
                }} collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
            <Link to="/#home"><Navbar.Brand>
                {/*<Link to="/">Kandópage</Link>*/}
                <img src={require('./assets/logo.png')} height="30px" alt="Kandó logo" />
            </Navbar.Brand></Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-snav">
                <Nav className="mr-auto">
                <Link to="/#iskola"><p className="nav-link link" role="button">Iskolánkról</p></Link>
                <Link to="/#szakok"><p className="nav-link link" role="button">Szakok...</p></Link>
                <Link to="/#footer"><p className="nav-link link" role="button">Elérhetőség</p></Link>
                </Nav>
                <Nav>
                <a href="http://www.kkando.hu/"><p className="nav-link link" role="button">Vissza a Kandó oldalára</p></a>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}
