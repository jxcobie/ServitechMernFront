import { FETCH_INVOICES, ADD_INVOICE, UPDATE_INVOICE, DELETE_INVOICE } from '../actions/invoiceActions';

const initialState = {
  invoices: [],
};

const invoiceReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_INVOICES:
      return { ...state, invoices: action.payload };
    case ADD_INVOICE:
      return { ...state, invoices: [...state.invoices, action.payload] };
    case UPDATE_INVOICE:
      return {
        ...state,
        invoices: state.invoices.map((invoice) =>
          invoice._id === action.payload._id ? action.payload : invoice
        ),
      };
    case DELETE_INVOICE:
      return {
        ...state,
        invoices: state.invoices.filter((invoice) => invoice._id !== action.payload),
      };
    default:
      return state;
  }
};

export default invoiceReducer;
