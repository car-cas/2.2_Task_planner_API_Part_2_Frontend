import React from "react";
import {CssBaseline, Toolbar} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import {CardList} from "./CardList";
import AppBar from "@material-ui/core/AppBar";
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';

const useStyles = makeStyles((theme) => ({}));

class Home extends React.Component{

    constructor(props) {
        super(props);
        this.handleDrawerClose = this.handleDrawerClose.bind(this);
        this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
    }

    state = {
        open: false,
        task: []
    };
    
    render() {
        const Buttonstyle = {         
            position: "fixed",
            bottom: "30px",
            right:"30px"  
        }; 
        return (
            <div>
                <CssBaseline/>
                <AppBar position="fixed" color="primary">
                    <Toolbar disableGutters={!this.state.open}></Toolbar>                  
                </AppBar>
                <Fab color="secondary" aria-label="add" style={Buttonstyle} href="/NewTask">
                    <AddIcon/>
                </Fab> 
                <br/><br/><br/>
                <CardList
                    cardList={ localStorage.getItem("items") === null ? [] : JSON.parse(localStorage.getItem("items"))} />
            </div>
        );
    }

    handleDrawerOpen() {
        this.setState({
            open: true
        });
    };

    handleDrawerClose() {
        this.setState({
            open: false
        });
    };
}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(useStyles, {withTheme: true})(Home);