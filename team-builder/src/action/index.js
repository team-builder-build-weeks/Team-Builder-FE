import axios from 'axios';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

export const FETCHING_PROJECT_START = 'FETCHING_PROJECT_START';
export const FETCHING_PROJECT_SUCCESS = 'FETCHING_PROJECT_SUCCESS';
export const FETCHING_PROJECT_FAIL = 'FETCHING_PROJECT_FAIL';

export const ADD_PROJECT_START = 'ADD_PROJECT_START';
export const ADD_PROJECT_SUCCESS = 'ADD_PROJECT_SUCCESS';
export const ADD_PROJECT_FAIL = 'ADD_PROJECT_FAIL';

export const DELETE_PROJECT_START = 'DELETE_PROJECT_START';
export const DELETE_PROJECT_SUCCESS = 'DELETE_PROJECT_SUCCESS';
export const DELETE_PROJECT_FAIL = 'DELETE_PROJECT_FAIL';

export const login = credentails => dispatch => {
    dispatch({ type: LOGIN_START });

    return axios.post('http://localhost:5000/api/login', credentails)
    // localStorage.setItem('token', response.data.token)
    .then(res => dispatch({ type: LOGIN_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: LOGIN_FAIL, payload: err }))
}

export const getProjects = () => dispatch => {
    dispatch({ type:FETCHING_PROJECT_START });

    return axios.get("http://")
    .then(res => dispatch({ type: FETCHING_PROJECT_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: FETCHING_PROJECT_FAIL, payload: err }))
}

export const addProject = newProject => dispatch => {
    dispatch({ type: ADD_PROJECT_START });
    const newProject = {
        "name": "an app"
    }
    return axios.put('http://', newProject)
    .then(res => dispatch({ type: ADD_PROJECT_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: DELETE_PROJECT_FAIL, payload: err }))
}

export const deleteProject = id => dispatch => {
    dispatch({ type: DELETE_PROJECT_START });

    return axios.delete(`http://${id}`)
    .then(res => dispatch({ type: DELETE_PROJECT_START, playload: res.data }))
    .catch(res => dispatch({ type: DELETE_PROJECT_FAIL, payload: res.data }))
}