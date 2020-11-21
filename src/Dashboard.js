import React,{ Component } from "react";
import About from "./About";
import Portfolio from "./Portfoilo";
import Contact from "./Contact";
//BrowserRouter accomidates the single applications logic
//as is the keyword used to assign the alias
//NavLink used to create the router links
import { BrowserRouter as Router, NavLink } from "react-router-dom";
//Route used to implement the Routing in single page applications
import Route from "react-router-dom/Route";
import { connect } from "react-redux";
class Dashboard extends React.Component{
    render(){
        return(
            <Router>
               <NavLink to="/about" 
                        activeStyle={{color:"greenyellow"}}
                        style={{marginRight:300}}
                        exact strict><b>About</b></NavLink>
               <NavLink to="/portfolio"
                        activeStyle={{color:"greenyellow"}}
                        style={{marginRight:300}}
                        exact strict><b>Portfolio</b></NavLink>
               <NavLink to="/contact"
                         activeStyle={{color:"greenyellow"}}
                         style={{marginRight:300}}
                         exact strict><b>Contact</b></NavLink>
               <button onClick={this.props.logout}>Logout</button>
               <br></br><br></br>
               <Route path="/about" component={About} exact strict/>
               <Route path="/portfolio" component={Portfolio} exact strict/>
               <Route path="/contact" component={Contact} exact strict/>
            </Router>
        )
    }
};

const receive = (state)=>{
    return{

    }
};

const send = (dispatch)=>{
    return{
        logout : ()=>{ dispatch({type:"LOGOUT_ACTION",value:{}}) }
    }
};

export default connect(receive,send)(Dashboard);




