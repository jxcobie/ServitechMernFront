import ThemeReducer from "./ThemeReducer"
import { combineReducers } from "redux"
import invoiceReducer from './invoiceReducer';
import soumissionReducer from './soumissionReducer';
import inspectionReducer from './inspectionReducer';

const rootReducer = combineReducers({
    invoices: invoiceReducer,
    soumissions: soumissionReducer,
    inspections: inspectionReducer,
    ThemeReducer
})

export default rootReducer