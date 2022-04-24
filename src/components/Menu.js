import React from "react";
import '../css/Menu.css';
import $ from 'jquery';


const Display = (props) =>  {
    // To Handle Diffrent Menu Item Selection on Rotate
    async function menu() {
    let active = $('#active');
    let next = $('#nexta');
    let prev = $('#preva');
        if(props.degree.deg > props.degree.pdeg){
           if(next.length===1){
                await next.attr('id','active');
                await active.attr('id','preva');
                await prev.attr('id','');
                await next.next('li').attr('id','nexta');
            } 
        }else{
            if(prev.length===1){
                await prev.attr('id','active');
                await active.attr('id','nexta');
                await next.attr('id','');
                await prev.prev('li').attr('id','preva');
            } 
        }
    
    }
    menu();
   
    return(
        <div className='menu-display'>
            {/* Menu Item Display */}
            <h1 >iPod.js</h1>
            <ul className="menu-list">
                <li id="active" className="menu-list-item ">Coverflow</li>
                <li id="nexta" className="menu-list-item">All Music</li>
                <li className="menu-list-item ">Games</li>
                <li id="preva" className="menu-list-item ">Setting</li>
            </ul>
        </div>     
    );
}



export default Display;