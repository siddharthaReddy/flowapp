import React from 'react';
import Button from "@material-ui/core/Button";
import ShuffleIcon from '@material-ui/icons/Shuffle';
import AddIcon from "@material-ui/icons/Add";
import ClearIcon from '@material-ui/icons/Clear';
import ButtonLayout from '../../components/Layout/ButtonLayout';


class CreateWorkflow extends React.Component {
    render () {
        return (
            <div>
                <ButtonLayout>
                    <div className="block first">
                        <input className="subitem" type="text" placeholder="Workflow Name" />
                    </div>
                    <div className="block second">
                        <Button
                            variant="contained"
                            color="primary"
                            className="md-button"
                            startIcon={<ShuffleIcon />}
                            size="small"
                            onClick={this.createWorkflowClickHandler}>Shuffle</Button>
                        <Button
                            variant="contained"
                            color="primary"
                            className="md-button"
                            startIcon={<ClearIcon />}
                            size="small"
                            onClick={this.createWorkflowClickHandler}>Delete</Button>
                        <Button
                            variant="contained"
                            color="primary"
                            className="md-button"
                            startIcon={<AddIcon />}
                            size="small"
                            onClick={this.createWorkflowClickHandler}>Add Node</Button>
                        
                        <Button
                            variant="contained"
                            color="primary"
                            className="md-button"
                            size="small"
                            onClick={this.createWorkflowClickHandler}>Save</Button>
                        
                    </div>
                </ButtonLayout>
            </div>
        )
    }
}

export default CreateWorkflow;