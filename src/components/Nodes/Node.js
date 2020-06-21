import React, { Component } from "react";
import './Node.css';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const statuses = ["pending", "in-progress", "completed"];

class Node extends Component {

    statusIconClickHandler = () => {
        let status = this.props.status;
        let index = statuses.indexOf(status);
        
        // onChange handler on parent expects Event as first param
        let _event = {
            target: {   
                value: index === 2 ? statuses[0] : statuses[index+1] // rotate status value from array
            }
        }

        this.props.changed(_event, "status"); // will update parent and rerender all nodes
    }

    render() {
        let status = this.props.status;
        let iconClass = status === "completed" ? "success"
                            : (status === "in-progress" ? "primary" : "default");

        return (
            <>
                <div className='wflow-container box-layout'>
                    <div>
                        <div className={`md-icon right-corner ${iconClass}`}>
                            <CheckCircleIcon 
                                onClick={this.statusIconClickHandler} 
                                fontSize="large"/>
                        </div>
                        <div className='title'>
                            <input value={this.props.title} 
                                onChange={(event) => this.props.changed(event, 'title')} />
                                </div>
                        <div className='text-area'>
                            <textarea value={this.props.content} 
                                onChange={(event) => this.props.changed(event, 'content')} />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Node;