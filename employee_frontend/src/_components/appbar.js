import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { userActions } from '../_actions';
import { connect } from 'react-redux';
import HomeIcon from '@material-ui/icons/Home';
import LogoutIcon from '@material-ui/icons/HighlightOff';
import VendorIcon from '@material-ui/icons/CardTravel';
import Typography from '@material-ui/core/Typography';
const drawerWidth = 240;

// const drawerWidth = 240;
const styles = theme => ({
    root: {
        flexGrow: 1,
        flex: 1
    },
    appFrame: {
        zIndex: 1,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        width: '100%',
    },
    appBar: {
        width: `100%`,
        
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
    toolbarContent:{
        color: 'white'
    }
});
class PermanentDrawer extends React.Component {
    state = {
       anchor: 'left',
    };

    constructor(props){
        super(props);
        this.state={
           anchor: 'left',
        }
    }
    logout = event =>{
        const { dispatch } = this.props;
        dispatch(userActions.logout());
    }

    handleChange = event => {
        this.setState({
            anchor: event.target.value,
        });
    };
    render() {
        const { classes } = this.props;
        const { anchor } = this.state;
        return (
            <AppBar
             position="absolute"
             className={classNames(classes.appBar, classes[`appBar-${anchor}`])}
            >
                <Toolbar>    
                    <Typography>
                        Employee Dashboard
                    </Typography> 
                    <Grid container direction="row" justify="flex-end" alignItems="flex-end">          
                        <Button className={classes.toolbarContent} component='a' href="/home">
                                <HomeIcon />Home
                        </Button>
                        <Button className={classes.toolbarContent} component='a' href="/employee">
                                <VendorIcon />Employees
                        </Button>
                        <Button className={classes.toolbarContent} onClick={(event)=>{this.logout()}}>
                                <LogoutIcon />Logout
                        </Button>
                    </Grid>
                </Toolbar>
           </AppBar>
        );
    }
}
PermanentDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) =>{
    const { loggingIn } = state.authentication;
    return {
       loggingIn
    };
}
export default connect(mapStateToProps)(withStyles(styles)(PermanentDrawer));