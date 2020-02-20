import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutBg from './AboutBg';
import joe from './pics/joe.jpeg';
import jamile from './pics/jamile.jpeg';
import lava from './pics/lava.jpeg';
import sonia from './pics/sonia.jpeg';
import dean from './pics/dean.jpeg';
import atopbg from './pics/atop.jpg';
import logopl from './pics/logo-placeholder.png';
import forkpic from './pics/fork.png';
import knifepic from './pics/knife.png';
import scrollpic from './pics/scroll.png';
import baconl from './pics/baconl.png';
import baconr from './pics/baconr.png';

export default function About() {
  let element = document.querySelector('#root');
  window.addEventListener('scroll', () => {});
  return (
    <div id="about-page">
      <AboutBg />
      <div id="atop">
        <span>
          <img id="atop-pic" src={atopbg} alt=" " />
          <span id="fork">
            <img src={forkpic} alt=" " />
          </span>
          <span id="logo-place">
            <img src={logopl} alt=" " />
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>
      </div>

      <div id="about-members">
        <div class="member-pics">
          <span id="joe-pic">
            <img class="apics" src={joe} alt="Smiley face" />
          </span>
          <span id="joe-about" class="member-about">
            <h4>Joe</h4>
            <p>"The secret of getting ahead is getting started" - Mark Twain</p>
          </span>
        </div>
        <div class="member-pics">
          <span id="jamile-pic">
            <img
              class="apics"
              src={jamile}
              alt="Smiley face"
              height="400"
              width="auto"
            />
          </span>
          <span id="jamile-about" class="member-about">
            <h4>Jamile</h4>
            <p>"The secret of getting ahead is getting started" - Mark Twain</p>
          </span>
        </div>
        <div class="member-pics">
          <span id="lava-pic">
            <img
              class="apics"
              src={lava}
              alt="Smiley face"
              height="400"
              width="auto"
            />
          </span>
          <span id="lava-about" class="member-about">
            <h4>Lava</h4>
            <p>"The secret of getting ahead is getting started" - Mark Twain</p>
          </span>
        </div>
        <div class="member-pics">
          <span id="sonia-pic">
            <img
              class="apics"
              src={sonia}
              alt="Smiley face"
              height="400"
              width="auto"
            />
          </span>
          <span id="sonia-about" class="member-about">
            <h4>Sonia</h4>
            <p>"Permanent messages taught by temporary people. " - Unknown</p>
          </span>
        </div>
        <div class="member-pics">
          <span id="dean-pic">
            <img
              class="apics"
              src={dean}
              alt="Smiley face"
              height="400"
              width="auto"
            />
          </span>
          <span id="dean-about" class="member-about">
            <h4>Dean</h4>
            <p>"The secret of getting ahead is getting started" - Mark Twain</p>
          </span>
        </div>
      </div>
    </div>
  );
}
