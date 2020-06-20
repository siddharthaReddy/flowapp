import React, { Component } from "react";
import './Node.css';

class Node extends Component {

    render() {
        return (
            <>
                <div className='wflow-container box-layout'>
                    <div>
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