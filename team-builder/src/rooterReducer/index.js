import{ LOGIN_START, LOGIN_SUCCESS, LOGIN_FAIL, FETCHING_PROJECT_START, ADD_PROJECT_SUCCESS, ADD_PROJECT_FAIL, ADD_PROJECT_START, FETCHING_PROJECT_SUCCESS, FETCHING_PROJECT_FAIL, DELETE_PROJECT_START, DELETE_PROJECT_SUCCESS, DELETE_PROJECT_FAIL } from '../action';

const initialState = {
    // project:{
    //     projectName:'',
    //     projectDisc:'',
    //     teamMembers:[],
    //     isLoading: false,
    //     id: Date.now(),
    //     error:''
    // }

    projects: [{
        "id": 1,
        "project_name": "Otcom",
        "description": 1,
        "team_members": [
          {
            "id": 1,
            "name": "Dun Skippon",
            "email": "dskippon0@angelfire.com",
            "role": "Civil Engineer"
          },
          {
            "id": 2,
            "name": "Toiboid Waldie",
            "email": "twaldie1@pinterest.com",
            "role": "Chemical Engineer"
          },
          {
            "id": 3,
            "name": "Dara deKnevet",
            "email": "ddeknevet2@cbc.ca",
            "role": "Payment Adjustment Coordinator"
          },
          {
            "id": 4,
            "name": "Carlina Brea",
            "email": "cbrea3@nature.com",
            "role": "Senior Financial Analyst"
          },
          {
            "id": 5,
            "name": "Randene Dumbellow",
            "email": "rdumbellow4@instagram.com",
            "role": "Actuary"
          }
        ]
      }, {
        "id": 2,
        "project_name": "Zathin",
        "description": 2,
        "team_members": [
          {
            "id": 1,
            "name": "Tab Curado",
            "email": "tcurado0@photobucket.com",
            "role": "Internal Auditor"
          },
          {
            "id": 2,
            "name": "Erv Pfeffle",
            "email": "epfeffle1@hhs.gov",
            "role": "Registered Nurse"
          }
        ]
      }]
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