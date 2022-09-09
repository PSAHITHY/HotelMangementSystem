import { combineReducers } from "redux"
import roomReducer from "./RoomReducer"
import inventoryReducer from "./InventoryReducer";
import departmentReducer from "./DepartmentReducer";
import staffReducer from "./StaffReducer";
import reservationReducer from "./ReservationReducer";
import guestReducer from "./GuestReducer";
import adminReducer from "./AdminReducer";
import receptionistReducer from "./ReceptionistReducer";
import managerReducer from "./ManagerReducer";

const rootReducer = combineReducers({
    roomReducer,
    inventoryReducer,
    departmentReducer,
    staffReducer,
    reservationReducer,
    guestReducer,
    adminReducer,
    receptionistReducer,
    managerReducer

})
export default rootReducer;