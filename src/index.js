import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import 'bootstrap/dist/css/bootstrap.min.css';   
import './index.css';
import {Helper} from './Helper'

const initScript = ()=>{
    //window.addEventListener('resize',onResize);
    window.addEventListener('beforeunload', () => {
        Helper.scrollToTop();
    });
}

initScript();
ReactDOM.render(<App />, document.getElementById('root'));
