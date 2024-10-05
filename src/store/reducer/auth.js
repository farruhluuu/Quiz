const initialState = {
  authAdmin: { name: 'faruh', password: '1234', isAdmin: false },
  question: JSON.parse(localStorage.getItem('question')) || [],
  users: JSON.parse(localStorage.getItem('users')) || [],
  resultsUsers: JSON.parse(localStorage.getItem('results')) || [],
  student: null,
};

export const auth = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ADMIN": {
      const { name, password } = action.payload;
      
      if (state.authAdmin.name === name && state.authAdmin.password === password) {
        return {
          ...state,
          authAdmin: { ...state.authAdmin, isAdmin: true }
        };
      } else {
        return {
          ...state,
          authAdmin: { ...state.authAdmin, isAdmin: false }
        };
      }
    }
    
    case "RESET_ADMIN": {
      return {
        ...state,
        authAdmin: { ...state.authAdmin, isAdmin: false }
      };
    }
    
    case "ADD_NEW_QUESTION": {
      return {
        ...state,
        question: [
          ...state.question,
          {
            id: Date.now(),
            title: action.payload.title,
            variants: {
              variant_1: { isCorrect: action.payload.addQuestion.quest_1.isCorrect, discription: action.payload.dictFirst },
              variant_2: { isCorrect: action.payload.addQuestion.quest_2.isCorrect, discription: action.payload.dictSecond },
              variant_3: { isCorrect: action.payload.addQuestion.quest_3.isCorrect, discription: action.payload.dictThred },
            }
          }
        ]
      };
    }

    case "DELETE_QUESTION": {
      return {
        ...state,
        question: state.question.filter((item) => item.id !== action.payload.id)
      };
    }

    case 'AUTH_STUDENT': {
      const studentData = {
          id: Date.now(), // Add an ID for unique identification
          name: action.payload.name,
          surname: action.payload.surname,
      };
      localStorage.setItem('student', JSON.stringify(studentData));
      return {
          ...state,
          student: studentData,
      };
  }

  case 'SAVE_RESULTS': {
    const updatedResults = [...state.resultsUsers, { 
      ...action.payload, 
      id: Date.now(),
      correctAnswers: action.payload.correctAnswers, // Store correct answers
      totalQuestions: action.payload.totalQuestions // Store total questions
    }];
    localStorage.setItem('results', JSON.stringify(updatedResults));
    return {
      ...state,
      resultsUsers: updatedResults,
    };
  }


    case 'LOGOUT_STUDENT': {
      return {
        ...state,
        student: null
      };
    }

    case 'DELETE_USER': {
      const updatedResults = state.resultsUsers.filter(user => user.id !== action.payload);
      localStorage.setItem('results', JSON.stringify(updatedResults));
      return {
          ...state,
          resultsUsers: updatedResults
      };
  }

    default:
      return state;
  }
};
