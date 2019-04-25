import{ LOGIN_START, LOGIN_SUCCESS, LOGIN_FAIL, FETCHING_PROJECT_START, ADD_PROJECT_SUCCESS, ADD_PROJECT_FAIL, ADD_PROJECT_START, FETCHING_PROJECT_SUCCESS, FETCHING_PROJECT_FAIL, DELETE_PROJECT_START, DELETE_PROJECT_SUCCESS, DELETE_PROJECT_FAIL, SIGNUP_START, SIGNUP_SUCCESS, SIGNUP_FAIL, ADD_ROLES_START, ADD_ROLES_SUCCESS, ADD_ROLES_FAIL } from '../action';

const initialState = {
    project:[],
    projectList: [{
        id:null,
        name:'',
        description:''
    }]
}


function reducer(state=initialState, action){
    switch(action.type) {
        case SIGNUP_START:
        case LOGIN_START:
        case FETCHING_PROJECT_START:
        case ADD_PROJECT_START:
        case DELETE_PROJECT_START:
        case ADD_ROLES_START:
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
            projectList: [
                ...state.projectList,
                action.payload
            ]
        }

        case DELETE_PROJECT_SUCCESS:
        return {
            // ...state,
            projectList: state.projectList.filter((project, id)=>{
                return id !== action.payload
            })
        }

        case FETCHING_PROJECT_SUCCESS:
        return {
            ...state,
            projectList: action.payload.map(project => { project.id = project._id; return project; })
        }
        case ADD_ROLES_SUCCESS:
        return {
            ...state,
            projectList: [
                ...state.projectList,
                action.payload,
            ],
            error:'', 
            isLoading: false
        }

        case SIGNUP_FAIL:
        case LOGIN_FAIL:
        case FETCHING_PROJECT_FAIL:
        case ADD_PROJECT_FAIL:
        case DELETE_PROJECT_FAIL:
        case ADD_ROLES_FAIL:
        return {
            ...state,
            error: action.payload,
            isLoading: false
        }
        case 'persist/REHYDRATE':
        return {
            ...state, hydratedState: action.payload
        }
        case 'persist/PERSIST':
        return {
            ...state, persistedState: action.payload
        }
        default:
        return state
    }
}

export default reducer;