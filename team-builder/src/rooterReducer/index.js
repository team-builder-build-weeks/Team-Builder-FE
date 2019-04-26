// import{ LOGIN_START, LOGIN_SUCCESS, LOGIN_FAIL, FETCHING_PROJECT_START, ADD_PROJECT_SUCCESS, ADD_PROJECT_FAIL, ADD_PROJECT_START, FETCHING_PROJECT_SUCCESS, FETCHING_PROJECT_FAIL, DELETE_PROJECT_START, DELETE_PROJECT_SUCCESS, DELETE_PROJECT_FAIL, SIGNUP_START, SIGNUP_SUCCESS, SIGNUP_FAIL, ADD_ROLES_START, ADD_ROLES_SUCCESS, ADD_ROLES_FAIL, TOGGLEVIEW } from '../action';

import{ TOGGLEVIEW, LOGIN_START, LOGIN_SUCCESS, LOGIN_FAIL, FETCHING_PROJECT_START, ADD_PROJECT_SUCCESS, ADD_PROJECT_FAIL, ADD_PROJECT_START, FETCHING_PROJECT_SUCCESS, FETCHING_PROJECT_FAIL, DELETE_PROJECT_START, DELETE_PROJECT_SUCCESS, DELETE_PROJECT_FAIL, SIGNUP_START, SIGNUP_SUCCESS, SIGNUP_FAIL, ADD_ROLES_START, ADD_ROLES_SUCCESS, ADD_ROLES_FAIL, EDIT_PROJECT_START, EDIT_PROJECT_SUCCESS, EDIT_PROJECT_FAIL, GETIN_PROJECT_START, GETIN_PROJECT_SUCCESS, GETIN_PROJECT_FAIL } from '../action';

import { loadState } from '../localStorage';
// const mockData = JSON.parse(require('../mockData.json'))
// console.log(mockData)

let initialState = loadState() || {
    project:[],
    displayGrid: true,
    isLoading: false,
    projectList: [{
        id: null,
        name:'',
        description:''
    }]
}


function reducer(state=initialState, action){
    switch(action.type) {
        case SIGNUP_START:
         return {
            ...state,
            error:'',
            isLoading: true
        }

       case LOGIN_START:
         return {
            ...state,
            error:'',
            isLoading: true
        }

       case FETCHING_PROJECT_START:
         return {
            ...state,
            error:'',
            isLoading: true
        }

       case ADD_PROJECT_START:
         return {
            ...state,
            error:'',
            isLoading: true
        }

       case DELETE_PROJECT_START:
         return {
            ...state,
            error:'',
            isLoading: true
        }

       case ADD_ROLES_START:
         return {
            ...state,
            error:'',
            isLoading: true
        }

       case EDIT_PROJECT_START:
         return {
            ...state,
            error:'',
            isLoading: true
        }

       case GETIN_PROJECT_START:
        return {
            ...state,
            error:'',
            isLoading: true
        }

        case SIGNUP_SUCCESS:
        return {
            ...state,
            error:'',
            isLoading: false
        }

        case LOGIN_SUCCESS:
        return{
            ...state,
            error:'',
            isLoading: false
        }
        case ADD_PROJECT_SUCCESS:
        return {
            ...state,
            isLoading: false,
            projectList: action.payload
        }

        case DELETE_PROJECT_SUCCESS:
        return {
            ...state,
            isLoading: false,
            projectList: state.projectList.filter((project)=>{
                return project.id !== action.payload
            })
        }

        case EDIT_PROJECT_SUCCESS:
        // console.log('in red', action.payload)
        return {
            ...state,
            isLoading: false,
            projectList: state.projectList.map(project=>{
                if(action.payload.id==project.id){
                    return action.payload
                }
                return project
            })
        }
        
        case GETIN_PROJECT_SUCCESS:
        return{
            ...state,
            isLoading: false,
            project: action.payload
        }

        case FETCHING_PROJECT_SUCCESS:
        return {
            ...state,
            isLoading: false,
            projectList: [ ...action.payload ]
        }
        case ADD_ROLES_SUCCESS:
        return {
            ...state,
            isLoading: false,
            projectList: [
                ...state.projectList,
                action.payload,
            ],
            error:'', 
        }

        case SIGNUP_FAIL:
         return {
            ...state,
            isLoading: false,
        }

       case LOGIN_FAIL:
        return {
            ...state,
            error: action.payload,
            isloading: false
        }

        case GETIN_PROJECT_FAIL:
         return {
            ...state,
            isLoading: false,
        }

        case FETCHING_PROJECT_FAIL:
           return {
            ...state,
            isLoading: false,
        }

        case ADD_PROJECT_FAIL:
          return {
            ...state,
            isLoading: false,
        }

      case DELETE_PROJECT_FAIL:
         return {
            ...state,
            isLoading: false,
        }

       case ADD_ROLES_FAIL:
        return {
            ...state,
            isLoading: false,
        }

        case EDIT_PROJECT_FAIL:
        return {
            ...state,
            error: action.payload,
            isLoading: false
        }
        case TOGGLEVIEW:
            return {
                ...state,
                displayGrid: !state.displayGrid,
            
            }
        default:
        return state
    }
}

export default reducer;