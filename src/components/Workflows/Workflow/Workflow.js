import React, { Component } from "react";
import './Workflow.css';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

class Workflow extends Component {
    // Three variables: 
    // Name: string
    // Status - completed/pending
    // Nodes[]

    render () {
        let nodes = null;
        if (this.props.nodes) {
            nodes = (
                this.props.nodes.map( task => {
                    return (
                        <li key={task.id}>
                            <span>{task.title}</span>
                            <CheckCircleIcon className="float-right" />
                        </li>
                    )
                })
            )
        }

        return (
            <div className='wflow-container box-layout'>
                <div>
                    <div className='title'>
                        <input readOnly value={this.props.name} />
                    </div>
                    <div className='nodes-list'>
                        <ul>
                            {nodes}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Workflow;