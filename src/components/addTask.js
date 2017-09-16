import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import { Input, Button } from 'semantic-ui-react'
import {connect} from 'react-redux';
import {ADD_TASK_AC} from './todo_Actions';


class AddTask extends Component{
    constructor(props){
        super(props)
        this.state = {
            name : ""
        }
    }
    handleInputChange=(data)=>{
        this.setState({name : data.value})
    }
    addTask=()=>{
        let taskDetails = {
            name : this.state.name,
            status : 0
        }
        this.props.ADD_TASK_AC(taskDetails);
        this.setState({name : ""})
    }
    render(){
        return(
            <div className="add_task">
                <Input
                    placeholder='Add task..'
                    className="add_task_field"
                    value={this.state.name}
                    onChange={(event, data)=>this.handleInputChange(data)}
                />
                <Button content='Add' color="black" onClick={()=>this.addTask()}/>
            </div>
        )
    }
}




function mapDispatchToProps(dispatch) {
	return bindActionCreators({ADD_TASK_AC}, dispatch)
}

const AddTaskComponent = connect("", mapDispatchToProps)(AddTask);

export default AddTaskComponent;
