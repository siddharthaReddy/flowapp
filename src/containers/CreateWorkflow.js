import React, { Component } from "react";
import { withRouter } from 'react-router-dom';

import { Button } from "@material-ui/core";
import ShuffleIcon from '@material-ui/icons/Shuffle';
import AddIcon from "@material-ui/icons/Add";
import ClearIcon from '@material-ui/icons/Clear';

import HeaderLayout from '../components/Layout/Header';
import { SuccessButton, DangerButton, PurpleButton } from '../components/Layout/CustomButtons';
import Nodes from "../components/Nodes/Nodes";
import { getWorkflowByID, updateWorkflow } from "../services/Mockdata/WorkflowService";


class CreateWorkflow extends Component {
    constructor () {
        super();
        this.state = {
            id: '', 
            name: '',
            completed: false, // true when all nodes are completed
            nodes: []
        }
    }

    componentDidMount() {
        const id = parseInt(this.props.match.params.id);
        if (id) {
            this.fetchData(id);
        }
    }

    // async fetchData = (id) => {
    async fetchData (id) {
        let workflow = await getWorkflowByID(id);
        if (workflow) {
            this.setState({
                id: workflow.id,
                name: workflow.name,
                completed: workflow.completed,
                nodes: workflow.nodes
            })
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
            status: 'pending'
        })

        this.setState({
            completed: false, // new pending node added
            nodes: nodes
        });
    }

    updateNodesHandler(nodes) {
        let isWorkflowCompleted = true;

        for (var i=0; i < nodes.length; i++){
            if (nodes[i].status !== "completed") {
                isWorkflowCompleted = false;
                break;
            }
        }
        this.setState({
            completed: isWorkflowCompleted,
            nodes: nodes
        });
    }

    saveWorkflowClickHandler = () => {
        let workflow = {
            id: this.state.id || Math.floor(Math.random() * 1000),
            name: this.state.name,
            nodes: this.state.nodes,
            completed: this.state.completed
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
                <HeaderLayout>
                    <div className="block first">
                        <input className="subitem" type="text" 
                            placeholder="Workflow Name"
                            value={this.state.name} 
                            onChange={this.nameChangeHandler} />
                    </div>
                    <div className="block second">
                        {this.state.completed &&
                        <PurpleButton
                            variant="contained"
                            color="primary"
                            className="md-button"
                            startIcon={<ShuffleIcon />}
                            size="small"
                            onClick={this.shuffleWorkflowsHandler}>Shuffle</PurpleButton>    
                        }              
                        <DangerButton
                            variant="contained"
                            color="primary"
                            className="md-button"
                            startIcon={<ClearIcon />}
                            size="small"
                            onClick={this.deleteWorkflowClickHandler}>Delete</DangerButton>
                        <SuccessButton
                            variant="contained"
                            color="primary"
                            className="md-button"
                            startIcon={<AddIcon />}
                            size="small"
                            onClick={this.addNodeClickHandler}>Add Node</SuccessButton>
                        <Button
                            variant="contained"
                            color="primary"
                            className="md-button"
                            size="small"
                            onClick={this.saveWorkflowClickHandler}>Save</Button>
                        
                    </div>
                </HeaderLayout>

                <Nodes nodes={this.state.nodes} changed={(nodes) => this.updateNodesHandler(nodes)} />
            </div>
        )
    }
}

export default withRouter(CreateWorkflow);