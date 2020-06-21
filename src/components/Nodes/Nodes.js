import React, { Component } from "react";
import Node from './Node';

class Nodes extends Component {

    changeHandler = (event, prop, id) => {
        const nodeIndex = this.props.nodes.findIndex((n) => n.id === id);
        const node = {
            ...this.props.nodes[nodeIndex]
        };

        if (prop === 'title') {
            node.title = event.target.value;
        }
        else if (prop === 'content') {
            node.content = event.target.value;
        }

        const nodes = [...this.props.nodes];
        nodes[nodeIndex] = node;

        this.props.changed(nodes); 
    }

    render() {
        return (
            <div className="workflows-container">
                {
                    this.props.nodes.map((n)=> {
                        return <Node key={n.id}
                                    title={n.title}
                                    content={n.content}
                                    changed={(event, prop) => this.changeHandler(event, prop, n.id)} />
                    })
                }
            </div>
        )
    }
}

export default Nodes;