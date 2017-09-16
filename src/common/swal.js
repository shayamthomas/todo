import CONFIG from '../config';
require('../assets/js/sweetalert/sweetalert.min.js');


export function Success(title, message){
    swal({
        title : title,
        text : message,
        type : 'success'
    })
}

export function Info(title, message){
    swal(title, message)
}

export function Notify(message){
    swal('', message)
}

export function Failure(title, message){
    swal({
        title : title,
        text : message,
        type : 'error',
    })
}
