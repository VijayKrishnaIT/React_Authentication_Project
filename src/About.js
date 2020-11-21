import React, { Component } from "react";
import { connect } from "react-redux";
class About extends React.Component {
  componentDidMount() {
    this.props.aboutData();
  }
  render() {
    return <div>{JSON.stringify(this.props.data)}</div>;
  }
}
const receive = (state) => {
  return {
    data: state.data,
  };
};
const send = (dispatch) => {
  return {
    aboutData: () => {
      dispatch({ type: "ABOUT_ACTION", value: {} });
    },
  };
};
export default connect(receive, send)(About);
