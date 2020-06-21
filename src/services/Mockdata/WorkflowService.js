
export const getWorkflows = async () => { 
    console.log("getWorkflows called!");
    return Promise.resolve(workflows);
}

export const updateWorkflow = (wflow) => {
    let existingIndex = workflows.findIndex(w => w.id === wflow.id);

    if (existingIndex !== -1) {
        workflows[existingIndex] = wflow;
    } else {
        workflows.push(wflow);
    }

    console.log("updateWorkflows called!");
}

export const deleteWorkflow = (id) => {
    let existingIndex = workflows.findIndex(w => w.id === id);

    if (existingIndex !== -1) {
        workflows.splice(existingIndex, 1);
    }
}

let workflows = [
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
];