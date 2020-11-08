import React from 'react';
import './About.css';
import img from '../../Image/profile-pic.jpeg';
import Typist from 'react-typist';

const About = () => {
    return (
        <div className='row text-green p-5 about text-center align-items-center'>
            <div style ={{textAlign:'start'}} className='col-md-8 p-5 '>
                <Typist cursor={{'hideWhenDone': true, 'hideWhenDoneDelay': 0}} className='typist' >
                <h1>Snigdha Hassan</h1>
                <h4>Frontend Web Developer</h4> </Typist> 
                <p className='text-white pb-5 pt-5'>A Js developer!! Strong hands on knowledge on UI development
                 using JS, React, MongDB, Express, CSS3, HTML5, BootStrap, MaterialUI. Creates dynamic, smooth-user
                 UI with Responsive design websites which are compatable in any large, medium, small size devices. Willing
                 to take any new opportunity to add new career and skills to the profile</p>
                <a href="../../resume/Snigdha_Hassan_ReactJSDevloper-2020.pages" download><button  className='btn resume text-dark '>Donwload resume</button></a>  
            </div>
            <div className='col-md-4 mt-5 p-5'>
                <img className='profile' src={img} alt=""/>
            </div>           
        </div>
    );
};

export default About;