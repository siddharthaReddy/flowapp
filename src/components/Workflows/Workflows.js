import React, { Component } from "react";
import './Workflows.css';
import Workflow from './Workflow';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class Workflows extends Component {
    
    state = {
        openDialog: false,
        activePendingWorkflow: null
    }

    /**
     * if all child nodes are complete, workflow card's state should be completed
     * if any pending child, allow user to edit nodes
     */
    workflowClickHandler = (event, wflow) => {
        event.preventDefault();
        event.stopPropagation();

        if (wflow.nodes) {
            let isAnyNodePending = wflow.nodes.findIndex(node => {
                return node.status !== "completed"
            });

            if (isAnyNodePending !== -1 || !wflow.completed) {
                this.showPendingAlertDialog(wflow);
            } else {
                wflow.completed = false;
                this.props.workflowUpdatedHandler(wflow);
            }
        }
    }

    showPendingAlertDialog = (wflow) => {
        this.setState({
            openDialog: true,
            activePendingWorkflow: wflow
        });
    }

    closePendingAlertDialog = () => {
        this.setState({
            openDialog: false
        });
    }

    render () {
        let workflows = null;
        let alertDialog = null;

        if (this.props.workflows) {
            workflows = (this.props.workflows.map((wflow) => {
                    return <Workflow key={wflow.id}
                        id={wflow.id}
                        name={wflow.name}
                        completed={wflow.completed}
                        nodes={wflow.nodes}
                        clicked={(event) => this.workflowClickHandler(event, wflow)}
                        deleteHandler={(event) => this.props.deleteWorkflowHandler(event, wflow.id) }/> 
                    })
                )
        }

        if (this.state.activePendingWorkflow) {
            alertDialog = (
                <Dialog
                    open={this.state.openDialog}
                    onClose={this.closePendingAlertDialog}
                >
                    <DialogTitle id="alert-dialog-title">{"Alert"}</DialogTitle>
                    <DialogContent dividers>
                        <DialogContentText>
                                Workflow (<strong> {this.state.activePendingWorkflow.name} </strong>) 
                                    cannot be marked completed as there might be nodes which are still 
                                    <strong> "in-progress"</strong> or <strong>"pending".</strong>
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.closePendingAlertDialog} color="primary">
                            Close
                        </Button>
                    </DialogActions>
                </Dialog>
            )
        }

        return (
            <div>
                <div className="workflows-container">
                    { workflows }
                </div>
                { alertDialog }
            </div>
        )
    }
}

export default Workflows;