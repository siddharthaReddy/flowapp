import React, { Component } from "react";
import { Link, withRouter } from 'react-router-dom';

import AddIcon from "@material-ui/icons/Add";
import HeaderLayout from '../components/Layout/Header';
import { SuccessButton } from '../components/Layout/CustomButtons';
import Workflows from '../components/Workflows/Workflows';
import { getWorkflows, deleteWorkflow, updateWorkflow } from "../services/Mockdata/WorkflowService";

class WorkflowsContainer extends Component {

    constructor () {
        super();
        this.state = {
            workflows: this.workflowsList,
            filterDropdownValue: ''
        }
    }

    async componentDidMount() {
        let workflows = await getWorkflows();
        this.workflowsList = workflows;
       
        this.setState({
            workflows: this.workflowsList,
        });
    }

    componentWillUnmount() {
        this.workflowsList = [];
    }

    searchInputChangeHandler(event) {
        let text = event.target.value;
        let list = [...this.workflowsList]; // clone instead of passing reference

        let filteredWorkflows = list.filter(wflow => {
            let match = false;
            if (wflow.name) {
                match = wflow.name.toLowerCase().indexOf(text.toLowerCase()) !== -1;
            }
            return match;
        });

        this.setState({
            workflows: filteredWorkflows
        })
    }

    filterDropdownChangeHandler = (event) => {
        let selected = event.target.value;
        let list = [...this.workflowsList];

        let filteredWorkflows = list.filter(wflow => {
            let match = true; // returns all workflows if selected=="all"

            if (selected === "completed") {
                return wflow.completed
            }
            else if (selected === "pending") {
                return !wflow.completed
            }

            return match;
        });

        this.setState({
            workflows: filteredWorkflows,
            filterDropdownValue: event.target.value
        })
    }

    workflowUpdatedHandler = (wflow) => {
        let list = [...this.workflowsList];
        let index = list.findIndex(w => w.id === wflow.id);
        
        if (index !== -1){
            // update and rerender
            updateWorkflow(wflow);
            this.componentDidMount();
        }
    }

    deleteWorkflowClickHandler = (event, id) => {
        event.preventDefault();
        event.stopPropagation();
        
        //delete from database
        deleteWorkflow(id);
        
        // fetch new updated list
        this.componentDidMount();
    }
    
    render () {
        return (
            <div>
                <HeaderLayout>
                    <div className="block first">
                        <input className="subitem" type="text" 
                            placeholder="Search Workflows"
                            onChange={this.searchInputChangeHandler.bind(this)} />

                        <select className="subitem" 
                            value={this.state.filterDropdownValue} 
                            onChange={this.filterDropdownChangeHandler}>
                                <option value="" disabled hidden>-- Filter --</option>
                                <option value="all">All</option>
                                <option value="completed">Completed</option>
                                <option value="pending">Pending</option>
                        </select>
                    </div>

                    <div className="block second">
                        <SuccessButton
                            variant="contained"
                            color="primary"
                            className="md-button"
                            startIcon={<AddIcon />}
                            size="small">
                            <Link to="/edit">Create Workflow</Link>
                        </SuccessButton>
                    </div>
                </HeaderLayout>

                <Workflows 
                    workflows={this.state.workflows}
                    workflowUpdatedHandler={this.workflowUpdatedHandler}
                    deleteWorkflowHandler={this.deleteWorkflowClickHandler} />
            </div>
        )
    }
}

export default withRouter(WorkflowsContainer);