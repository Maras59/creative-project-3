import { useState } from 'react';
import { Outlet, Link } from "react-router-dom";
import axios from 'axios';
import '../App.css';

//define vars here
//define 
  
function Main() {
  
    return (
        <div id="menuDiv">
            <div id="infoBox1">
            <Link id="l1" to="/characters">Character Info</Link>
            </div>
            
            <div id="infoBox2">
            <Link id="l2" to="/quotes">Quote Generator</Link>
            </div>
        </div>
    );
}; 

export default Main;