import { userService } from '../_services/';
import { history } from '../_helpers';

export const employeeAction = {
    getEmployee,
    getEmployeeById,
    onChangeProps,
    editEmployeeInfo,
    createEmployee,
    deleteEmployeeById
};
function getEmployee(){
    return dispatch => {
        let apiEndpoint = 'employees';
        userService.get(apiEndpoint)
        .then((response)=>{
            dispatch(changeEmployeesList(response.data.data));
        }).catch((err)=>{
            console.log(err);
        })
   };
}
function createEmployee(payload){
    return dispatch => {
        let apiEndpoint = 'employees/';
        userService.post(apiEndpoint, payload)
        .then((response)=>{
            dispatch(createUserInfo());
            history.push('/employee');
        })
    }
}
function getEmployeeById(id){
    return dispatch => {
        let apiEndpoint = 'employees/'+ id;
        userService.get(apiEndpoint)
        .then((response)=>{
            dispatch(editEmployeesDetails(response.data.data));
        })
    };
}
function onChangeProps(props, event){
    return dispatch =>{
        dispatch(handleOnChangeProps(props, event.target.value));
    }
}
function editEmployeeInfo(id, payload){
    return dispatch => {
        let apiEndpoint = 'employees/'+ id;
        userService.put(apiEndpoint, payload)
        .then((response)=>{
            dispatch(updatedUserInfo());
            history.push('/employee');
        })
    }
}
function deleteEmployeeById(id){
    return dispatch => {
        let apiEndpoint = 'employees/'+ id;
        userService.deleteDetail(apiEndpoint)
        .then((response)=>{
             dispatch(deleteEmployeesDetails());
             dispatch(employeeAction.getEmployee());
        })
    };
}
export function changeEmployeesList(employee){
    return{
        type: "FETECHED_ALL_EMPLOYEE",
        employee: employee
    }
}
export function handleOnChangeProps(props, value){
    return{
        type: "HANDLE_ON_CHANGE",
        props: props,
        value: value
    }
}
export function editEmployeesDetails(employee){
    return{
        type: "EMPLOYEE_DETAIL",
        id: employee._id,
        name: employee.name,
        email: employee.email,
        phone_number: employee.phone_number,
        address: employee.address
    }
}
export function updatedUserInfo(){
    return{
        type: "USER_UPDATED"
    }
}
export function createUserInfo(){
    return{
        type: "USER_CREATED_SUCCESSFULLY"
    }
}
export function deleteEmployeesDetails(){
    return{
        type: "DELETED_EMPLOYEE_DETAILS"
    }
}