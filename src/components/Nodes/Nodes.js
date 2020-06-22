import React, { Component } from "react";
import Node from './Node';

class Nodes extends Component {

    /** 
     * @params
     * event: onChange event in case of title and content change; 
     *          custom Object from Node.component for status.
     * prop: changed property of node
     * id: Node.id
     */
    changeHandler = (event, nodeIndex, prop) => {
        const node = {
            ...this.props.nodes[nodeIndex]
        };

        if (prop) {
            node[prop] = event.target.value;
        }

        const nodes = [...this.props.nodes];
        nodes[nodeIndex] = node;

        // Update workflow
        this.props.changed(nodes); 
    }

    /** 
     * In a workflow there should be no Pending node before a Completed node
     * First click Should turn to inprogress,
     * Second click to completed and 
     * Third back to pending
     */
    statusIconClickHandler = (nodeIndex, currNode) => {
        const nodes = [...this.props.nodes];
        const prevNode = nodes[nodeIndex-1];
        
        const statuses = ["pending", "in-progress", "completed"]; // Order is imp
        const index = statuses.indexOf(currNode.status);
        
        // Rotate status value from array
        const newStatus = index === 2 ? statuses[0] : statuses[index+1]

        if (prevNode && prevNode.status !== "completed" && newStatus === "completed") {
            console.log("Previous node is not completed yet!")
            return;
        }

        // Update create-workflow component
        nodes[nodeIndex].status = newStatus;
        this.props.changed(nodes);
    }

    render() {
        return (
            <div className="workflows-container">
                {
                    this.props.nodes.map((n, index)=> {
                        return <Node key={n.id}
                                    isFirstNode = {index === 0}
                                    title={n.title}
                                    content={n.content}
                                    status={n.status}
                                    clicked = {() => this.statusIconClickHandler(index, n)}
                                    changed={(event, prop) => this.changeHandler(event, index, prop)} />
                    })
                }
            </div>
        )
    }
}

export default Nodes;