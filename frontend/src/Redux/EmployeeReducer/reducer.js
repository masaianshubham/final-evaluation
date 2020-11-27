import {
    GETEMPLOYEEFAILURE,
    GETEMPLOYEEREQUEST,
    GETEMPLOYEESUCCESS,
    ADDEMPLOYEEFAILURE,
    ADDEMPLOYEEREQUEST,
    ADDEMPLOYEESUCCESS
  } from "./actionTypes";

  export const initState = {
    employee:  [],
    error: "",
    totalPage: 1
  }
  
  const reducer = (state = initState, action) => {
    switch (action.type) {
      case GETEMPLOYEEREQUEST:
        return {
          ...state,
          error: "",
          employee: []
        };
      case GETEMPLOYEEFAILURE:
        return {
          ...state,
          error: action.payload
        };
      case GETEMPLOYEESUCCESS:
        return {
          ...state,
          error: "",
          employee: action.payload.employee,
          totalPage: action.payload.totalPages
        };
      case ADDEMPLOYEEREQUEST:
        return {
          ...state,
          error: ""
        };
      case ADDEMPLOYEEFAILURE:
        return {
          ...state,
          error: action.payload
        };
      case ADDEMPLOYEESUCCESS:
        return {
          ...state,
          error: ""
        };
      default:
        return state;
    }
  }
  
  export default reducer