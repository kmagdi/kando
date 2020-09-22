import React from 'react';
import {BrowserRouter,Route,Switch,Redirect} from "react-router-dom"
import {Szak} from "./components/Szak"
import {Home} from "./components/Home"
import {MyNavbar} from "./components/MyNavbar"
import { ParallaxProvider } from 'react-scroll-parallax'
import './App.css'

export const App=()=>{
console.log("This is the process.env=:"+process.env.PUBLIC_URL)
    return(
        
        <ParallaxProvider>
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <MyNavbar/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                  {/* <Route exact path="/kkando" component={Home}/>*/}
                    <Route exact path="/szak/:id" component={Szak} />
                   {/* <Route path="/kkando/szak/:id" component={Szak} />*/}
                

                    <Redirect to="/" />
                </Switch>
            </BrowserRouter>
        </ParallaxProvider>
    )
}
