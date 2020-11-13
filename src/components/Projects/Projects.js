import React, { useEffect } from 'react';
import creativeagency from '../../image/creativeagency.png'; 
import volunteerNetwork from '../../image/Volunteer-network.png';
import ProjectsDetails from './ProjectsDetails';
import travelGuru from '../../image/TravelGuru.png';
import bookShop from '../../image/bookShop.png';
import pandaCommerce from '../../image/PandaCommerce.png';
import issueTracker from '../../image/IsseTracker.png';
import emaJohn from '../../image/ema-john.png';
import doctorsPortal from '../../image/doctorsPortal.png';
import Typist from 'react-typist';


const Projects = () => {
    useEffect(()=>{
        document.title = 'Projects'
    },[])
    const projects = [
        {
            name: "Creative Agency" , img:creativeagency, 
            description:`A fullstack application about a sowftware agency where people can order any desgin or development related services.
            Admin and customer based role are implemented to order items or add new services to homepage.Technology used React, Mongo and Node`,
            github: 'https://github.com/snigdha2010/creative-agency',
            website:'https://snigdha-creative-agency.web.app/'
        }, 
        {
            name: "Volumteer Network", img: volunteerNetwork,
            description: `A fullstack application using React, MongoDB, Node. User can register to any volunteer Services and remove service.
            Firebase authentication is implemented for used loging.`,
            github: 'https://github.com/snigdha2010/volunteer-network',
            website:'https://snighd-volunteer-network.web.app/'
        },
        {
            name: "Ema-John", img: emaJohn,
            description: `A complete E-Commerce website where you can review product details, add them to the shopping cart,  review cart and
             finally purchase products online and pay using a bank debit or credit card.`,
            github: 'https://github.com/snigdha2010/ema-john',
            website:'https://snigdha-ema-john.web.app/'
        },
        {
            name: "Doctors-Portals", img: doctorsPortal,
            description: ` A full-stack app where you can pick the date and time and fix an appointment with a doctor. A doctor can review and 
            prescribe medicine to a patient. Doctor and Patient roles are implemented with different levels of authorization. Authentication is implemented to see the dashboard based on role.`,
            github: 'https://github.com/snigdha2010/doctorls-portal',
            website:'https://doctors-portal-aaac4.web.app/'
        },

        {
            name: "Travel Guru", img: travelGuru,
            description: `A Simple React dummy Travel application using React, Firebase, HTML, CSS. Traveler can chose a place and set a boking for any
            specific date.`,
            github: 'https://github.com/snigdha2010/travel-guru',
            website:'https://travel-guru-1c826.web.app/'
        },
        {
            name: "Book Shop", img: bookShop,
            description: `A Simple React dummy book-shop using React, Firebase, HTML, CSS. Books can be added to the cart.`,
            github: 'https://github.com/snigdha2010/book-shop',
            website:'https://snigdha-book-shop.netlify.app/'
        },
        {
            name: "Issue Tracker(Like Jira)", img: issueTracker,
            description: `A Simple dummy Issue Tracker board  using JavaScript, HTML CSS. User can log issues and assign to 
            any one. Issue can be solved and closed. Total report count will be updated on the dashboard`,
            github: 'https://github.com/snigdha2010/panda-commerce',
            website:'https://snigdha2010.github.io/issue-tracker/'
        },
        {
            name: "Panda commerce", img: pandaCommerce,
            description: `A Simple dummy E-commerce design website using HTML CSS. User can buy products.`,
            github: 'https://github.com/snigdha2010/issue-tracker',
            website:'https://snigdha2010.github.io/panda-commerce/'
        }
    ]
    return (
        <div className='text-white'>
            <Typist cursor={{'hideWhenDone': true, 'hideWhenDoneDelay': 0}}>
               <h3 className='text-green pt-5'>Projects</h3> 
            </Typist>
            
            <div className='row'>
                 {
                projects.map(project => <ProjectsDetails project={project}></ProjectsDetails>)
                 }
            </div>
           
        </div>
    );
};

export default Projects;