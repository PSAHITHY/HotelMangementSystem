import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from 'react-router-dom';
import Home from './Components/Home';
import CreateRoom from './Components/Room/CreateRoom';
import FetchAllRooms from './Components/Room/FetchAllRooms';
import FetchRoomById from './Components/Room/FetchRoomById';
import SearchRooms from './Components/Room/SearchRooms';
import CreateInventory from './Components/Inventory/CreateInventory';
import FetchAllInventories from './Components/Inventory/FetchAllInventories';
import FetchInventoryById from './Components/Inventory/FetchInventoryById';
import UpdateInventory from './Components/Inventory/UpdateInventory';
import CreateDepartment from './Components/Department/CreateDepartment';
import FetchDepartments from './Components/Department/FetchDepartments';
import CreateStaff from './Components/Staff/CreateStaff';
import FetchAllStaff from './Components/Staff/FetchAllStaff';
import FetchStaffById from './Components/Staff/FetchStaffById';
import CreateReservation from './Components/Reservation/CreateReservations';
import FetchAllReservations from './Components/Reservation/FetchAllReservations';
import CreateGuest from './Components/Guest/CreateGuest';
import FetchAllGuest from './Components/Guest/FetchAllGuest';
import FetchGuestById from './Components/Guest/FetchGuestById';
import UpdateRoom from './Components/Room/UpdateRoom';
import UpdateStaff from './Components/Staff/UpdateStaff';
import UpdateGuest from './Components/Guest/UpdateGuest';
import OwnerLogin from './Components/Owner/OwnerLogin';
import ReceptionistHome from './Components/Receptionist/ReceptionistHome';
import Login from './Components/Receptionist/Login';
import ManagerLogin from './Components/Manager/ManagerLogin';
import ListOfRooms from './Components/Room/ListOfRooms';
import OwnerDashboard from './Components/Owner/OwnerDashboard';
import ManagerDashboard from './Components/Manager/ManagerDashboard';
import ReceptionistLogout from './Components/Receptionist/ReceptionistLogout';
import OwnerLogout from './Components/Owner/OwnerLogout';
import ManagerLogout from './Components/Manager/ManagerLogout';
import CreateManager from './Components/Manager/CreateManager';
import CreateReceptionist from './Components/Receptionist/CreateReceptionist';
import RoomCheckOut from './Components/Room/RoomCheckOut';
import FetchAllAvailableRooms from './Components/Room/FetchAllAvailableRooms';
import AboutUs from './Components/AboutUs';
import Payment from './Components/Payment';


function App() {
  return (
    <div className="App">
      <Router>
        {/* <NavBar/> */}
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/room/add" element={<CreateRoom/>}/>
        <Route path="/room/all" element={<FetchAllRooms/>}/>
        <Route path="/room/find/:id" element={<FetchRoomById/>}/>
        <Route path="/room/search" element={<SearchRooms/>}/>
        <Route path="/inventory/add" element={<CreateInventory/>}/>
        <Route path="/inventory/all" element={<FetchAllInventories/>}/>
        <Route path="/inventory/find/:id" element={<FetchInventoryById/>}/>
        <Route path="/inventory/update/:id" element={<UpdateInventory/>}/>
        <Route path="/department/add" element={<CreateDepartment/>}/>
        <Route path="/department/all" element={<FetchDepartments/>}/>
        <Route path="/staff/add" element={<CreateStaff/>}/>
        <Route path="/staff/all" element={<FetchAllStaff/>}/>
        <Route path="/staff/find/:id" element={<FetchStaffById/>}/>
        <Route path="/reservation/add" element={<CreateReservation/>}/>
        <Route path="/reservation/all" element={<FetchAllReservations/>}/>
        <Route path="/guest/add" element={<CreateGuest/>}/>
        <Route path="/guest/all" element={<FetchAllGuest/>}/>
        <Route path="/guest/find/:id" element={<FetchGuestById/>}/>
        <Route path="/room/update/:id" element={<UpdateRoom/>}/>
        <Route path="/staff/update/:id" element={<UpdateStaff/>}/>
        <Route path="/guest/update/:id" element={<UpdateGuest/>}/>
        <Route path="/owner/login" element={<OwnerLogin/>}/>
        <Route path="/receptionist/dashboard" element={<ReceptionistHome/>}/>
        <Route path="/receptionist/login" element={<Login/>}/>
        <Route path="/manager/login" element={<ManagerLogin/>}/>
        <Route path="/getRooms" element={<ListOfRooms/>}/>
        <Route path="/owner/dashboard" element={<OwnerDashboard/>}/>
        <Route path="/manager/dashboard" element={<ManagerDashboard/>}/>
        <Route path="/receptionist/logout" element={<ReceptionistLogout/>}/>
        <Route path="/owner/logout" element={<OwnerLogout/>}/>
        <Route path="/manager/logout" element={<ManagerLogout/>}/>
        <Route path="/manager/add" element={<CreateManager/>}/>
        <Route path="/receptionist/add" element={<CreateReceptionist/>}/>
        <Route path="/room/checkout" element={<RoomCheckOut/>}/>
        <Route path="/room/available" element={<FetchAllAvailableRooms/>}/>
        <Route path="/aboutus" element={<AboutUs/>}/>
        <Route path="/payment" element={<Payment/>}/>
     
        </Routes>
        </Router>
    </div>
  );
}

export default App;
