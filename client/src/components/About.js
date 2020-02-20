import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AboutBg from "./AboutBg";
import joe from "./pics/joe.jpeg";
import jamile from "./pics/jamile.jpeg";
import lava from "./pics/lava.jpeg";
import sonia from "./pics/sonia.jpeg";
import dean from "./pics/dean.jpeg";
import atopbg from "./pics/atop.jpg";
import logopl from "./pics/food-pictop1.png";
import forkpic from "./pics/forkw.png";
import knifepic from "./pics/knifew.png";
import scrollpic from "./pics/scrolls.png";
import baconl from "./pics/baconl.png";
import baconr from "./pics/baconr.png";
import githubPic from "./pics/github-clean100.png"
import linkedinPic from "./pics/linkedin-clean100.png"

export default function About() {
  let element = document.querySelector("#root");
  console.log(element.scrollTop);
  window.addEventListener("scroll", () => {
    console.log(window.scrollHeight, "X");
    console.log(window.screenY, "Y");
  });
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
            <img id="food-pic" src={logopl} alt=" " />
          </span>
          <span id="knife">
            <img src={knifepic} alt=" " />
          </span>
          <span id="scroll-down1">
            <a href="#abottom-section"><img src={scrollpic} alt=" " /></a>
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
                Finding a nice restaurant here is a pain in the ass! When you’re confined 
                to a small area like Wynwood, it can become a difficult task to find some 
                food that ACTUALLY tastes good without spending your life savings! You would 
                think that in a place with so much art, you could find a beautiful plate. 
                Over 600 restaurants in Wynwood with the 50 best options displayed for you 
                at the click of a button. WynEats is transforming how people experience 
                Wynwood by giving anyone access to the best culinary options in the area. 
                Our revolutionary platform connects customers with local businesses that 
                can satisfy all of their tastebuds.
                </p>
            </div>
        </div>

      
      <div id="about-members">
        <div class="member-pics">
          <span id="joe-pic">
            <img
              class="apics"
              src={joe}
              alt="Smiley face"
              
            />
          </span>
          <span id="joe-about" class="member-about">
          <h4>Joe</h4>
            <p>
            "It's not a bug. it's a feature" - Unknown
            </p>
          </span>
          <div> 
              <span class="github">
                <a href="https://github.com/sortinousn" target="_blank"><img
                class="github-pic"
                src={githubPic}
                alt="github"
                height="20"
                width="auto"
                /></a>
              </span>
              <span class="linkdin"> 
              <a href="https://www.linkedin.com/in/josephsortino/" target="_blank"><img
                class="linkedin-pic"
                src={linkedinPic}
                alt="linkedin"
                height="20"
                width="auto"
                /></a>
              </span>
          </div>
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
            <p>
            "For the benefit of the flower, we water the thorns too" - Egyptian Proverb
            </p>
          </span>
          <div> 
              <span class="github">
                <a href="https://github.com/reidjamile" target="_blank"><img
                class="github-pic"
                src={githubPic}
                alt="github"
                height="20"
                width="auto"
                /></a>
              </span>
              <span class="linkdin"> 
              <a href="https://www.linkedin.com/in/jamile-reid-1b075a99/" target="_blank"><img
                class="linkedin-pic"
                src={linkedinPic}
                alt="linkedin"
                height="20"
                width="auto"
                /></a>
              </span>
          </div>
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
            <p>
            "If you don't like something, change it. If you can't change it, change your 
            attitude." -Maya Angelou
            </p>
          </span>
          <div> 
              <span class="github">
                <a href="https://github.com/lavonnyka" target="_blank"><img
                class="github-pic"
                src={githubPic}
                alt="github"
                height="20"
                width="auto"
                /></a>
              </span>
              <span class="linkdin"> 
              <a href="https://www.linkedin.com/in/lavonnyka-howell-20906316b" target="_blank"><img
                class="linkedin-pic"
                src={linkedinPic}
                alt="linkedin"
                height="20"
                width="auto"
                /></a>
              </span>
          </div>
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
            <p>
            "Permanent messages taught by temporary people. " - Unknown
            </p>
          </span>
          <div> 
              <span class="github">
                <a href="https://github.com/stremysonia" target="_blank"><img
                class="github-pic"
                src={githubPic}
                alt="github"
                height="20"
                width="auto"
                /></a>
              </span>
              <span class="linkdin"> 
              <a href="http://www.linkedin.com/in/sonia-st-remy" target="_blank"><img
                class="linkedin-pic"
                src={linkedinPic}
                alt="linkedin"
                height="20"
                width="auto"
                /></a>
              </span>
          </div>
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
            <p>
            "The secret of getting ahead is getting started" - Mark Twain
            </p>
          </span>
          <div> 
              <span class="github">
                <a href="https://github.com/dlovett712" target="_blank"><img
                class="github-pic"
                src={githubPic}
                alt="github"
                height="20"
                width="auto"
                /></a>
              </span>
              <span class="linkdin"> 
              <a href="https://www.linkedin.com/in/dean-lovett/" target="_blank"><img
                class="linkedin-pic"
                src={linkedinPic}
                alt="linkedin"
                height="20"
                width="auto"
                /></a>
              </span>
          </div>
        </div>
      </div>
    </div>
  );
}
