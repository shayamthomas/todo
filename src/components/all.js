import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import { Button, List , Icon, Popup, Input} from 'semantic-ui-react'
import {connect} from 'react-redux';
import {CHANGE_STATUS_AC, DELETE_TASK_AC} from './todo_Actions';

class All extends Component{
    constructor(props){
        super(props)
        this.state = {
            taskList : []
        }
    }
    componentWillMount(){
        this.setState({
            taskList : this.props.TODO_STORE.todoList
        })
    }
    componentWillReceiveProps(nextProps){
        this.setState({
            taskList : nextProps.TODO_STORE.todoList
        })
    }
    handleInputChange=(data)=>{
        let key = data.value.toLowerCase();
        let taskList = this.props.TODO_STORE.todoList.filter(data => (data.name.toLowerCase().indexOf(key) > -1));
        this.setState({taskList})
    }

    render(){
        if(this.state.taskList.length > 0){
            return(
                <div className="main_content">
                    <div className="row">
                        <div className="col-xs-12">
                            <Input
                                placeholder='Search..'
                                className="add_task"
                                onChange={(event, data)=>this.handleInputChange(data)}
                            />
                        </div>
                        <div className="col-xs-12">
                            <List divided relaxed>
                                {
                                    this.state.taskList.map((data, index)=>{
                                        return(
                                            <List.Item key={index}>
                                                <div className="col-xs-6">
                                                    <List.Content className="list_style">
                                                        <List.Header>{data.name}</List.Header>
                                                    </List.Content>
                                                </div>
                                                <div className="col-xs-4">
                                                    <List.Content>
                                                        {(data.status) ? <Button color='green'>Completed</Button> : <Button color='red'>Pending</Button>}
                                                    </List.Content>
                                                </div>
                                                <div className="col-xs-2">
                                                    <List.Content>
                                                        {(data.status) ? <Popup
                                                        trigger={<Button onClick={()=>this.props.DELETE_TASK_AC(index)} icon> <Icon name='close' /></Button>}
                                                        content='Delete'/> : <Popup
                                                        trigger={<Button onClick={()=>this.props.CHANGE_STATUS_AC(index)} primary icon> <Icon name='check' /></Button>}
                                                        content='Completed'/>}
                                                    </List.Content>
                                                </div>
                                            </List.Item>
                                        )
                                    })
                                }
                            </List>
                        </div>
                    </div>
                </div>
            )
        }
        return (
            <div className="main_content">
                <List divided relaxed>
                    <List.Item>
                       <List.Content className="list_style">
                           <List.Header>No taks found !!</List.Header>
                       </List.Content>
                   </List.Item>
               </List>
           </div>
        )
    }
}


function mapStateToProps(state){
	return {TODO_STORE: state.TODO_STORE}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({CHANGE_STATUS_AC, DELETE_TASK_AC}, dispatch)
}

const AllComponent = connect(mapStateToProps, mapDispatchToProps)(All);

export default AllComponent;
