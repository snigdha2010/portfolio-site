import React from 'react';
import Typist from 'react-typist';
import './Home.css';
import img from '../../Image/profile-pic.jpeg';

import SocialNetWork from '../SocialNetWork/SocialNetWork';

const Home = () => {
    return (
            <div className='home brand d-flex align-items-center  justify-content-center'>
            <div>
                <div className='text-center pb-5'>
                <img  className='profile' src={img} alt=""/>
                </div>
               <h1 className='text-center typist'>Snigdha Hassan</h1> 
                <Typist className='typist' cursor={{'hideWhenDone': true, 'hideWhenDoneDelay': 0}}>
                    <span>Software Engineer | Web Deveolpe</span>
                    <Typist.Backspace count={6} delay={1000} />
                    <span>veloper | Programmer</span>
                </Typist>
                <div className='text-center'>
                    <SocialNetWork/>
                </div> 
            </div>
            </div>
              
    );
};

export default Home;