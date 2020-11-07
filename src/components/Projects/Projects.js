import React from 'react';
import creativeagency from '../../Image/creativeagency.png'; 
import volunteerNetwork from '../../Image/Volunteer-network.png';
import ProjectsDetails from './ProjectsDetails';
import travelGuru from '../../Image/TravelGuru.png';
import bookShop from '../../Image/bookShop.png';
import pandaCommerce from '../../Image/PandaCommerce.png';
import issueTracker from '../../Image/IsseTracker.png';
import Typist from 'react-typist';


const Projects = () => {
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
               <h3 className='text-green'>Projects</h3> 
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