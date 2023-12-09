import React from 'react';
import './topicbox.css';

export default function topicbox() {
  return (
    <div>
        <div className="topbar">
          <div className="topbartxt">Come and taste</div>
        </div> 
         

        <div class="navbar">
          <span className='logo'>D&S Foods</span>
          <ul>
            <li><a class="active" href="#home">Home</a></li>
            <li><a href="#news">News</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#about">About</a></li>
          </ul>
        </div>
        
        

        

    </div>
  )
}
