import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutBg from './AboutBg';
import atopbg from '../../assets/atop.jpg';
import logopl from '../../assets/food-pictop1.png';
import forkpic from '../../assets/forkw.png';
import knifepic from '../../assets/knifew.png';
import scrollpic from '../../assets/scrolls.png';
import baconl from '../../assets/baconl.png';
import baconr from '../../assets/baconr.png';
import './About.css';

export default function About() {
  let element = document.querySelector('#root');
  window.addEventListener('scroll', () => {});
  return (
    <div>
      <div id="about-page">
        <AboutBg />
        <div id="atop">
          <span>
            <img id="atop-pic" src={atopbg} alt=" " />
            <span id="fork">
              <img src={forkpic} alt=" " />
            </span>
            <span id="logo-place">
              <img id="food-pic" src={logopl} alt=" " />
            </span>
            <span id="knife">
              <img src={knifepic} alt=" " />
            </span>
            <span id="scroll-down1">
              <a href="#abottom-section">
                <img src={scrollpic} alt=" " />
              </a>
            </span>
          </span>
        </div>
        <div id="abold-sum">
          <span id="baconl">
            <img src={baconl} alt=" " />
          </span>
          <span id="baconr">
            <img src={baconr} alt=" " />
          </span>
          <div id="titles-holder">
            <div>
              <h1 class="about-titles">Wynwood</h1>
            </div>
            <div>
              <h1 class="about-titles">Food</h1>
            </div>
            <div>
              <h1 class="about-titles">Discovery</h1>
            </div>
            <div>
              <h1 class="about-titles">Search</h1>
            </div>
          </div>
        </div>

        <div id="abottom-section">
          <div id="about-ppg">
            <h3 id="about-htext">About WynEats</h3>
            <p id="about-text">
              Finding a nice restaurant here is a pain in the ass! When you’re
              confined to a small area like Wynwood, it can become a difficult
              task to find some food that ACTUALLY tastes good without spending
              your life savings! You would think that in a place with so much
              art, you could find a beautiful plate. Over 600 restaurants in
              Wynwood with the 50 best options displayed for you at the click of
              a button. WynEats is transforming how people experience Wynwood by
              giving anyone access to the best culinary options in the area. Our
              revolutionary platform connects customers with local businesses
              that can satisfy all of their tastebuds.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
