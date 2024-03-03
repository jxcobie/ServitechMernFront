// src/reducers/inspectionReducer.js

import { FETCH_INSPECTIONS, ADD_INSPECTION, UPDATE_INSPECTION, DELETE_INSPECTION } from '../actions/inspectionActions';

const initialState = {
  inspections: [],
};

const inspectionReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_INSPECTIONS:
      return { ...state, inspections: action.payload };
    case ADD_INSPECTION:
      return { ...state, inspections: [...state.inspections, action.payload] };
    case UPDATE_INSPECTION:
      return {
        ...state,
        inspections: state.inspections.map((inspection) =>
          inspection._id === action.payload._id ? action.payload : inspection
        ),
      };
    case DELETE_INSPECTION:
      return {
        ...state,
        inspections: state.inspections.filter((inspection) => inspection._id !== action.payload),
      };
    default:
      return state;
  }
};

export default inspectionReducer;
