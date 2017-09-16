import CONSTANTS from '../common/constants';
const data = [
    {name : "Running", status : 0},
    {name : "Reading", status : 1},
    {name : "Cycling", status : 0},
    {name : "Swimming", status : 0},
    {name : "Gym", status : 1},
    {name : "Code", status : 0}
]
const initialState = {
    todoList : data
}

function Todo_Reducer(state=initialState, action){
    switch(action.type){
        case CONSTANTS.CHANGE_STATUS :
            return{
                ...state,
                todoList : [
                    ...state.todoList.slice(0, action.index),
                    {
                        ...state.todoList[action.index],
                        status : !state.todoList[action.index].status
                    },
                    ...state.todoList.slice(action.index+1),
                ]
            }
        break;
        case CONSTANTS.DELETE_TASK :
            return{
                ...state,
                todoList : [
                    ...state.todoList.slice(0, action.index),
                    ...state.todoList.slice(action.index+1),
                ]
            }
        break;
        case CONSTANTS.ADD_TASK :
            return{
                ...state,
                todoList : state.todoList.concat(action.task)
            }
        break;
        default :
            return state;
        break;
    }
}

export default Todo_Reducer;
