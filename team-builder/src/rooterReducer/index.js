import{ LOGIN_START, LOGIN_SUCCESS, LOGIN_FAIL, FETCHING_PROJECT_START, ADD_PROJECT_SUCCESS, ADD_PROJECT_FAIL, ADD_PROJECT_START, FETCHING_PROJECT_SUCCESS, FETCHING_PROJECT_FAIL, DELETE_PROJECT_START, DELETE_PROJECT_SUCCESS, DELETE_PROJECT_FAIL } from '../action';

const initialState = {
    project:{
        projectName:'',
        projectDisc:'',
        teamMembers:[],
        isLoading: false,
        id: Date.now(),
        error:''
    },
    projectsList: []
}


function reducer(state=initialState, action){
    switch(action.type) {
        case LOGIN_START:
        case FETCHING_PROJECT_START:
        case ADD_PROJECT_START:
        case DELETE_PROJECT_START:
        return {
            ...state,
            error:'',
            isLoading: true
        }

        case LOGIN_SUCCESS:
        case ADD_PROJECT_SUCCESS:
        case DELETE_PROJECT_SUCCESS:
        case FETCHING_PROJECT_SUCCESS:
        return {
            ...state,
            projects: action.payload,
            error:'', 
            isLoading: false
        }

        case LOGIN_FAIL:
        case FETCHING_PROJECT_FAIL:
        case ADD_PROJECT_FAIL:
        case DELETE_PROJECT_FAIL:
        return {
            ...state,
            error: action.payload,
            isLoading: false
        }


        default:
        return state
    }
}

export default reducer;