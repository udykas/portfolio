import React from 'react';
import { Tooltip, Zoom } from '@material-ui/core';

import './TechStack.css';

function TechStack() {

    return (
        <div id="tech" className="tech-section-container">
            <div className="tech-header">
                <h1>Tech Stack</h1>
            </div>
            <div className="tech-content">
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingBottom: '40px'}}>
                    <div style={{display: 'flex', justifyContent: 'space-around'}}>
                        {/* Create custom tooltip: https://www.w3schools.com/howto/howto_css_tooltip.asp */}
                        <Tooltip 
                            title="JavaScript" 
                            placement="top"
                            TransitionComponent={Zoom}
                            arrow
                        >
                            <i className="fab fa-js-square fa-5x"></i>
                        </Tooltip>
                        <Tooltip 
                            title="HTML5" 
                            placement="top"
                            TransitionComponent={Zoom}
                            arrow
                        >
                            <i className="fab fa-html5 fa-5x"></i>
                        </Tooltip>
                        <Tooltip 
                            title="CSS3" 
                            placement="top"
                            TransitionComponent={Zoom}
                            arrow
                        >
                            <i className="fab fa-css3-alt fa-5x"></i>
                        </Tooltip>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'space-around', paddingTop: '80px'}}>
                        <Tooltip 
                            title="React" 
                            placement="top"
                            TransitionComponent={Zoom}
                            arrow
                        >
                            <i className="fab fa-react fa-5x"></i>
                        </Tooltip>
                        <Tooltip 
                            title="Node.js" 
                            placement="top"
                            TransitionComponent={Zoom}
                            arrow
                        >
                            <i className="fab fa-node fa-5x"></i>
                        </Tooltip>
                        <Tooltip 
                            title="Python" 
                            placement="top"
                            TransitionComponent={Zoom}
                            arrow
                        >
                            <i className="fab fa-python fa-5x"></i>
                        </Tooltip>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TechStack;