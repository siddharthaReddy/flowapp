import React, { Component } from "react";
import './Workflows.css';
import Workflow from './Workflow/Workflow';

class Workflows extends Component {    

    render () {
        let workflows = null;
        if (this.props.workflows) {
            workflows = (this.props.workflows.map((wflow) => {
                    return <Workflow key={wflow.id}
                        name={wflow.name}
                        isCompleted={wflow.isCompleted}
                        nodes={wflow.nodes}/> 
                    })
                )
        }
        return (
            <div>
                {/* Worfklow components goes here */}
                <div className="workflows-container">
                    {workflows}
                </div>
            </div>
        )
    }
}

export default Workflows;