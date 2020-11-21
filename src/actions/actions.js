import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";

/********************************Registration ******************************/
function register_call(data) {
  return axios.post("http://localhost:8080/register", data);
}
function* register(action) {
  const res = yield call(register_call, action.value);
  if (res.data.register === "success") {
    yield put({ type: "REGISTER", value: res.data });
    window.location.href = `/login`;
  } else {
    console.log("Registration Failed");
  }
}
/***************************************************************************/

/***********************************Login **********************************/
function login_call(data) {
  return axios.post("http://localhost:8080/login", data);
}
function* login(action) {
  const res = yield call(login_call, action.value);
  if (res.data.login === "success") {
    window.localStorage.setItem("login_details", JSON.stringify(res.data));
    yield put({ type: "LOGIN", value: res.data });
    window.location.href = `/dashboard`;
  } else {
    console.log("Login Fail");
  }
}
/***************************************************************************/

/************************************About **********************************/
function about_call() {
  let str = window.localStorage.getItem("login_details");
  let obj = JSON.parse(str);
  return axios.get("http://localhost:8080/about", {
    headers: { token: obj.token },
  });
}

function* about(action) {
  const res = yield call(about_call);
  yield put({ type: "ABOUT", value: res.data });
}
/***************************************************************************/

/*******************************Portfolio ***********************************/
function portfolio_call() {
  let str = window.localStorage.getItem("login_details");
  let obj = JSON.parse(str);
  return axios.get("http://localhost:8080/portfolio", {
    headers: { token: obj.token },
  });
}
function* portfolio(action) {
  const res = yield call(portfolio_call);
  yield put({ type: "PORTFOLIO", value: res.data });
}
/***************************************************************************/

/********************************Contact ****************************************/
function contact_call() {
  let str = window.localStorage.getItem("login_details");
  let obj = JSON.parse(str);
  return axios.get("http://localhost:8080/contact", {
    headers: { token: obj.token },
  });
}
function* contact(action) {
  const res = yield call(contact_call);
  yield put({ type: "CONTACT", value: res.data });
}
/********************************************************************************/

/********************************Logout ****************************************/
function logout_call() {
  let str = window.localStorage.getItem("login_details");
  let obj = JSON.parse(str);
  return axios.get("http://localhost:8080/logout", {
    headers: { token: obj.token },
  });
}
function* logout(action) {
  const res = yield call(logout_call);
  if (res.data.logout === "success") {
    window.localStorage.removeItem("login_details");
    yield put({ type: "LOGOUT", value: res.data });
    window.location.href = `/login`;
  }
}
/********************************************************************************/

/********************************************************************************/
export function* main_fun() {
  yield takeLatest("REGISTER_ACTION", register);
  yield takeLatest("LOGIN_ACTION", login);
  yield takeLatest("ABOUT_ACTION", about);
  yield takeLatest("PORTFOLIO_ACTION", portfolio);
  yield takeLatest("CONTACT_ACTION", contact);
  yield takeLatest("LOGOUT_ACTION", logout);
}
/********************************************************************************/
