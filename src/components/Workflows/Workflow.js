import React, { Component } from "react";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

class Workflow extends Component {
    // Attributes: 
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
                    <div className='delete-icon'>
                        <DeleteForeverIcon onClick={this.props.deleteHandler} fontSize="large"/>
                    </div>
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
            </div>
        )
    }
}

export default Workflow;