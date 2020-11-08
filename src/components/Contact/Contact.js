import React, { useEffect } from 'react';
import SocialNetWork from '../SocialNetWork/SocialNetWork';
import './Contact.css'

const Contact = () => {
    useEffect(()=>{
        document.title = `Snigdha's Contact`
    },[])
  
    return (
        <div style={{height:'700px'}} className='row align-items-center'>
            <div className='col-md-6 pl-5 line'>
            <h3 className='text-green text-center'>Reach me out with any query</h3>
                <form className='p-5 ' action="">
                    <input className='form-control' type="text" name="" id="" placeholder='Your Name' required/>
                    <br/>
                    <br/>
                    <input className='form-control' type="text" name="" id="" placeholder='Your Email' required/>
                    <br/>
                    <br/>
                    <textarea className='form-control' cols='1' rows='5' placeholder='Type your message' required></textarea>
                    <br/>
                    <br/>
                    <input className='form-control resume' type="submit" value="Submit"/>
                </form>
            </div>
            <div className='col-md-6'>
                <h4 className='text-green pb-3'>You can also find me in:</h4>
                <SocialNetWork/>
                    <div>
                    <a style={{textDecoration:'none'}} href className='text-white '>
                        <label className='pt-2 ' htmlFor="name">Full Name : </label>
                        <span name='name'> Snigdha Hassan</span>
                    </a>
                    <br/>
                    <a style={{textDecoration:'none'}}  href className='text-white'>
                        <label htmlFor="location">Location : </label>
                        <span name='location'> New York, USA</span>
                    </a>
                    <br/>
                    <a  href className='text-white '>
                        <label htmlFor="email">Email : </label>
                        <span name='email'><a className='text-green' href="mailto:snigdha.hassan99@gmail.com"> snigdha.hassan99@gmail.com</a></span>
                    </a>
                    <br/>
                    <a  href className='text-white '>
                        <label htmlFor="phone">Phone : </label>
                        <span name='phone'><a className='text-green' href="tel:+1 (631)248-0210"> 1(631)248-0210</a></span>
                    </a>
                    </div>
            </div> 
        </div>
    );
};

export default Contact;