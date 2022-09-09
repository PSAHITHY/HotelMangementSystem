import { ROOMS_FOUND, ROOM_ADD, ROOM_ALL, ROOM_AVAIL, ROOM_CHECKOUT, ROOM_DELETE, ROOM_FETCH_BYID, ROOM_UPDATE } from "../actions/ActionConstants"
const initialState = {
newRoom:null,
room:null,
rooms: [],
foundRooms: [],
deleteRoom: null,
updatedRoom: null,
roomCheckOut: null,
availableRooms: []
}
export default function roomReducer(state = initialState, action){
    if (action.type === ROOM_ADD) {
        
        return ({
            ...state,
            newRoom: action.payload
        })
    }
    if(action.type === ROOM_ALL)
    {
        return({
            ...state,
            rooms: action.payload
        })
    }
    if(action.type===ROOM_FETCH_BYID)
    {
        return({
            ...state,
            room:action.payload
        })
    }
   
    if(action.type===ROOM_DELETE)
    {
        return({
            ...state,
            deleteRoom:action.payload
        })
    }
    if(action.type===ROOMS_FOUND)
    {
        return({
            ...state,
            foundRooms: action.payload
            
        })
        
    }
    if(action.type===ROOM_UPDATE)
    {
        return({
            ...state,
            updatedRoom: action.payload
        })
    }
    if(action.type===ROOM_CHECKOUT)
    {
        return({
            ...state,
            roomCheckOut: action.payload
        })
    }
    if(action.type===ROOM_AVAIL)
    {
        return({
            ...state,
            availableRooms: action.payload
        })
    }
    else{
        return state;
    }
    
}