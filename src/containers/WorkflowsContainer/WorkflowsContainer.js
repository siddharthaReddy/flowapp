import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import ButtonLayout from '../../components/Layout/ButtonLayout';
import Workflows from '../../components/Workflows/Workflows';
import { Link } from 'react-router-dom';

class WorkflowsContainer extends Component {

    constructor () {
        super();
        this.workflowsList = [
            {
                id: '1',
                name: 'Workflow 1',
                isCompleted: true,
                nodes: [
                    {id: '1-node1', title: 'Task 1', status: 'completed', content: 'This task is completed'},
                    {id: '1-node2', title: 'Task 2', status: 'in-progress', content: 'This task is inprogress'},
                    {id: '1-node3', title: 'Task 2', status: 'pending', content: 'This task is pending'}
                ]
            },
            {
                id: '2',
                name: 'Workflow 2',
                isCompleted: false,
                nodes: [
                    {id: '2-node1', title: 'Task 1', status:'pending', content: 'Tasks are pending'},
                    {id: '1-node2', title: 'Task 2', status: 'in-progress', content: 'This task is inprogress'}
                ]
            },
            {
                id: '3',
                name: 'Workflow 3',
                isCompleted: false,
                nodes: [
                    {id: '3-node1', title: 'Task 1', status:'pending', content: 'Tasks are pending'}
                ]
            }
        ]

        this.state = {
            workflows: this.workflowsList,
            filterDropdownValue: ''
        }
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
                return wflow.isCompleted
            }
            else if (selected === "pending") {
                return !wflow.isCompleted
            }

            return match;
        });

        this.setState({
            workflows: filteredWorkflows,
            filterDropdownValue: event.target.value
        })
    }
    
    render () {
        // const { match, location, history } = this.props;
        // console.log(match);
        return (
            <div>
                <ButtonLayout>
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
                        <Button
                            variant="contained"
                            color="primary"
                            className="md-button"
                            startIcon={<AddIcon />}
                            size="small">
                            <Link to="/edit">Create Workflow</Link>
                        </Button>
                    </div>
                </ButtonLayout>

                <Workflows workflows={this.state.workflows} />
            </div>
        )
    }
}

export default WorkflowsContainer;