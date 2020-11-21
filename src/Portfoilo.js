import React ,{Component} from "react";
import {connect} from "react-redux";

class Portfolio extends React.Component{
    componentDidMount(){
        this.props.portfolioData();
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
        portfolioData : ()=>{ dispatch({type:"PORTFOLIO_ACTION",value:{}}) }     
    }
};

export default connect(receive,send)(Portfolio);

