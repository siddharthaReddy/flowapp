import React, { Component } from "react";
import './Node.css';
import Icon from '@material-ui/core/Icon';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

class Node extends Component {

    render() {
        let status = this.props.status;
        let iconClass = status === "completed" ? "success"
                            : (status === "in-progress" ? "primary" : "default");

        return (
            <>
                {   !this.props.isFirstNode && 
                        <div className="sequential-arrow">
                            <Icon className="fa fa-pencil-square fa fa-long-arrow-right"
                                style={{ fontSize: 30 }} />
                        </div>
                }
                <div className='wflow-container box-layout'>
                    <div>
                        <div className={`md-icon right-corner ${iconClass}`}>
                            <CheckCircleIcon 
                                onClick={this.props.clicked} 
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