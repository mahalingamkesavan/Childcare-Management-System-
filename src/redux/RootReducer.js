import { combineReducers } from "redux";
import {TokenReducer} from "./Login/Login.Reducer";
import { ParentReducer} from "./Parent/ParentList/Parent.Reducer";
import{ParentProfileReducer} from "./Parent/ParentProfile/ParentProfile.Reducer";
import{ChildReducer} from "./Child/Child.Reducer";
import { EnrollmentReducer } from "./Enrollment/Enrollment.Reducer";
import { ChildProfileReducer } from "./Child_Profiles/Child_Profiles.Reducer";

export const rootReducer = combineReducers({
     Token :TokenReducer,
     ParentList:ParentReducer,
     ParentProfile:ParentProfileReducer,
     ChildList:ChildReducer,
     EnrollmentList:EnrollmentReducer,
     ChildProfileList:ChildProfileReducer,
})
