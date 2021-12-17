import React, { Component } from 'react';
import './App.css';
import { Router, Switch, Route} from 'react-router-dom';
import { Employee } from './employees/employee.component';
import  { Login } from './login/';
import { Home } from './home/';
import { history } from './_helpers';
import { PrivateRoute } from './_components';
import { AddEmployee } from './employees/addemployee.component'

class App extends Component {
    render() {
        return (
            <div className="App">
                <Router history={history}>
                   <div>
                      <Switch>
                         <PrivateRoute exact path='/home' component={Home} />
                         <PrivateRoute exact path='/employee' component={Employee} />
                         <PrivateRoute exact path='/add-employee' component={AddEmployee} />
                         <PrivateRoute exact path='/edit-employee/:id' component={AddEmployee} />
                         <Route exact path='/' component={Login} />
                      </Switch>
                   </div>
                </Router>
            </div>
        );
    }
}
export default App;