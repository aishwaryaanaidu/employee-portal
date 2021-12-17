import { connect } from 'react-redux';
import { employeeAction } from '../_actions';
import React, { Component } from 'react';
import AppBar from '../_components/appbar';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Nav from '../_components/nav';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import { withRouter } from 'react-router-dom';

const drawerWidth = 240;
const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    appFrame: {
       zIndex: 1,
       overflow: 'hidden',
       position: 'relative',
       display: 'flex',
       width: '100%',
    },
    appBar: {
       width: `calc(100% - ${drawerWidth}px)`,
    },
    'appBar-left': {
        marginLeft: drawerWidth,
    },
    'appBar-right': {
        marginRight: drawerWidth,
    },
    drawerPaper: {
        position: 'relative',
        width: drawerWidth,
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
    },
    paper: {
        position: 'absolute',
        width: theme.spacing.unit * 50,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4,
    },
    tableHeadContent: {
        backgroundColor: '#3F51B5',
        color: 'white',
        fontSize: '15pt'
    },
    tableStyle: {
        width: '70%'
    }
});
class Employee extends Component {

    // state = {
    //     showTable: true,
    //  };

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(employeeAction.getEmployee());
    }
    handleChange = event => {
        this.setState({
            anchor: event.target.value,
        });
    };
    handleClick = (event, id) => {
        const { dispatch } = this.props;
        dispatch(employeeAction.deleteEmployeeById(id))
    };

    // handleToggle = () => {
    //     this.setState({
    //         showTable: !this.state.showTable
    //     });
    // };

    render() {
        const { classes } = this.props;
        const { employee } = this.props.employee;
        // if(this.state.showTable===true){
        return (
            <div className={classes.root}>
              <div className={classes.appFrame}>
                <AppBar/>
                <main className={classes.content}>
                   <div className={classes.toolbar} />
                   <Grid container spacing={24}>
                      <Grid item xs={3}>
                         {/* <Button onClick={(event) => this.handleToggle()}>Toggle</Button> */}
                      </Grid>
                      <Grid item xs={6}>
                      </Grid>
                      <Grid item xs={3} container justify="flex-end">
                      </Grid>
                   </Grid>
                   <Grid container spacing={24}>
                      <Grid item xs={3}>
                      </Grid>
                      <Grid item xs={6}>
                      </Grid>
                      <Grid item xs={3} container justify="flex-end">
                          <Button variant="contained" color="primary" className={classes.button} component='a' href="/add-employee">Add Employee</Button>
                      </Grid>
                   </Grid>
                   <br /><br />
                   <Grid container spacing={24}>
                     <Paper className={classes.root}>
                       <Table className={classes.table}>
                          <TableHead className={classes.tableHeadContent}>
                             <TableRow>
                                <TableCell className={classes.tableHeadContent}>Name</TableCell>
                                <TableCell numeric className={classes.tableHeadContent}>Phone</TableCell>
                                <TableCell className={classes.tableHeadContent}>Email</TableCell>
                                <TableCell className={classes.tableHeadContent}>Address</TableCell>
                                <TableCell className={classes.tableHeadContent}>Action</TableCell>
                             </TableRow>
                          </TableHead>
                          <TableBody>
                           {employee.map(n => {
                              return (
                                  <TableRow key={n._id}>
                                    <TableCell component="th" scope="row">
                                      {n.name}
                                    </TableCell>
                                    <TableCell numeric>{n.phone_number}</TableCell>
                                    <TableCell numeric>{n.email}</TableCell>
                                    <TableCell>{n.address}</TableCell>
                                    <TableCell>
                                        <IconButton className={classes.button} aria-label="Edit" component='a' href={`/edit-employee/${n._id}`}>
                                           <EditIcon />
                                        </IconButton>
                                        <IconButton className={classes.button} aria-label="Delete" onClick={(event) => this.handleClick(event, n._id)}>
                                           <DeleteIcon /> 
                                        </IconButton>
                                    </TableCell>
                                 </TableRow>
                             );
                           })}
                        </TableBody>
                     </Table>
                  </Paper>
              </Grid>
           </main>
       </div>
     </div>
   );
                        // }
                        // else{
                        //     return(<div>Grid</div>);
                        // }
  }
}
Employee.propTypes = {
     classes: PropTypes.object.isRequired,
};
const mapStateToProps = (state) =>{
    console.log(state.employee);
    return {
       employee : state.employee
       
    };
}
const connectedEmployeePage = withRouter(connect(mapStateToProps, null, null, {
    pure: false
})(withStyles(styles)(Employee)));
export { connectedEmployeePage as Employee };