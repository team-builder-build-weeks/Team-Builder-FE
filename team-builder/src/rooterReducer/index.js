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
      }, {
        "id": 3,
        "project_name": "Mat Lam Tam",
        "description": 3,
        "team_members": [
          {
            "id": 1,
            "name": "Yevette Antonoczyk",
            "email": "yantonoczyk0@exblog.jp",
            "role": "Tax Accountant"
          },
          {
            "id": 2,
            "name": "Dorris Labrom",
            "email": "dlabrom1@deviantart.com",
            "role": "Administrative Assistant II"
          },
          {
            "id": 3,
            "name": "Rollin Dannel",
            "email": "rdannel2@chronoengine.com",
            "role": "Information Systems Manager"
          },
          {
            "id": 4,
            "name": "Lauritz Scandwright",
            "email": "lscandwright3@prnewswire.com",
            "role": "Research Associate"
          },
          {
            "id": 5,
            "name": "Ninette Paylor",
            "email": "npaylor4@sakura.ne.jp",
            "role": "Design Engineer"
          }
        ]
      }, {
        "id": 4,
        "project_name": "Pannier",
        "description": 4,
        "team_members": [
          {
            "id": 1,
            "name": "Coop Ahrend",
            "email": "cahrend0@epa.gov",
            "role": "Mechanical Systems Engineer"
          },
          {
            "id": 2,
            "name": "Arley Brearty",
            "email": "abrearty1@bloglines.com",
            "role": "Actuary"
          }
        ]
      }, {
        "id": 5,
        "project_name": "Tres-Zap",
        "description": 5,
        "team_members": [
          {
            "id": 1,
            "name": "Jenica Bottom",
            "email": "jbottom0@geocities.jp",
            "role": "Account Coordinator"
          },
          {
            "id": 2,
            "name": "Kamilah Hailey",
            "email": "khailey1@irs.gov",
            "role": "Community Outreach Specialist"
          },
          {
            "id": 3,
            "name": "Burl Itzak",
            "email": "bitzak2@edublogs.org",
            "role": "Environmental Tech"
          }
        ]
      }, {
        "id": 6,
        "project_name": "It",
        "description": 6,
        "team_members": [
          {
            "id": 1,
            "name": "Glori Yarnall",
            "email": "gyarnall0@adobe.com",
            "role": "Systems Administrator III"
          },
          {
            "id": 2,
            "name": "Ethelyn Calterone",
            "email": "ecalterone1@nationalgeographic.com",
            "role": "Environmental Specialist"
          },
          {
            "id": 3,
            "name": "Mufinella Blacksland",
            "email": "mblacksland2@etsy.com",
            "role": "Recruiter"
          }
        ]
      }, {
        "id": 7,
        "project_name": "Zamit",
        "description": 7,
        "team_members": [
          {
            "id": 1,
            "name": "Selby Ourry",
            "email": "sourry0@drupal.org",
            "role": "Account Executive"
          },
          {
            "id": 2,
            "name": "Davy Streets",
            "email": "dstreets1@csmonitor.com",
            "role": "Help Desk Technician"
          }
        ]
      }, {
        "id": 8,
        "project_name": "Stringtough",
        "description": 8,
        "team_members": [
          {
            "id": 1,
            "name": "Maurice Kingsbury",
            "email": "mkingsbury0@phpbb.com",
            "role": "Account Representative II"
          },
          {
            "id": 2,
            "name": "Krystal Ebbens",
            "email": "kebbens1@boston.com",
            "role": "Assistant Manager"
          },
          {
            "id": 3,
            "name": "Cori Domek",
            "email": "cdomek2@buzzfeed.com",
            "role": "Executive Secretary"
          }
        ]
      }, {
        "id": 9,
        "project_name": "Transcof",
        "description": 9,
        "team_members": [
          {
            "id": 1,
            "name": "Nicole Wotherspoon",
            "email": "nwotherspoon0@chron.com",
            "role": "Analog Circuit Design manager"
          },
          {
            "id": 2,
            "name": "Kayla Birkenshaw",
            "email": "kbirkenshaw1@army.mil",
            "role": "Research Assistant I"
          }
        ]
      }, {
        "id": 10,
        "project_name": "Keylex",
        "description": 10,
        "team_members": [
          {
            "id": 1,
            "name": "Corilla Sarfati",
            "email": "csarfati0@imdb.com",
            "role": "Administrative Assistant IV"
          },
          {
            "id": 2,
            "name": "Say Draco",
            "email": "sdraco1@wisc.edu",
            "role": "Dental Hygienist"
          },
          {
            "id": 3,
            "name": "Ransom Soldan",
            "email": "rsoldan2@t-online.de",
            "role": "Human Resources Assistant II"
          },
          {
            "id": 4,
            "name": "Francisco Carlett",
            "email": "fcarlett3@hugedomains.com",
            "role": "Database Administrator III"
          }
        ]
      }, {
        "id": 11,
        "project_name": "Sonair",
        "description": 11,
        "team_members": [
          {
            "id": 1,
            "name": "Far Kubin",
            "email": "fkubin0@weibo.com",
            "role": "Budget/Accounting Analyst II"
          },
          {
            "id": 2,
            "name": "Rebecca Dunkerk",
            "email": "rdunkerk1@ebay.co.uk",
            "role": "Nurse"
          },
          {
            "id": 3,
            "name": "Zelig Sauniere",
            "email": "zsauniere2@sbwire.com",
            "role": "Environmental Specialist"
          }
        ]
      }, {
        "id": 12,
        "project_name": "Cardguard",
        "description": 12,
        "team_members": [
          {
            "id": 1,
            "name": "Kippie Gaspard",
            "email": "kgaspard0@bloomberg.com",
            "role": "Software Consultant"
          },
          {
            "id": 2,
            "name": "Saw Speak",
            "email": "sspeak1@nymag.com",
            "role": "Quality Engineer"
          },
          {
            "id": 3,
            "name": "Brandon Picard",
            "email": "bpicard2@gnu.org",
            "role": "Product Engineer"
          },
          {
            "id": 4,
            "name": "Therese Petit",
            "email": "tpetit3@list-manage.com",
            "role": "Human Resources Assistant IV"
          }
        ]
      }, {
        "id": 13,
        "project_name": "Temp",
        "description": 13,
        "team_members": [
          {
            "id": 1,
            "name": "Poul Frandsen",
            "email": "pfrandsen0@jiathis.com",
            "role": "Media Manager I"
          },
          {
            "id": 2,
            "name": "Hazel Ullett",
            "email": "hullett1@fotki.com",
            "role": "Geologist III"
          },
          {
            "id": 3,
            "name": "Harper Aubert",
            "email": "haubert2@acquirethisname.com",
            "role": "Speech Pathologist"
          },
          {
            "id": 4,
            "name": "Farra Kopecka",
            "email": "fkopecka3@foxnews.com",
            "role": "Senior Developer"
          }
        ]
      }, {
        "id": 14,
        "project_name": "Otcom",
        "description": 14,
        "team_members": [
          {
            "id": 1,
            "name": "Frankie Sadlier",
            "email": "fsadlier0@jalbum.net",
            "role": "Structural Engineer"
          },
          {
            "id": 2,
            "name": "Persis Wickson",
            "email": "pwickson1@delicious.com",
            "role": "Senior Developer"
          },
          {
            "id": 3,
            "name": "Ralina Shutt",
            "email": "rshutt2@discuz.net",
            "role": "Mechanical Systems Engineer"
          }
        ]
      }, {
        "id": 15,
        "project_name": "Fix San",
        "description": 15,
        "team_members": [
          {
            "id": 1,
            "name": "Amandie Lainge",
            "email": "alainge0@wordpress.org",
            "role": "Design Engineer"
          },
          {
            "id": 2,
            "name": "Cordie Shiril",
            "email": "cshiril1@pagesperso-orange.fr",
            "role": "Statistician I"
          },
          {
            "id": 3,
            "name": "Adara Rosenhaupt",
            "email": "arosenhaupt2@tuttocitta.it",
            "role": "Sales Representative"
          }
        ]
      }, {
        "id": 16,
        "project_name": "Zathin",
        "description": 16,
        "team_members": [
          {
            "id": 1,
            "name": "Luelle Taggett",
            "email": "ltaggett0@alibaba.com",
            "role": "Help Desk Technician"
          },
          {
            "id": 2,
            "name": "Isa McNamee",
            "email": "imcnamee1@51.la",
            "role": "Media Manager III"
          },
          {
            "id": 3,
            "name": "Sherman Aronstein",
            "email": "saronstein2@deliciousdays.com",
            "role": "Engineer III"
          },
          {
            "id": 4,
            "name": "Stevy Base",
            "email": "sbase3@nsw.gov.au",
            "role": "Computer Systems Analyst II"
          }
        ]
      }, {
        "id": 17,
        "project_name": "Bitchip",
        "description": 17,
        "team_members": [
          {
            "id": 1,
            "name": "Ave Burthom",
            "email": "aburthom0@guardian.co.uk",
            "role": "Sales Representative"
          },
          {
            "id": 2,
            "name": "Forbes Ghelardi",
            "email": "fghelardi1@chron.com",
            "role": "Community Outreach Specialist"
          }
        ]
      }, {
        "id": 18,
        "project_name": "Zoolab",
        "description": 18,
        "team_members": [
          {
            "id": 1,
            "name": "Kirby Dioniso",
            "email": "kdioniso0@upenn.edu",
            "role": "Graphic Designer"
          },
          {
            "id": 2,
            "name": "Kingston Letertre",
            "email": "kletertre1@cdbaby.com",
            "role": "Executive Secretary"
          },
          {
            "id": 3,
            "name": "Claudetta Mc Menamin",
            "email": "cmc2@livejournal.com",
            "role": "Mechanical Systems Engineer"
          }
        ]
      }, {
        "id": 19,
        "project_name": "Zontrax",
        "description": 19,
        "team_members": [
          {
            "id": 1,
            "name": "Enrika Dreini",
            "email": "edreini0@studiopress.com",
            "role": "Nuclear Power Engineer"
          },
          {
            "id": 2,
            "name": "Tedi Geffcock",
            "email": "tgeffcock1@economist.com",
            "role": "Nurse"
          }
        ]
      }, {
        "id": 20,
        "project_name": "Daltfresh",
        "description": 20,
        "team_members": [
          {
            "id": 1,
            "name": "Ewan L' Anglois",
            "email": "el0@jimdo.com",
            "role": "Desktop Support Technician"
          },
          {
            "id": 2,
            "name": "Charmane Alennikov",
            "email": "calennikov1@gravatar.com",
            "role": "Financial Analyst"
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