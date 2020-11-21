import React,{ Component } from "react";
import { MDBContainer,
         MDBRow,
         MDBCol,
         MDBCard,
         MDBCardBody,
         MDBInput,
         MDBBtn,
         MDBIcon } from "mdbreact";
import { connect } from "react-redux";


class Login extends React.Component{
    render(){
        return(
            // <div>
            //     <input type="email"
            //            placeholder="Enter Email"
            //            ref="uemail" />
            //     <br></br><br></br>
            //     <input type="password"
            //            placeholder="Enter Password"
            //            ref="upwd"/>
            //     <br></br><br></br>
            //     <button onClick={()=>{this.props.login({"email":this.refs.uemail.value,
            //                                             "password":this.refs.upwd.value})}}>Login</button>
            // </div>

            <MDBContainer>
                <MDBRow>
                    <MDBCol md="6">
                        <MDBCard>
                            <div className="header pt-3 peach-gradient">
                                <MDBRow className="d-flex justify-content-center">
                                    <h3 className="white-text font-weight-bold mb-3 pt-3">Login</h3>   
                                </MDBRow>
                                <MDBRow className="mt-2 mb-3 d-flex justify-content-center">
                                    <a href="#!" className="fa-lg p-2 m-2 fb-ic">
                                        <MDBIcon fab icon="facebook-f" size="lg" className="white-text" />
                                    </a>
                                    <a href="#!" className="fa-lg p-2 m-2 tw-ic">
                                        <MDBIcon fab className="fa-twitter white-text fa-lg" />
                                    </a>
                                    <a href="#!" className="fa-lg p-2 m-2 gplus-ic">
                                        <MDBIcon fab className="fa-google-plus-g white-text fa-lg" />
                                    </a>
                                </MDBRow>
                            </div>
                            <MDBCardBody  className="mx-4 mt-4">
                                <MDBInput label="Your email" group type="text" validate />
                                <MDBInput label="Your password" group type="password" validate containerClass="mb-0" />
                                <MDBRow className="d-flex align-items-center mb-4 mt-5">
                                    <MDBCol md="5" className="d-flex align-items-start">
                                        <div className="text-center">
                                            <MDBBtn color="grey" rounded type="button">Log in</MDBBtn>
                                        </div>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>



        )
    };
};
const receive = (state)=>{
    return{

    }
};
const send = (dispatch)=>{
    return{
        login : (obj)=>{ dispatch({type:"LOGIN_ACTION",value:obj}) }
    }
}; 
export default connect(receive,send)(Login);


