import React ,{Component} from "react";
import {connect} from "react-redux";

class Contact extends React.Component{
    componentDidMount(){
        this.props.contactData();
    };

    render(){
        return(
            <div>
                {JSON.stringify(this.props.data)}
            </div>
        )
    }
};



const receive = (state)=>{
    return{
        data : state.data
    }
};


const send = (dispatch)=>{
    return{
        contactData : ()=>{ dispatch({type:"CONTACT_ACTION",value:{}}) }     
    }
};

export default connect(receive,send)(Contact);

