import {
    GETEMPLOYEEFAILURE,
    GETEMPLOYEEREQUEST,
    GETEMPLOYEESUCCESS,
    ADDEMPLOYEEFAILURE,
    ADDEMPLOYEEREQUEST,
    ADDEMPLOYEESUCCESS,
    DELETEEMPLOYEEFAILURE,
    DELETEEMPLOYEEREQUEST,
    DELETEEMPLOYEESUCCESS
  } from "./actionTypes";
  import axios from 'axios'
  
  export const getEmployeeRequest = () => ({
      type: GETEMPLOYEEREQUEST
  })
  export const getEmployeeSuccess = (payload) => ({
      type: GETEMPLOYEESUCCESS,
      payload
  })
  
  export const getEmployeeFailure = (payload) => ({
      type: GETEMPLOYEEFAILURE,
      payload
  })
  
  export const getEmployee = (payload,page,filter,sort) => (dispatch) => {
      dispatch(getEmployeeRequest())
      axios
      .get(`http://localhost:5000/getemployee/${payload}?page=${page}&gender=${filter}&sort=${sort}`)
      .then((res)=> dispatch(getEmployeeSuccess(res.data)))
      .catch((err) => dispatch(getEmployeeFailure(err.response.data)))
  }
  
  
  export const addEmployeeRequest = () => ({
      type: ADDEMPLOYEEREQUEST
  })
  export const addEmployeeSuccess = (payload) => ({
      type: ADDEMPLOYEESUCCESS,
      payload
  })
  
  export const addEmployeeFailure = (payload) => ({
      type: ADDEMPLOYEEFAILURE,
      payload
  })
  
  export const addEmployee = (id,payload) => (dispatch) => {
      dispatch(addEmployeeRequest())
      axios
      .post(`http://localhost:5000/addemployee`,payload)
      .then((res)=> dispatch(getEmployee(id)))
      .catch((err) => dispatch(addEmployeeFailure(err.response.data)))
  }
  
  export const deleteEmployeeRequest = () => ({
      type: DELETEEMPLOYEEREQUEST
  })
  export const deleteEmployeeSuccess = (payload) => ({
      type: DELETEEMPLOYEESUCCESS,
      payload
  })
  
  export const deleteEmployeeFailure = (payload) =>({
      type: DELETEEMPLOYEEFAILURE,
      payload
  })
  
  export const deleteEmployee = (id,userId) => (dispatch) => {
      dispatch(deleteEmployeeRequest())
      axios
      .delete(`http://localhost:5000/deleteemployee/${id}`)
      .then((res)=> dispatch(getEmployee(userId)))
      .catch((err) => dispatch(deleteEmployeeFailure(err)))
  }
  