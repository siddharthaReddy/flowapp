
export const getWorkflows = async () => { 
    return Promise.resolve(workflows);
}

export const getWorkflowByID = async (id) => {
    
    let index = workflows.findIndex( w => w.id === id);
    return Promise.resolve(workflows[index]);
}

export const updateWorkflow = (wflow) => {
    let existingIndex = workflows.findIndex(w => w.id === wflow.id);

    if (existingIndex !== -1) {
        workflows[existingIndex] = wflow;
    } else {
        workflows.push(wflow);
    }
}

export const deleteWorkflow = (id) => {
    let existingIndex = workflows.findIndex(w => w.id === id);

    if (existingIndex !== -1) {
        workflows.splice(existingIndex, 1);
    }
}

let workflows = [
    {
        id: 1,
        name: 'Workflow 1',
        completed: false,
        nodes: [
            {id: '1-node1', title: 'Task 1', status: 'completed', content: 'This task is completed'},
            {id: '1-node2', title: 'Task 2', status: 'in-progress', content: 'This task is inprogress'},
            {id: '1-node3', title: 'Task 2', status: 'pending', content: 'This task is pending'}
        ]
    },
    {
        id: 2,
        name: 'Workflow 2',
        completed: true,
        nodes: [
            {id: '2-node1', title: 'Task 1', status:'completed', content: 'Tasks are pending'},
            {id: '1-node2', title: 'Task 2', status: 'completed', content: 'This task is inprogress'}
        ]
    },
    {
        id: 3,
        name: 'Workflow 3',
        completed: false,
        nodes: [
            {id: '3-node1', title: 'Task 1', status:'pending', content: 'Tasks are pending'}
        ]
    }
];