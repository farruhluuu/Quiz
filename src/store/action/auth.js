export const getAdmin = (name, password) => ({type: "GET_ADMIN", payload: {name, password}})

export const getResertAdmin = () => ({type: "RESET_ADMIN"})

export const AddNewQuestion = (object) => ({type: "ADD_NEW_QUESTION", payload: object})

export const DeleteQuestion = (id) => ({type: "DELETE_QUESTION", payload: id})

export const authStudent = (student) => ({
  type: 'AUTH_STUDENT',
  payload: student
});

export const saveTestResults = (results) => ({
  type: 'SAVE_RESULTS',
  payload: results
});

export const deleteUser = (id) => ({
  type: 'DELETE_USER',
  payload: id
});