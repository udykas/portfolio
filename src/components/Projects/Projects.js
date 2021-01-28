import React from 'react';
import { Button } from '@material-ui/core';

import './Projects.css';
import FreshFits from '../../assets/fresh_fits.JPG';
import HouseParty from '../../assets/house_party.JPG';

function Projects() {

    return (
        <div id="projects" className="project-section-container">
            <div className="projects-header">
                <h1>Projects</h1>
            </div>
            <div className="projects-content">
                <h1 className="coming-soon">COMING SOON!</h1>
                <div className="project-card">
                    <img className="project-image" src={HouseParty} />
                    <div className="project-summary">
                        <h1 className="project-title" >House Party</h1>
                        <p className="project-description">Make your Spotify party playlist collaborative, giving access to add and skip songs to all of your guests!</p>
                        <div className="project-button-container">
                            <Button variant='contained' color="primary">
                                Visit Site
                            </Button>
                            <Button variant='contained' color="secondary">
                                GitHub
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="project-card">
                    <img className="project-image" src={FreshFits} />
                    <div className="project-summary">
                        <h1 className="project-title" >Fresh Fits</h1>
                        <p className="project-description">A high end, online clothing store for the freshest street wear money can buy! Sold by you, for you.</p>
                        <div className="project-button-container">
                            <Button variant='contained' color="primary">
                                Visit Site
                            </Button>
                            <Button variant='contained' color="secondary">
                                GitHub
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;