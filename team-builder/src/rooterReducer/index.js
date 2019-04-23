import{ LOGIN_START, LOGIN_SUCCESS, LOGIN_FAIL, FETCHING_PROJECT_START, ADD_PROJECT_SUCCESS, ADD_PROJECT_FAIL, ADD_PROJECT_START, FETCHING_PROJECT_SUCCESS, FETCHING_PROJECT_FAIL, DELETE_PROJECT_START, DELETE_PROJECT_SUCCESS, DELETE_PROJECT_FAIL, SIGNUP_START, SIGNUP_SUCCESS, SIGNUP_FAIL } from '../action';

const initialState = {
    // project:{
    //     projectName:'',
    //     projectDisc:'',
    //     teamMembers:[],
    //     isLoading: false,
    //     id: Date.now(),
    //     error:''
    // }
    project:[],
    projectsList: [{
        id: 2,
        projectName: "Zathin",
        projectDisc: 2,
        teamMembers: [
          {
            id: 1,
            name: "Tab Curado",
            email: "tcurado0@photobucket.com",
            role: "Internal Auditor"
          },
          {
            id: 2,
            name: "Erv Pfeffle",
            email: "epfeffle1@hhs.gov",
            role: "Registered Nurse"
          }
        ]
      },
      {
        id: 3,
        projectName: "apple",
        projectDisc: 2,
        teamMembers: [
          {
            id: 7,
            name: "jonny appleseed",
            email: "tcurado0@photobucket.com",
            role: "Internal Auditor"
          },
          {
            id: 8,
            name: "banana",
            email: "epfeffle1@hhs.gov",
            role: "Registered Nurse"
          }
        ]
      }
    ]
}


function reducer(state=initialState, action){
    switch(action.type) {
        case SIGNUP_START:
        case LOGIN_START:
        case FETCHING_PROJECT_START:
        case ADD_PROJECT_START:
        case DELETE_PROJECT_START:
        return {
            ...state,
            error:'',
            isLoading: true
        }

        case SIGNUP_SUCCESS:
        case LOGIN_SUCCESS:
        case ADD_PROJECT_SUCCESS:
        case DELETE_PROJECT_SUCCESS:
        case FETCHING_PROJECT_SUCCESS:
        return {
            ...state,
            // projects: action.payload,
            error:'', 
            isLoading: false
        }

        case SIGNUP_FAIL:
        case LOGIN_FAIL:
        case FETCHING_PROJECT_FAIL:
        case ADD_PROJECT_FAIL:
        case DELETE_PROJECT_FAIL:
        return {
            ...state,
            // error: action.payload,
            isLoading: false
        }

        default:
        return state
    }
}

export default reducer;