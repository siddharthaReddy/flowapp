import React, { Component } from "react";
import { withRouter } from 'react-router-dom';

import { Button } from "@material-ui/core";
import ShuffleIcon from '@material-ui/icons/Shuffle';
import AddIcon from "@material-ui/icons/Add";
import ClearIcon from '@material-ui/icons/Clear';

import ButtonLayout from '../../components/Layout/ButtonLayout';
import Nodes from "../../components/Nodes/Nodes";
import { updateWorkflow } from "../../services/Mockdata/WorkflowService";


class CreateWorkflow extends Component {
    constructor () {
        super();
        this.state = { 
            name: '',
            nodes: []
        }
    }

    nameChangeHandler = (event) => {
        this.setState({
            name: event.target.value
        });
    }

    shuffleWorkflowsHandler = () => {
        const nodes = [...this.state.nodes];

        for (let i = nodes.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [nodes[i], nodes[j]] = [nodes[j], nodes[i]];
        }

        this.setState({
            nodes: nodes
        });
    }

    deleteWorkflowClickHandler = () => {
        const nodes = [...this.state.nodes];
        
        // deletes last node
        nodes.pop();

        // update state
        this.setState({
            nodes: nodes
        });
    }

    addNodeClickHandler = () => {
        const nodes = [...this.state.nodes];
        nodes.push({
            id: Math.floor(Math.random() * 1000), 
            title: '',
            content: '',
            status: null
        })

        // update state
        this.setState({
            nodes: nodes
        })
    }

    updateNodesHandler(nodes) {
        console.log("update nodes handler clicked!");
        this.setState({
            nodes: nodes
        })
    }

    saveWorkflowClickHandler = () => {
        let workflow = {
            id: Math.floor(Math.random() * 1000),
            name: this.state.name,
            nodes: this.state.nodes,
        }

        // Update nodes to database
        updateWorkflow(workflow);

        //redirect to home page
        if (this.props.history){
            this.props.history.push("/flowapp");
        }
    }

    render () {
        return (
            <div>
                <ButtonLayout>
                    <div className="block first">
                        <input className="subitem" type="text" 
                            placeholder="Workflow Name"
                            value={this.state.name} 
                            onChange={this.nameChangeHandler} />
                    </div>
                    <div className="block second">
                        <Button
                            variant="contained"
                            color="primary"
                            className="md-button"
                            startIcon={<ShuffleIcon />}
                            size="small"
                            onClick={this.shuffleWorkflowsHandler}>Shuffle</Button>
                        <Button
                            variant="contained"
                            color="primary"
                            className="md-button"
                            startIcon={<ClearIcon />}
                            size="small"
                            onClick={this.deleteWorkflowClickHandler}>Delete</Button>
                        <Button
                            variant="contained"
                            color="primary"
                            className="md-button"
                            startIcon={<AddIcon />}
                            size="small"
                            onClick={this.addNodeClickHandler}>Add Node</Button>
                        
                        <Button
                            variant="contained"
                            color="primary"
                            className="md-button"
                            size="small"
                            onClick={this.saveWorkflowClickHandler}>Save</Button>
                        
                    </div>
                </ButtonLayout>

                <Nodes nodes={this.state.nodes} changed={(nodes) => this.updateNodesHandler(nodes)} />
            </div>
        )
    }
}

export default withRouter(CreateWorkflow);