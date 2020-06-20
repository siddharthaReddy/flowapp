import React, { Component } from "react";
import './Workflows.css';
import ButtonLayout from '../Layout/ButtonLayout';
import Workflow from '../Workflow/Workflow';

class Workflows extends Component {    
    // Get workflows list
    // Create Workflow component list variable
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
    }

    render () {
        let workflows = null;

        if (this.workflowsList) {
            workflows = (this.workflowsList.map((wflow) => {
                    return <Workflow key={wflow.id}
                        name={wflow.name}
                        isCompleted={wflow.isCompleted}
                        nodes={wflow.nodes}/> 
                    })
                )
        }

        return (
            <div>
                <ButtonLayout>
                    <div className="block first">
                        <input className="subitem" type="text" placeholder="Search Workflows" />
                        <select className="subitem">
                            <option selected value="all">All</option>
                            <option value="completed">Completed</option>
                            <option value="pending">Pending</option>
                        </select>
                    </div>
                    <div className="block second">
                        <button className="subitem float-right">Create Workflow</button>
                    </div>
                </ButtonLayout>
        
                {/* Worfklow components goes here */}
                <div className="workflows-container">
                    {workflows}
                </div>
            </div>
        )
    }
}

export default Workflows;