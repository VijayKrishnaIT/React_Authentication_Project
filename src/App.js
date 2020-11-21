import React, { Component } from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import Route from "react-router-dom/Route";
import Register from "./Register";
import Login from "./Login";
import Dashboard from "./Dashboard";
import { hashHistory } from "react-router";
//import { useHistory }  from "react-router-dom";

//horizontal bar called as AppBar in material UI
//default color of AppBar is "primary"(blue)
import AppBar from "@material-ui/core/AppBar";
//Toolbar is the predefined component, used to hold the business logic of AppBar
import Toolbar from "@material-ui/core/Toolbar";
//used to display the icons on AppBar  Ex. MenuIcon
import IconButton from "@material-ui/core/IconButton";
//used to create the MenuIcon
import MenuIcon from "@material-ui/icons/Menu";
//import Button
import Button from "@material-ui/core/Button";
//import Typography
//Typography used to display the text
import Typography from "@material-ui/core/Typography";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div style={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                color="inherit"
                style={{ marginRight: 20, marginLeft: -20 }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" style={{ flexGrow: 1 }}>
                MiniProject
              </Typography>
              <NavLink to="/register" exact strict>
                <Button>Register</Button>
              </NavLink>
              <NavLink to="/login" exact strict>
                <Button>Login</Button>
              </NavLink>
            </Toolbar>
          </AppBar>
        </div>
        <br></br>
        <br></br>
        <Route path="/register" component={Register} exact strict />
        <Route path="/login" component={Login} exact strict />
        <Route path="/dashboard" component={Dashboard} exact strict />
      </Router>
    );
  }
}

export default App;
