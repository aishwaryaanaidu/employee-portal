const initialState = { 
    anchor: 'left',
    employee: [],
    open: false,
    id: '',
    name: '',
    email: '',
    phone_number: '',
    address: ''
};
export function employee(state = initialState, action) {
    switch (action.type) {
        case 'FETECHED_ALL_EMPLOYEE':
            return {
                ...state,
                employee: action.employee
            };
        case 'EMPLOYEE_DETAIL':
            return {
                ...state,
                id: action.id,
                name: action.name,
                email: action.email,
                phone_number: action.phone_number,
                address: action.address
            };
        case "USER_UPDATED":
            return state;
        case "HANDLE_ON_CHANGE":
            return {
                ...state,
                [action.props]: action.value
            };
        default:
            return state
        }
}