// src/reducers/soumissionReducer.js

import { FETCH_SOUSSIONS, ADD_SOUSSION, UPDATE_SOUSSION, DELETE_SOUSSION } from '../actions/soumissionActions';

const initialState = {
  soumissions: [],
};

const soumissionReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SOUSSIONS:
      return { ...state, soumissions: action.payload };
    case ADD_SOUSSION:
      return { ...state, soumissions: [...state.soumissions, action.payload] };
    case UPDATE_SOUSSION:
      return {
        ...state,
        soumissions: state.soumissions.map((soumission) =>
          soumission._id === action.payload._id ? action.payload : soumission
        ),
      };
    case DELETE_SOUSSION:
      return {
        ...state,
        soumissions: state.soumissions.filter((soumission) => soumission._id !== action.payload),
      };
    default:
      return state;
  }
};

export default soumissionReducer;
