import React from 'react';


const ProjectsDetails = ({project}) => {
    return (
        <div className='col-md-6 p-5'>
            <div className='card bg-dark pb-2 h-100' >
                <div className='card-body'>
                    <img src={project.img} alt="" className='img-fluid'/>
                    <h4 className='text-green p-2'>{project.name}</h4> 
                    <p className='text-white p-2'>{project.description}</p>
                       </div>
                    <div class="card-footer">
                       <div className='text-center pb-3'> <a className='text-center btn resume w-75' href={project.website} target="_blank">Website</a></div>
                       <div className='text-center pb-3'> <a className='text-center btn resume w-75' href={project.github} target="_blank">Git hub</a></div>
                    </div>
            </div>
            
        </div>
    );
};

export default ProjectsDetails;