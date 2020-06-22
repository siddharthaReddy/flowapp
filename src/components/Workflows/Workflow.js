import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import Icon from '@material-ui/core/Icon';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

class Workflow extends Component {
    // Attributes -  
    // Name: string
    // Completed: boolean
    // Nodes: Node[]

    editWorkflow = (event) => {
        event.preventDefault();
        event.stopPropagation();

        const url = `/edit/${this.props.id}`;

        if (this.props.history){
            this.props.history.push(url);
        }
    }

    render () {
        let iconClass = "default";
        let status = "Pending";

        if (this.props.completed) {
            iconClass = "success";
            status = "Completed";
        }

        return (
            <div className='wflow-container box-layout' onClick={this.props.clicked}>
                
                <div className='md-icon left-corner hide'>
                    <Icon className="fa fa-pencil-square"
                        color="secondary"
                        style={{ fontSize: 30 }}
                        onClick={this.editWorkflow}/>
                </div>

                <div className='md-icon right-corner hide'>
                    <DeleteForeverIcon
                        color="secondary" 
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

export default withRouter(Workflow);