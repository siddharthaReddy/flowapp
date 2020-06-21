import React, { Component } from "react";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

class Workflow extends Component {
    // Attributes -  
    // Name: string
    // Completed: boolean
    // Nodes: Node[]

    render () {
        let iconClass = "default";
        let status = "Pending";

        if (this.props.completed) {
            iconClass = "success";
            status = "Completed";
        }

        return (
            <div className='wflow-container box-layout' onClick={this.props.clicked}>
                <div className='md-icon right-corner delete'>
                    <DeleteForeverIcon 
                        onClick={this.props.deleteHandler} 
                        fontSize="large"/>
                </div>
                <div>
                    <div className='title box-layout text-transform-uppercase'>
                        {this.props.name} 
                    </div>
                    <div className='nodes-list text-transform-uppercase'>
                        <ul>
                            <li>
                                <span>{status}</span>
                                <CheckCircleIcon className={`float-right md-icon ${iconClass}`} />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Workflow;