import { STAFF_ADD, STAFF_ALL, STAFF_BYID, STAFF_DELETE, STAFF_UPDATE } from "../actions/StaffConstants"

const initialState={
    newStaff: null,
    staffs: [],
    staff: null,
    updatedStaff: null,
    deletedStaff: null
}
export default function staffReducer(state=initialState, action)
{
 if(action.type===STAFF_ADD)
 {
    return({
        ...state,
        newStaff: action.payload
    })
 }
 if(action.type===STAFF_ALL)
 {
    return({
        ...state,
        staffs: action.payload
    })
 }
 if(action.type===STAFF_BYID)
 {
    return({
        ...state,
        staff: action.payload
    })
 }
 if(action.type===STAFF_DELETE)
 {
    return({
        ...state,
        deletedStaff: action.payload

    })
 }
 if(action.type===STAFF_UPDATE)
 {
    return({
        ...state,
        updatedStaff: action.payload
    })
 }
 else
 {
    return state;
 }
}