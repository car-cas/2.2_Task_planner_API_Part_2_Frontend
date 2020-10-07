import React from "react";
import {CssBaseline, Toolbar} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import {CardList} from "./CardList";
import AppBar from "@material-ui/core/AppBar";
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import {NewTask} from "./NewTask";

const useStyles = makeStyles((theme) => ({}));

class Home extends React.Component{

    constructor(props) {
        super(props);
        this.state={items:[]}
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        fetch('https://taskplanner-ieti.azurewebsites.net/api/list-task?code=/s20agWQHatQSfQwzv8170axWYxH2ERJMoo6fnIXszWuS7QhOZXTvg==')
            .then(response =>response.json())
            .then(data => {
                var tasks=[]
                data.forEach(function (task) {
                    tasks.push(task)    
                });
            this.setState({items: tasks});
                
            });
    }

    handleSubmit(e){
        this.props.handleSubmit(e);
    }

    render() {
        return (
            <div>
                <CssBaseline/>
                <AppBar position="fixed" color="primary">
                    <Toolbar disableGutters={!this.state.open}></Toolbar>                  
                </AppBar>
                <br/><br/><br/>
                <CardList cardList={this.state.items} />
                <NewTask handleSubmit={this.handleSubmit}/>
            </div>
        );
    }
}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(useStyles, {withTheme: true})(Home);