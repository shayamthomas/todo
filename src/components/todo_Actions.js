import CONSTANTS from '../common/constants';


export function CHANGE_STATUS_AC(index){
    return{
        type : CONSTANTS.CHANGE_STATUS,
        index
    }
}

export function DELETE_TASK_AC(index){
    return{
        type : CONSTANTS.DELETE_TASK,
        index
    }
}

export function ADD_TASK_AC(task){
    return{
        type : CONSTANTS.ADD_TASK,
        task
    }
}
