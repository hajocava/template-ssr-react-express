import { ADD_TASK } from "../actions/todoActions";

const initialState = {
  tasks: [],
}

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload.task]
      }
    default:
      return state;
  }
};
