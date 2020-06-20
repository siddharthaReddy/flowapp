import React from 'react';
import './Workflow.css';

class Workflow extends React.Component {
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
                            <p>{task.title}</p>
                        </li>
                    )
                })
            )
        }

        return (
            <div className='wflow-container box-layout'>
                <div>
                    <div className='input-field box-layout'>
                        <span>{this.props.name}</span>
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