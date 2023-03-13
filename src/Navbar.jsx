import React from "react";
import { useState } from "react";
// import {Link} from "react-router-dom"
const NavBar = () => {
  const [toggleNav, setToggleNav] = useState(false);

  const handleToggleNav = () => setToggleNav(!toggleNav);
  return (
    <nav className="navbar">
      {/* <div className="container"> */}
        <div className="logo">
          <a href="">
            <img
              src="https://cloudfront.fitnessblender.com/assets/img/logos/fb-logo-sm.svg"
              alt=""
            />
          </a>
        </div>
        <div className="links">
          <div className="workout">
            <div className="workout-dropdown">
              <a href="">
                Workout
                <span className="workout-button">
                  <i className="fa fa-caret-down"></i>
                </span>
              </a>
            </div>
            <div className="workout-content">
              <a href="#">workout videos</a>
              <a href="#">custom worouts</a>
            </div>
          </div>
          <div className="workout">
            <div className="workout-dropdown">
              <a href="">
                Programs
                <span className="workout-button">
                  <i className="fa fa-caret-down"></i>
                </span>
              </a>
            </div>
            <div className="workout-content">
              <a href="#">workout programs</a>
              <a href="#">meal plans</a>
              <a href="#">pilot programs</a>
              <a href="#">routines</a>
            </div>
          </div>
          <div className="workout">
            <div className="workout-dropdown">
              <a href="">
                Healthy living
                <span className="workout-button">
                  <i className="fa fa-caret-down"></i>
                </span>
              </a>
            </div>
            <div className="workout-content">
              <a href="#">experts articles</a>
              <a href="#">healthy recipes</a>
              <a href="#">wellness videos</a>
            </div>
          </div>
          <div className="workout">
            <div className="workout-dropdown">
              <a href="">
                community
                <span className="workout-button">
                  <i className="fa fa-caret-down"></i>
                </span>
              </a>
            </div>
            <div className="workout-content">
              <a href="#">community</a>
              <a href="#">blogs</a>
              <a href="#">what's new</a>
            </div>
          </div>
          <div className="workout">
            <div className="workout-dropdown">
              <a href="">
                about
                <span className="workout-button">
                  <i className="fa fa-caret-down"></i>
                </span>
              </a>
            </div>
            <div className="workout-content">
              <a href="#">about</a>
              <a href="#">careers</a>
              <a href="#">tutorials</a>
              <a href="#">our team</a>
            </div>
          </div>
          <div className="other-links">
            <a href="">store</a>
            <a href="" className="membership">membership</a>
          </div>
        </div>
        <div className="third">
          <a href="">
            <p>
              <span>Hi! Sign In </span>
              <br /> My Fitness
            </p>
          </a>
        </div>
        <div className="fourth">
          <a href="">
            <span>
              <i className="fa fa-search" aria-hidden="false"></i>
            </span>
          </a>
          <a href="">
            <span>
              <i className="fa fa-shopping-bag" aria-hidden="true"></i>
            </span>
          </a>
        </div>
        <div className="hamburger-menu">
          <button onClick={handleToggleNav}>
            <span className="icon">
              <i class="fa fa-bars" aria-hidden="true"></i>{" "}
            </span>
          </button>
        </div>
      
      

      {toggleNav && 
        (<div className="container-mobile">
          <div className="main-nav">
            <a href="">membership</a>
          </div>
          <div className="main-nav">
            <a href="">Workout</a>
            <div className="sub-nav">
              <a href="">workout videos</a>
              <a href="#">custom worouts</a>
            </div>
          </div>
          <div className="main-nav">
            <a href="">programs</a>
            <div className="sub-nav">
              <a href="#">workout programs</a>
              <a href="#">meal plans</a>
              <a href="#">pilot programs</a>
              <a href="#">routines</a>
            </div>
          </div>
          <div className="main-nav">
            <a href="">healthy living</a>
            <div className="sub-nav">
              <a href="#"> articles</a>
              <a href="#">healthy recipes</a>
              <a href="#">wellness videos</a>
            </div>
          </div>
          <div className="main-nav">
            <a href="">community</a>
            <div className="sub-nav">
              <a href="#">blogs</a>
              <a href="#">what's new</a>
          </div>
          <div className="main-nav">
            <a href="">about</a>
            <div className="sub-nav">
              <a href="#">careers</a>
              <a href="#">tutorials</a>
              <a href="#">our team</a>
            </div>
          </div>
          <div className="main-nav">
            <a href="">store</a>
          </div>
        </div>       
               </div>)}
    
    </nav>
  );
};

export default NavBar;
