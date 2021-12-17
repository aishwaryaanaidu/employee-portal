import { combineReducers } from 'redux';
import { authentication } from './auth.reducer';
import { employee } from './employee.reducer';
const rootReducer = combineReducers({
    authentication,
    employee
});
export default rootReducer;